import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';
import Fonts from 'src/constants/Fonts';
import { useColorMode } from 'native-base';
import customTheme from 'src/navigation/themes';
interface Props {
  dataSet: any[];
}

const FeeIndicator = (props: Props) => {
  const range = ['10', '20', '30', '40', '50'];
  const { dataSet } = props;
  const { colorMode } = useColorMode();

  function getFeeIndicatorPositionOnScale(dataset) {
    // Extract the avgFee_75 values from the dataset
    const fees = dataset.map((item) => item.avgFee_75);

    // Calculate min and max values
    const minFee = Math.min(...fees);
    const maxFee = Math.max(...fees);

    // Define the range for each section on a scale of 0 to 100
    const rangePerSection = 100 / 5; // 20 for each section

    // Determine the current fee
    const currentFee = fees[fees.length - 1];

    // Normalize the current fee to a 0-100 scale
    const normalizedFee = ((currentFee - minFee) / (maxFee - minFee)) * 100;

    // Determine the position on the scale based on the normalized fee
    if (normalizedFee <= rangePerSection) {
      return { position: normalizedFee, section: 'Very Low' };
    } else if (normalizedFee <= rangePerSection * 2) {
      return { position: normalizedFee, section: 'Low' };
    } else if (normalizedFee <= rangePerSection * 3) {
      return { position: normalizedFee, section: 'Medium' };
    } else if (normalizedFee <= rangePerSection * 4) {
      return { position: normalizedFee, section: 'High' };
    } else {
      return { position: normalizedFee, section: 'Very High' };
    }
  }

  const segments = [
    {
      scale: 0.25,
      filledColor: customTheme.colors[colorMode].forestGreen,
      emptyColor: customTheme.colors[colorMode].forestGreen,
      data: { label: 'Blue' },
    },
    {
      scale: 0.25,
      filledColor: customTheme.colors[colorMode].amber,
      emptyColor: customTheme.colors[colorMode].amber,
      data: { label: 'Yellow' },
    },
    {
      scale: 0.25,
      filledColor: customTheme.colors[colorMode].amber,
      emptyColor: customTheme.colors[colorMode].amber,
      data: { label: 'Yellow' },
    },
    {
      scale: 0.25,
      filledColor: customTheme.colors[colorMode].errorRed,
      emptyColor: customTheme.colors[colorMode].errorRed,
      data: { label: 'Red' },
    },
  ];

  return (
    <View style={styles.container}>
      <SegmentedArc
        segments={segments}
        fillValue={getFeeIndicatorPositionOnScale(dataSet).position || 0}
        isAnimated={true}
        animationDelay={1000}
        showArcRanges={false}
        ranges={range}
        radius={40}
        rangesTextColor="gray"
        rangesTextStyle={styles.rangeTextStyle}
        capInnerColor={customTheme.colors[colorMode].primaryGreen}
        capOuterColor={customTheme.colors[colorMode].OffWhite}
      />
    </View>
  );
};

export default FeeIndicator;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    position: 'absolute',
    top: -10,
  },
  rangeTextStyle: {
    fontSize: 12,
    fontFamily: Fonts.FiraSansCondensedBold,
  },
});
