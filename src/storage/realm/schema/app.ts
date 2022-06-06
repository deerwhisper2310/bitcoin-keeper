import { ObjectSchema } from 'realm';
import { RealmSchema } from '../enum';

export const KeeperAppSchema: ObjectSchema = {
  name: RealmSchema.KeeperApp,
  properties: {
    id: 'string',
    appName: 'string?',
    primaryMnemonic: 'string',
    primarySeed: 'string',
    walletShellInstances: RealmSchema.WalletShellInstances,
    vaultShellInstances: `${RealmSchema.VaultShellInstances}?`,
    twoFADetails: `${RealmSchema.TwoFADetails}?`,
    nodeConnect: `${RealmSchema.NodeConnect}?`,
    uai: `${RealmSchema.UAI}?`,
    userTier: RealmSchema.UserTier,
    version: 'string',
  },
  primaryKey: 'id',
};