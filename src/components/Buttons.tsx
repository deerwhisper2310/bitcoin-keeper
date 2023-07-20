import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Box, useColorMode } from 'native-base';
import { ScaledSheet } from 'react-native-size-matters';
import { Shadow } from 'react-native-shadow-2';
import { hp, wp } from 'src/common/data/responsiveness/responsive';
import Text from 'src/components/KeeperText';
import ActivityIndicatorView from './AppActivityIndicator/ActivityIndicatorView';

function Buttons({
  primaryText = '',
  secondaryText = '',
  primaryCallback = () => { },
  secondaryCallback = () => { },
  primaryDisable = false,
  secondaryDisable = false,
  primaryLoading = false,
  paddingHorizontal = wp(40),
  activeOpacity = 0.5,
}) {
  const { colorMode } = useColorMode();
  const onPrimaryInteraction = () => {
    primaryCallback();
  };

  if (primaryLoading) {
    return <ActivityIndicatorView visible={primaryLoading} />;
  }
  const getPrimaryButton = () => (
    <TouchableOpacity
      onPress={onPrimaryInteraction}
      disabled={primaryDisable}
      activeOpacity={activeOpacity}
      testID="btn_primaryText"
    >
      <Shadow distance={10} startColor="#073E3926" offset={[3, 4]}>
        <Box
          style={[styles.createBtn, { opacity: primaryDisable ? 0.5 : 1, paddingHorizontal }]}
          backgroundColor={{
            linearGradient: {
              colors: [`${colorMode}.gradientStart`, `${colorMode}.gradientEnd`],
              start: [0, 0],
              end: [1, 1],
            },
          }}
        >
          <Text numberOfLines={1} style={styles.btnText} color={`${colorMode}.white`} bold>
            {primaryText}
          </Text>
        </Box>
      </Shadow>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {secondaryText !== '' && (
        <TouchableOpacity
          style={[
            styles.cancelBtn,
            {
              opacity: secondaryDisable ? 0.5 : 1,
            },
          ]}
          onPress={secondaryCallback}
          disabled={secondaryDisable}
          activeOpacity={0.5}
          testID="btn_secondaryText"
        >
          <Text numberOfLines={1} style={styles.btnText} color={`${colorMode}.greenText`} bold>
            {secondaryText}
          </Text>
        </TouchableOpacity>
      )}
      {primaryText ? getPrimaryButton() : null}
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  createBtn: {
    paddingVertical: hp(15),
    borderRadius: '10@s',
  },
  cancelBtn: {
    marginRight: wp(20),
    borderRadius: '10@s',
  },
  btnText: {
    fontSize: 14,
    letterSpacing: 0.84,
  },
});
export default Buttons;
