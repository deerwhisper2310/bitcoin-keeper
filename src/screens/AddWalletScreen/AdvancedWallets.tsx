import { Box } from 'native-base';
import React from 'react';
import OptionCard from 'src/components/OptionCard';
import TimeLockIcon from 'src/assets/images/calendar.svg';
import MultiSigIcon from 'src/assets/images/advanced_green.svg';
import VaultGreenIcon from 'src/assets/images/vault_green.svg';

function AdvancedWallets({ navigation }) {
  return (
    <Box>
      <OptionCard
        title="Time Lock"
        description="For 3, 6 or 12 months"
        LeftIcon={<TimeLockIcon />}
        callback={() => navigation.navigate('NodeSettings')}
      />
      <OptionCard
        title="Degrading Multisig"
        description="Time based sig"
        LeftIcon={<MultiSigIcon />}
        callback={() => navigation.navigate('NodeSettings')}
      />
      <OptionCard
        title="Custom Multi sig"
        description="Build your own"
        LeftIcon={<VaultGreenIcon />}
        callback={() => navigation.navigate('NodeSettings')}
      />
    </Box>
  );
}

export default AdvancedWallets;
