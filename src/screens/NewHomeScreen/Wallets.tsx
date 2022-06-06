import { Box, Text } from 'native-base';
import { FlatList, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BtcGreen from 'src/assets/images/svgs/btc_green.svg';
import DollarGreen from 'src/assets/images/svgs/icon_dollar_green.svg';
import Heading from './Heading';
import NavVault from 'src/assets/images/svgs/nav_vault.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import Wallet from './Wallet';

const Wallets = ({ animate }) => {
  const BtcToCurrency = () => {
    return (
      <Box
        marginTop={10}
        bottom={0}
        marginX={5}
        flexDirection={'row'}
        justifyContent={'space-between'}
      >
        <Box marginY={2}>
          <Text
            color={'light.lightBlack'}
            fontSize={14}
            fontFamily={'body'}
            fontWeight={200}
            letterSpacing={0.7}
          >
            BTC to USD Today
          </Text>
          <View style={[styles.priceContainer, { marginTop: hp(0) }]}>
            <DollarGreen />
            <Text
              // style={styles.priceText}
              color={'light.light'}
              fontFamily={'body'}
              fontWeight={'300'}
              fontSize={20}
              marginLeft={1}
              letterSpacing={0.7}
            >
              0.000024
            </Text>
          </View>
        </Box>
        <Box justifyContent={'center'}>
          <TouchableOpacity style={styles.button}>
            <Text
              color={'light.textDark'}
              fontSize={RFValue(11)}
              fontFamily={'body'}
              fontWeight={'300'}
              letterSpacing={0.88}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  };

  const CollectiveBallance = () => {
    return (
      <Box marginY={3} marginX={5} flexDirection={'row'} justifyContent={'space-between'}>
        <Box marginY={2}>
          <Text
            color={'light.lightBlack'}
            fontSize={14}
            fontFamily={'body'}
            fontWeight={200}
            letterSpacing={0.7}
          >
            Collective Balance
          </Text>
          {/* <Text color={'light.light'} fontSize={30} fontFamily={'body'} fontWeight={200} letterSpacing={0.6}>
          0.000090
        </Text> */}
          <View style={styles.priceContainer}>
            <BtcGreen />
            <Text
              style={styles.priceText}
              color={'light.light'}
              fontFamily={'body'}
              fontWeight={'200'}
              fontSize={30}
            >
              0.000024
            </Text>
          </View>
          <Text
            color={'light.lightBlack'}
            fontSize={12}
            fontFamily={'body'}
            fontWeight={100}
            letterSpacing={0.6}
          >
            This will be secured once it crosses 0.1 btc
          </Text>
        </Box>
        <Box justifyContent={'center'}>
          <TouchableOpacity style={styles.button}>
            <Text
              color={'light.textDark'}
              fontSize={RFValue(11)}
              fontFamily={'body'}
              fontWeight={'300'}
              letterSpacing={0.88}
            >
              Secure Now
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      backgroundColor={'light.lightYellow'}
      height={'100%'}
      borderRightRadius={20}
      marginTop={10}
    >
      {/* {heading } */}
      <Box padding={5}>
        <TouchableOpacity
          onPress={animate}
          style={{ position: 'absolute', left: 0, top: 32, zIndex: 1 }}
        >
          <NavVault />
        </TouchableOpacity>
        <Box alignItems={'flex-end'}>
          <Heading
            title={'Wallets'}
            subTitle={'Your daily spending and transactions'}
            alignItems={'flex-end'}
          />
        </Box>
        {/* {Wallets } */}
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={Wallet}
          horizontal={true}
          style={styles.flatlistContainer}
          showsHorizontalScrollIndicator={false}
        />
        {/* {collective ballance } */}
        <CollectiveBallance />
        {/* {BTc to Usd Today } */}
        <BtcToCurrency />
      </Box>
    </Box>
  );
};

const styles = ScaledSheet.create({
  flatlistContainer: {
    maxHeight: hp(30),
    paddingTop: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  button: {
    borderRadius: 10,
    marginTop: hp(1),
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAC48B',
  },
  priceText: {
    fontSize: RFValue(24),
    letterSpacing: '0.5@s',
    lineHeight: '24@s',
    marginLeft: wp(1),
  },
});

export default Wallets;