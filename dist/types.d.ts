/**
 * Human-readable network name
 */
export declare type NetworkType = 'kovan' | 'localhost' | 'mainnet' | 'rinkeby' | 'goerli' | 'ropsten' | 'rpc';
export declare enum NetworksChainId {
    mainnet = "1",
    kovan = "42",
    rinkeby = "4",
    goerli = "5",
    ropsten = "3",
    localhost = "",
    rpc = ""
}
export declare type Json = null | boolean | number | string | Json[] | {
    [prop: string]: Json;
};
