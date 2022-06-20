import { CurrencyCodes } from 'src/core/wallets/interfaces/interface';
import { useAppSelector } from '..';

export default function useCurrencyCode(defaultCode = CurrencyCodes.USD): string {
  return useAppSelector((state) => {
    // return state.sendAndReceive.currencyCode || defaultCode;
    return defaultCode;
  });
}