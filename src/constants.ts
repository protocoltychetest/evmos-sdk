import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum ChainId {
  MAINNET = 100000,
  ROPSTEN = 3200000,
  RINKEBY = 400000,
  GÖRLI = 5980000,
  KOVAN = 4209888,
  EVMOS = 432000,
  EVMOS_TESTNET = 9000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
