import { Box, Text, VStack } from 'native-base';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import ColdCardIcon from 'src/assets/images/svgs/coldcard_tile.svg';
import DevicesComponent from './DevicesComponent';
import KeeperModal from 'src/components/KeeperModal';
import NavWallet from 'src/assets/images/svgs/nav_wallet.svg';
import { RealmContext } from 'src/storage/realm/RealmProvider';
import { RealmSchema } from 'src/storage/realm/enum';
import { ScaledSheet } from 'react-native-size-matters';

const { useQuery } = RealmContext;

const { width } = Dimensions.get('window');

const Vaults = ({ animate }) => {
  const [visible, setModalVisible] = useState(false);
  const open = () => setModalVisible(true);
  const close = () => setModalVisible(false);
  const navigation = useNavigation();
  const Signers = useQuery(RealmSchema.VaultSigner);
  const Slider = () => {
    return (
      <TouchableOpacity onPress={animate} style={styles.slider}>
        <NavWallet />
      </TouchableOpacity>
    );
  };

  const SetupState = () => {
    return (
      <VStack alignItems={'center'} justifyContent={'space-evenly'} height={'60%'}>
        <View style={styles.logo} />
        <VStack alignItems={'center'}>
          <Text
            color={'light.lightBlack'}
            fontSize={18}
            fontFamily={'body'}
            fontWeight={'200'}
            letterSpacing={1.1}
          >
            {'Setup your Vault'}
          </Text>
          <Text
            color={'light.lightBlack'}
            fontSize={13}
            fontFamily={'body'}
            fontWeight={'100'}
            letterSpacing={0.65}
            textAlign={'center'}
          >
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
          </Text>
        </VStack>
        <TouchableOpacity style={styles.cta} onPress={open}>
          <Text fontSize={14} fontFamily={'body'} fontWeight={'300'} letterSpacing={1}>
            {'Setup Now'}
          </Text>
        </TouchableOpacity>
      </VStack>
    );
  };

  const DummyContent = () => {
    return (
      <View>
        <View style={styles.dummy} />
        <Text color={'white'} fontSize={13} fontFamily={'body'} fontWeight={'100'} p={2}>
          {'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
        </Text>
        <Text color={'white'} fontSize={13} fontFamily={'body'} fontWeight={'100'} p={2}>
          {'incididunt ut labore et dolore magna aliqua'}
        </Text>
      </View>
    );
  };

  const renderBackupKeys = ({ item }) => {
    return (
      <DevicesComponent
        title={item.signerName}
        onPress={item.onPress}
        Icon={() => <ColdCardIcon />}
      />
    );
  };

  const VaultState = () => {
    return !Signers.length ? (
      <>
        <SetupState />
        <KeeperModal
          visible={visible}
          close={close}
          title="Setup Vault"
          subTitle="Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna"
          modalBackground={['#00836A', '#073E39']}
          buttonBackground={['#FFFFFF', '#80A8A1']}
          buttonText={'Add a signer'}
          buttonTextColor={'#073E39'}
          buttonCallback={addTapsigner}
          textColor={'#FFF'}
          Content={DummyContent}
        />
      </>
    ) : (
      <VStack>
        <Text color={'#041513'} fontSize={22} fontFamily={'body'} fontWeight={'100'} paddingTop={5}>
          {'Vault'}
        </Text>
        <Text
          color={'#041513'}
          fontSize={13}
          fontFamily={'body'}
          fontWeight={'100'}
          paddingBottom={5}
        >
          {'Your super secure bitcoin'}
        </Text>
        <Box
          width={width * 0.9}
          height={width * 0.6}
          bg={'#BBB'}
          alignSelf={'center'}
          borderRadius={10}
          opacity={0.5}
        />
        <Text color={'#041513'} fontSize={14} fontFamily={'body'} fontWeight={'100'} paddingTop={5}>
          {'My Signers'}
        </Text>
        <Text
          color={'#041513'}
          fontSize={12}
          fontFamily={'body'}
          fontWeight={'100'}
          paddingBottom={5}
        >
          {'Used for securing funds'}
        </Text>
        <FlatList
          data={Signers}
          renderItem={renderBackupKeys}
          keyExtractor={(item) => item?.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text color={'#041513'} fontSize={14} fontFamily={'body'} fontWeight={'100'} paddingTop={5}>
          {'Inheritance'}
        </Text>
        <Text
          color={'#041513'}
          fontSize={12}
          fontFamily={'body'}
          fontWeight={'100'}
          paddingBottom={5}
        >
          {'Set up inheritance to your sats'}
        </Text>
      </VStack>
    );
  };

  const addTapsigner = React.useCallback(() => {
    close();
    navigation.dispatch(CommonActions.navigate({ name: 'AddTapsigner', params: {} }));
  }, []);
  return (
    <Box
      backgroundColor={'light.lightYellow'}
      borderLeftRadius={20}
      marginTop={10}
      padding={'6'}
      height={'100%'}
    >
      <Slider />
      <VaultState />
    </Box>
  );
};

const styles = ScaledSheet.create({
  slider: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: '3.7%',
  },
  logo: {
    height: width * 0.6,
    width: width * 0.6,
    borderRadius: width,
    backgroundColor: '#BBB',
  },
  cta: {
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#FAC48B',
  },
  dummy: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#092C27',
    opacity: 0.15,
  },
});

export default Vaults;