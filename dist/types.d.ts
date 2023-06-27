/**
 * Human-readable network name
 */
export declare type NetworkType = 'kovan' | 'localhost' | 'mainnet' | 'rinkeby' | 'goerli' | 'ropsten' | 'rpc' | 'TronMainet' | 'TronShasta' | 'TronNile';
export declare enum NetworksChainId {
    mainnet = "1",
    kovan = "42",
    rinkeby = "4",
    goerli = "5",
    ropsten = "3",
    localhost = "",
    rpc = "",
    TronMainet = "728126428",
    TronShasta = "2494104990",
    TronNile = "3448148188"
}
export declare type Json = null | boolean | number | string | Json[] | {
    [prop: string]: Json;
};
export declare type IListTronNetwork = {
    [key: string]: {
        [key: string]: string;
    };
};
export declare type IListRPCURL = {
    [key: string]: string;
};
