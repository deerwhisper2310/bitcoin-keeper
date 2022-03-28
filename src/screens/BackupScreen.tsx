import React, { useCallback, useRef, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { View, Text } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { FlatList } from 'react-native';

import StatusBarComponent from 'src/components/StatusBarComponent';
import HeaderTitle from 'src/components/HeaderTitle';
import BackupListComponent from 'src/components/BackupListComponent';
import Cloud from 'src/assets/images/svgs/cloud.svg';
import Mobile from 'src/assets/images/svgs/mobile.svg';
import PDF from 'src/assets/images/svgs/pdf.svg';
import Laptop from 'src/assets/images/svgs/laptop.svg';
import Hardware from 'src/assets/images/svgs/hardware.svg';
import Contact from 'src/assets/images/svgs/contacts.svg';
import Key from 'src/assets/images/svgs/key.svg';
import HexaBottomSheet from 'src/components/BottomSheet';
import QRCode from 'react-native-qrcode-svg';

const BackupScreen = () => {
  const Data = [
    {
      id: 1,
      title: 'Cloud',
      subtitle: 'we support iCloud, Google Drive and Dropbox',
      Icon: Cloud,
    },
    {
      id: 2,
      title: 'Mobile phone',
      subtitle: 'iOS or Android running Hexa Keeper',
      Icon: Mobile,
    },
    {
      id: 3,
      title: 'PDF',
      subtitle: 'a printout',
      Icon: PDF,
    },
    {
      id: 4,
      title: 'Desktop',
      subtitle: 'A desktop running Hexa Vault',
      Icon: Laptop,
    },
    {
      id: 5,
      title: 'Hardware wallet',
      subtitle: 'we support Ledger, Trezor and Cold Card',
      Icon: Hardware,
    },
    {
      id: 6,
      title: 'Contacts',
      subtitle: 'Contacts who have Hexa Vault',
      Icon: Contact,
    },
    {
      id: 7,
      title: 'Signer Apps',
      subtitle: 'we support Seed Signer and Blue Wallet',
      Icon: Key,
    },
  ];

  const [backUpKeyType, setBackUpKeyType] = useState();
  const addBackUpKeySheetRef = useRef(null);

  const closeAddBackUpKeySheet = useCallback(() => {
    addBackUpKeySheetRef.current?.close();
  }, []);

  const expandAddBackUpKeySheet = useCallback((backUpkeyType) => {
    setBackUpKeyType(backUpkeyType);
    addBackUpKeySheetRef.current?.expand();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <BackupListComponent
        title={item.title}
        subtitle={item.subtitle}
        Icon={item.Icon}
        item={item}
        onPress={expandAddBackUpKeySheet}
        showAccordian
        touchable
      />
    );
  };

  return (
    <View style={styles.Container} background={'light.lightYellow'}>
      <StatusBarComponent padding={50} />
      <HeaderTitle title="Add a Backup Key" subtitle="Lorem ipsum dolor sit amet, consectetur" />
      <FlatList
        style={{ marginTop: hp(2) }}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <HexaBottomSheet
        title={'Add Backup Key'}
        subTitle={'Lorem Ipsum Dolor Amet'}
        snapPoints={['80%']}
        bottomSheetRef={addBackUpKeySheetRef}
        primaryText={'Done'}
        primaryCallback={closeAddBackUpKeySheet}
      >
        {backUpKeyType && (
          <BackupListComponent
            title={backUpKeyType?.title}
            subtitle={backUpKeyType?.subtitle}
            Icon={backUpKeyType?.Icon}
            onPress={expandAddBackUpKeySheet}
          />
        )}
        <Text style={styles.sheetSubText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <View style={styles.qrContainer}>
          <QRCode value="http://awesome.link.qr" logoBackgroundColor="transparent" size={250} />
        </View>
      </HexaBottomSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '20@s',
  },
  linearGradient: {
    borderRadius: 6,
    marginTop: hp(3),
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: RFValue(12),
    letterSpacing: '0.24@s',
  },
  subtitle: {
    fontSize: RFValue(10),
    letterSpacing: '0.20@s',
  },
  sheetSubText: { color: '#073E39', fontWeight: '500', marginVertical: 10 },
  qrContainer: { alignSelf: 'center', marginVertical: 30 },
});
export default BackupScreen;