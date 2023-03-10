import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | string | number;
export declare enum ChainId {
    MAINNET = 100000,
    ROPSTEN = 3200000,
    RINKEBY = 400000,
    GÖRLI = 5980000,
    KOVAN = 4209888,
    EVMOS = 432000,
    EVMOS_TESTNET = 9000
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const MaxUint256: JSBI;
