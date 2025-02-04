import { Pressable, StyleSheet } from 'react-native';
import { Box, HStack, StatusBar, useColorMode, VStack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import idx from 'idx';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AddWalletIcon from 'src/assets/images/addWallet_illustration.svg';
import CollaborativeIcon from 'src/assets/images/collaborative_vault_white.svg';
import WalletIcon from 'src/assets/images/daily_wallet.svg';
import VaultIcon from 'src/assets/images/vault_icon.svg';
import TribeWalletIcon from 'src/assets/images/hexagontile_wallet.svg';

import WhirlpoolAccountIcon from 'src/assets/images/whirlpool_account.svg';
import CoinsIcon from 'src/assets/images/coins.svg';
import BTC from 'src/assets/images/icon_bitcoin_white.svg';
import SettingIcon from 'src/assets/images/settings.svg';
import TickIcon from 'src/assets/images/icon_tick.svg';
import { hp, wp } from 'src/constants/responsive';
import Text from 'src/components/KeeperText';
import { refreshWallets } from 'src/store/sagaActions/wallets';
import { setIntroModal } from 'src/store/reducers/wallets';
import { useAppSelector } from 'src/store/hooks';
import KeeperHeader from 'src/components/KeeperHeader';
import useWallets from 'src/hooks/useWallets';

import { DerivationPurpose, EntityKind, VaultType, WalletType } from 'src/services/wallets/enums';
import ActivityIndicatorView from 'src/components/AppActivityIndicator/ActivityIndicatorView';
import { LocalizationContext } from 'src/context/Localization/LocContext';
import CardPill from 'src/components/CardPill';
import ActionCard from 'src/components/ActionCard';
import { AppStackParams } from 'src/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Colors from 'src/theme/Colors';
import HexagonIcon from 'src/components/HexagonIcon';
import WalletUtilities from 'src/services/wallets/operations/utils';
import CurrencyInfo from '../Home/components/CurrencyInfo';
import LearnMoreModal from './components/LearnMoreModal';
import TransactionFooter from './components/TransactionFooter';
import Transactions from './components/Transactions';
import useToastMessage, { IToastCategory } from 'src/hooks/useToastMessage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BTCAmountPill from 'src/components/BTCAmountPill';
import { SentryErrorBoundary } from 'src/services/sentry';

export const allowedSendTypes = [
  WalletType.DEFAULT,
  WalletType.IMPORTED,
  WalletType.POST_MIX,
  WalletType.BAD_BANK,
];
export const allowedRecieveTypes = [WalletType.DEFAULT, WalletType.IMPORTED];

export const allowedMixTypes = [WalletType.DEFAULT, WalletType.IMPORTED];
// TODO: add type definitions to all components
function TransactionsAndUTXOs({ transactions, setPullRefresh, pullRefresh, wallet }) {
  const { walletSyncing } = useAppSelector((state) => state.wallet);
  const syncing = walletSyncing && wallet ? !!walletSyncing[wallet.id] : false;

  return (
    <>
      <ActivityIndicatorView visible={syncing} showLoader />
      <Transactions
        transactions={transactions}
        setPullRefresh={setPullRefresh}
        pullRefresh={pullRefresh}
        currentWallet={wallet}
      />
    </>
  );
}

type ScreenProps = NativeStackScreenProps<AppStackParams, 'WalletDetails'>;
function WalletDetails({ route }: ScreenProps) {
  const { colorMode } = useColorMode();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { showToast } = useToastMessage();
  const { translations } = useContext(LocalizationContext);
  const { common, wallet: walletTranslations } = translations;
  const { autoRefresh = false, walletId, transactionToast = false } = route.params || {};
  const [syncingCompleted, setSyncingCompleted] = useState(false);
  const wallet = useWallets({ walletIds: [walletId] })?.wallets[0];
  const {
    presentationData: { name, description } = { name: '', description: '' },
    specs: { balances: { confirmed, unconfirmed } } = {
      balances: { confirmed: 0, unconfirmed: 0 },
    },
  } = wallet;

  const walletType = idx(wallet, (_) => _.type) || 'DEFAULT';
  const { walletSyncing } = useAppSelector((state) => state.wallet);
  const syncing = walletSyncing && wallet ? !!walletSyncing[wallet.id] : false;
  const isWhirlpoolWallet = Boolean(wallet?.whirlpoolConfig?.whirlpoolWalletDetails);
  const introModal = useAppSelector((state) => state.wallet.introModal) || false;
  const [pullRefresh, setPullRefresh] = useState(false);

  let isTaprootWallet = false;
  const derivationPath = idx(wallet, (_) => _.derivationDetails.xDerivationPath);
  if (derivationPath && WalletUtilities.getPurpose(derivationPath) === DerivationPurpose.BIP86) {
    isTaprootWallet = true;
  }

  const disableBuy = false;
  const cardProps = {
    circleColor: disableBuy ? `${colorMode}.secondaryGrey` : null,
    pillTextColor: disableBuy ? `${colorMode}.buttonText` : null,
    cardPillText: disableBuy ? common.comingSoon : '',
    customCardPill: !disableBuy && <BTCAmountPill />,
    cardPillColor: disableBuy ? `${colorMode}.secondaryGrey` : null,
  };

  useEffect(() => {
    if (!syncing) {
      // temporarily disabled due to huge performance lag (never call dispatch in useEffect)
      // dispatch(refreshWallets([wallet], { hardRefresh: true }));
    }
  }, []);

  useEffect(() => {
    if (autoRefresh) pullDownRefresh();
  }, [autoRefresh]);

  useEffect(() => {
    if (!syncing && syncingCompleted && transactionToast) {
      showToast(
        walletTranslations.transactionToastMessage,
        <TickIcon />,
        IToastCategory.DEFAULT,
        5000
      );
      navigation.dispatch(CommonActions.setParams({ transactionToast: false }));
    }
  }, [syncingCompleted, transactionToast]);

  useEffect(() => {
    if (!syncing) {
      setSyncingCompleted(true);
    } else {
      setSyncingCompleted(false);
    }
  }, [syncing]);

  const pullDownRefresh = () => {
    setPullRefresh(true);
    dispatch(refreshWallets([wallet], { hardRefresh: true }));
    setPullRefresh(false);
  };

  const getWalletIcon = (wallet) => {
    if (wallet.entityKind === EntityKind.VAULT) {
      return wallet.type === VaultType.COLLABORATIVE ? <CollaborativeIcon /> : <VaultIcon />;
    } else if (wallet.entityKind === EntityKind.WALLET) {
      return (
        <HexagonIcon
          width={58}
          height={50}
          backgroundColor={Colors.DarkGreen}
          icon={<WalletIcon />}
        />
      );
    } else if (isWhirlpoolWallet) {
      return <WhirlpoolAccountIcon />;
    } else {
      return <TribeWalletIcon />;
    }
  };

  return (
    <Box safeAreaTop backgroundColor={`${colorMode}.pantoneGreen`} style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <Box style={styles.topContainer}>
        <KeeperHeader
          learnMore
          learnTextColor={`${colorMode}.buttonText`}
          learnBackgroundColor={`${colorMode}.pantoneGreen`}
          learnMorePressed={() => dispatch(setIntroModal(true))}
          contrastScreen={true}
          title={name}
          titleColor={`${colorMode}.seashellWhiteText`}
          mediumTitle
          subtitle={walletType === 'IMPORTED' ? 'Imported wallet' : description}
          subTitleColor={`${colorMode}.seashellWhiteText`}
          icon={getWalletIcon(wallet)}
          rightComponent={
            <TouchableOpacity
              style={styles.settingBtn}
              onPress={() =>
                navigation.dispatch(CommonActions.navigate('WalletSettings', { wallet }))
              }
            >
              <SettingIcon width={24} height={24} />
            </TouchableOpacity>
          }
        />
        <Box style={styles.balanceWrapper}>
          <Box style={styles.unconfirmBalanceView}>
            <CardPill
              heading={isTaprootWallet ? 'TAPROOT' : 'SINGLE SIG'}
              backgroundColor={`${colorMode}.SignleSigCardPillBackColor`}
            />
            <CardPill heading={wallet.type} />
          </Box>
          <Box style={styles.availableBalanceView}>
            <CurrencyInfo
              hideAmounts={false}
              amount={unconfirmed + confirmed}
              fontSize={24}
              color={`${colorMode}.buttonText`}
              variation="light"
            />
          </Box>
        </Box>
      </Box>
      <Box style={styles.actionCard}>
        <ActionCard
          disable={disableBuy}
          cardName={common.buyBitCoin}
          description={common.inToThisWallet}
          callback={() =>
            navigation.dispatch(CommonActions.navigate({ name: 'BuyBitcoin', params: { wallet } }))
          }
          icon={<BTC />}
          cardPillText={cardProps.cardPillText}
          pillTextColor={cardProps.pillTextColor}
          circleColor={cardProps.circleColor}
          cardPillColor={cardProps.cardPillColor}
          customCardPill={cardProps.customCardPill}
          customStyle={{ justifyContent: 'flex-end' }}
        />
        <ActionCard
          cardName={common.viewAllCoins}
          description={common.manageUTXO}
          callback={() =>
            navigation.navigate('UTXOManagement', {
              data: wallet,
              routeName: 'Wallet',
              accountType: WalletType.DEFAULT,
            })
          }
          icon={<CoinsIcon />}
          customStyle={{ justifyContent: 'flex-end' }}
        />
      </Box>
      <VStack backgroundColor={`${colorMode}.primaryBackground`} style={styles.walletContainer}>
        {wallet ? (
          <>
            {wallet?.specs?.transactions?.length ? (
              <HStack style={styles.transTitleWrapper}>
                <Text color={`${colorMode}.black`} medium fontSize={wp(14)}>
                  {common.recentTransactions}
                </Text>
                <Pressable
                  style={styles.viewAllBtn}
                  onPress={() =>
                    navigation.dispatch(
                      CommonActions.navigate({ name: 'TransactionHistory', params: { wallet } })
                    )
                  }
                >
                  <Text color={`${colorMode}.greenText`} medium fontSize={wp(14)}>
                    {common.viewAll}
                  </Text>
                </Pressable>
              </HStack>
            ) : null}
            <TransactionsAndUTXOs
              transactions={wallet?.specs?.transactions}
              setPullRefresh={setPullRefresh}
              pullRefresh={pullRefresh}
              wallet={wallet}
            />
            <TransactionFooter currentWallet={wallet} />
          </>
        ) : (
          <Box style={styles.addNewWalletContainer}>
            <AddWalletIcon />
            <Text
              color={`${colorMode}.primaryText`}
              numberOfLines={2}
              style={styles.addNewWalletText}
            >
              {common.addNewWalletOrImport}
            </Text>
          </Box>
        )}
      </VStack>
      <LearnMoreModal introModal={introModal} setIntroModal={setIntroModal} />
    </Box>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 20,
    paddingTop: hp(15),
  },
  walletContainer: {
    paddingHorizontal: wp(20),
    paddingTop: wp(60),
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  addNewWalletText: {
    fontSize: 12,
    letterSpacing: 0.6,
    marginVertical: 5,
    marginHorizontal: 16,
    opacity: 0.85,
  },
  addNewWalletContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  walletHeaderWrapper: {
    marginTop: -10,
    marginHorizontal: wp(15),
    flexDirection: 'row',
    width: '100%',
  },
  walletIconWrapper: {
    width: '15%',
    marginRight: 7,
  },
  walletNameWrapper: {
    width: '85%',
  },
  walletNameText: {
    fontSize: 20,
  },
  walletDescText: {
    fontSize: 14,
  },
  walletIconView: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceWrapper: {
    flexDirection: 'row',
    paddingLeft: '3%',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  unconfirmBalanceView: {
    width: '50%',
    flexDirection: 'row',
    gap: 5,
  },
  availableBalanceView: {
    width: '50%',
    alignItems: 'flex-end',
  },
  transTitleWrapper: {
    paddingTop: 5,
    marginLeft: wp(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  viewAllBtn: {
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionCard: {
    marginTop: 20,
    marginBottom: -50,
    zIndex: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingBtn: {
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
});
export default SentryErrorBoundary(WalletDetails);
