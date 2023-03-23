import { Platform, StyleSheet } from 'react-native';
import React from 'react';
import { Box } from 'native-base';
import { hp, windowHeight, wp } from 'src/common/data/responsiveness/responsive';
import MixIcon from 'src/assets/images/icon_mix.svg';
import Send from 'src/assets/images/send.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomMenuItem from '../../screens/WalletDetailScreen/BottomMenuItem';

function UTXOFooter({ setEnableSelection, enableSelection }) {
  const { bottom } = useSafeAreaInsets();
  return (
    <Box style={[styles.footerContainer, { marginBottom: bottom }]}>
      <Box style={styles.border} borderColor="light.GreyText" />
      <Box style={styles.footerItemContainer}>
        <BottomMenuItem onPress={() => { }} icon={<MixIcon />} title="Select for Mix" />
        <BottomMenuItem
          onPress={() => setEnableSelection(!enableSelection)}
          icon={<Send />}
          title="Select to Send"
        />
      </Box>
    </Box>
  );
}

export default UTXOFooter;

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 5 : 0,
    width: wp(375),
    paddingHorizontal: 5,
  },
  border: {
    borderWidth: 0.5,
    borderRadius: 20,
    opacity: 0.2,
  },
  footerItemContainer: {
    flexDirection: 'row',
    paddingTop: windowHeight > 850 ? 15 : 5,
    marginBottom: windowHeight > 850 ? hp(10) : 0,
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
  },
});
