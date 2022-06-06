import React from 'react';

import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Box, Text } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StatusBarComponent from 'src/components/StatusBarComponent';
import HeaderTitle from 'src/components/HeaderTitle';
import QrCode from 'src/assets/images/qrcode.png'
import CopyIcon from 'src/assets/images/svgs/icon_copy.svg'
import ArrowIcon from 'src/assets/images/svgs/icon_arrow.svg'

import BtcGreen from 'src/assets/images/svgs/btc_round_green.svg'

import Colors from 'src/theme/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoBox from '../../components/InfoBox';

const ReceiveScreen = () => {
  const navigtaion = useNavigation();

  return (
    <View style={styles.Container} background={'light.ReceiveBackground'}>
      <StatusBarComponent padding={50} />
      <HeaderTitle
        title="Receive"
        subtitle="Lorem ipsum dolor sit amet, consectetur"
        onPressHandler={() => navigtaion.goBack()}
        color={'light.ReceiveBackground'}
      />
      {/* {QR component} */}
      <Box marginTop={hp(10)} alignItems={'center'} alignSelf={'center'} width={204}>
        <Image source={QrCode} />
        <Box background={'light.QrCode'} height={6} width={'100%'} justifyContent={'center'}>
          <Text textAlign={'center'} color={'light.recieverAddress'} fontFamily={'body'} fontWeight={300} fontSize={12} letterSpacing={1.08}>
            Recieve Address
          </Text>
        </Box>
      </Box>
      {/* {Input Field} */}
      <Box flexDirection={'row'} marginY={hp(3)} width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <TextInput placeholder='Reciever address' style={styles.textInput} />
        <TouchableOpacity activeOpacity={0.4}>
          <Box backgroundColor={'light.yellow1'} padding={3} borderTopRightRadius={10} borderBottomRightRadius={10}>
            <CopyIcon />
          </Box>
        </TouchableOpacity>
      </Box>
      {/* {Add amount component} */}
      <Box
        flexDirection={'row'}
        height={70}
        borderRadius={10}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingX={3}
        marginX={3}
        marginTop={'7%'}
        backgroundColor={'light.lightYellow'}
      >
        <Box flexDirection={'row'} >
          <BtcGreen />
          <Box flexDirection={'column'} marginLeft={5}>
            <Text color={'light.lightBlack'} fontWeight={200} fontFamily={'body'} fontSize={14} letterSpacing={1.12}>
              Add amount
            </Text>
            <Text color={'light.GreyText'} fontWeight={200} fontFamily={'body'} fontSize={12} letterSpacing={0.6}>
              Lorem ipsum dolor sit amet, con
            </Text>
          </Box>
        </Box>
        <ArrowIcon />
      </Box>
      {/* {Bottom note} */}
      <Box position={'absolute'} bottom={10} marginX={5}>
        <InfoBox
          title='Add amount'
          desciption='It would take some time for the sats to reflect in your account based on the network condition desciption'
          width='65%'
        />
      </Box>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    padding: '20@s',
    position: 'relative'
  },
  title: {
    fontSize: RFValue(12),
    letterSpacing: '0.24@s',
  },
  subtitle: {
    fontSize: RFValue(10),
    letterSpacing: '0.20@s',
  },
  textInput: {
    width: '80%',
    backgroundColor: Colors?.textInputBackground,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 20
  }
});
export default ReceiveScreen;