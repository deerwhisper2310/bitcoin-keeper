import React from 'react';
import { Box, useColorMode } from 'native-base';
import { StyleSheet } from 'react-native';
import Text from 'src/components/KeeperText';
import { hp, windowHeight } from 'src/constants/responsive';
import Fonts from 'src/constants/Fonts';

function EmptyStateView({
  IllustartionImage,
  title,
  subTitle = '',
}: {
  IllustartionImage: any;
  title: string;
  subTitle?: string;
}) {
  const { colorMode } = useColorMode();
  return (
    <Box style={styles.container}>
      <Box>
        <Text style={styles.noTransactionTitle} color={`${colorMode}.primaryText`}>
          {title}
        </Text>
        {subTitle && (
          <Text italic style={styles.noTransactionSubTitle} color={`${colorMode}.black`}>
            {subTitle}
          </Text>
        )}
      </Box>
      <IllustartionImage />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight > 800 ? hp(20) : hp(12),
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  noTransactionTitle: {
    fontSize: 14,
    letterSpacing: 0.14,
    fontWeight: '700',
    opacity: 0.5,
    fontFamily: Fonts.FiraSansCondensedSemiBold,
  },
  noTransactionSubTitle: {
    fontSize: 11,
    letterSpacing: 0.6,
    opacity: 0.50,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Fonts.FiraSansCondensedMediumItalic,
  },
});
export default EmptyStateView;
