import { Box, useColorMode } from 'native-base';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { wp } from 'src/constants/responsive';
import Colors from 'src/theme/Colors';
import HexagonIcon from '../HexagonIcon';
import KeeperModal from '../KeeperModal';
import Text from '../KeeperText';
import CardPill from '../CardPill';
import { getWalletTags } from 'src/utils/utilities';
import WalletIcon from 'src/assets/images/daily_wallet.svg';
import CollaborativeIcon from 'src/assets/images/collaborative_vault_white.svg';
import VaultIcon from 'src/assets/images/vault_icon.svg';
import { EntityKind, VaultType } from 'src/services/wallets/enums';

const getWalletIcon = (walletType) => {
  if (walletType === EntityKind.VAULT) {
    return <VaultIcon />;
  } else if (walletType === VaultType.COLLABORATIVE) {
    return <CollaborativeIcon />;
  } else {
    return <WalletIcon />;
  }
};

function WalletCreatedModalContent(props) {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box backgroundColor={`${colorMode}.seashellWhite`} style={styles.walletVaultInfoContainer}>
        <Box style={styles.pillsContainer}>
          {props.tags?.map((tag, index) => {
            return (
              <CardPill
                key={tag}
                heading={tag}
                backgroundColor={index % 2 !== 0 ? null : `${colorMode}.SignleSigCardPillBackColor`}
              />
            );
          })}
        </Box>
        <Box style={styles.walletVaultInfoWrapper}>
          <Box style={styles.iconWrapper}>
            <HexagonIcon
              width={44}
              height={38}
              backgroundColor={Colors.DarkGreen}
              icon={getWalletIcon(props.walletType)}
            />
          </Box>
          <Box>
            {props.walletDescription ? (
              <Text color={`${colorMode}.secondaryText`}>{props.walletDescription}</Text>
            ) : null}
            <Text color={`${colorMode}.greenText`} medium style={styles.titleText}>
              {props.walletName}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text color={`${colorMode}.secondaryText`} style={styles.descText}>
          {props.descriptionMessage}
        </Text>
      </Box>
    </Box>
  );
}
function WalletVaultCreationModal(props) {
  const { colorMode } = useColorMode();

  const Content = useCallback(() => {
    return (
      <WalletCreatedModalContent
        descriptionMessage={props.descriptionMessage}
        walletType={props.walletType}
        walletName={props.walletName}
        walletDescription={props.walletDescription}
        tags={getWalletTags(props.walletType)}
      />
    );
  }, [props.descriptionMessage, props.walletType, props.walletName, props.walletDescription]);

  return (
    <KeeperModal
      dismissible
      close={() => {}}
      visible={props.visible}
      title={props.title}
      subTitle={props.subTitle}
      Content={Content}
      buttonText={props.buttonText}
      buttonCallback={() => {
        props.buttonCallback();
      }}
      showButtons
      modalBackground={`${colorMode}.modalWhiteBackground`}
      textColor={`${colorMode}.primaryText`}
      subTitleColor={`${colorMode}.secondaryText`}
      subTitleWidth={wp(280)}
      showCloseIcon={false}
    />
  );
}
const styles = StyleSheet.create({
  descText: {
    fontSize: 13,
    width: wp(300),
  },
  walletVaultInfoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  walletVaultInfoWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginRight: 10,
  },
  titleText: {
    fontSize: 14,
  },
  pillsContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
export default WalletVaultCreationModal;
