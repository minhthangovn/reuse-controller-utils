"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTronChainId = exports.ListRPCURL = exports.ListTronNetwork = exports.OPENSEA_TEST_API_URL = exports.OPENSEA_API_URL = exports.OPENSEA_PROXY_URL = exports.TESTNET_NETWORK_TYPE_TO_TICKER_SYMBOL = exports.TESTNET_TICKER_SYMBOLS = exports.ASSET_TYPES = exports.GWEI = exports.ERC1155_TOKEN_RECEIVER_INTERFACE_ID = exports.ERC1155_METADATA_URI_INTERFACE_ID = exports.ERC1155_INTERFACE_ID = exports.ERC721_ENUMERABLE_INTERFACE_ID = exports.ERC721_METADATA_INTERFACE_ID = exports.ERC721_INTERFACE_ID = exports.ERC20 = exports.ERC1155 = exports.ERC721 = exports.GANACHE_CHAIN_ID = exports.RINKEBY_CHAIN_ID = exports.IPFS_DEFAULT_GATEWAY_URL = exports.FALL_BACK_VS_CURRENCY = exports.RPC = exports.MAINNET = void 0;
exports.MAINNET = 'mainnet';
exports.RPC = 'rpc';
exports.FALL_BACK_VS_CURRENCY = 'ETH';
exports.IPFS_DEFAULT_GATEWAY_URL = 'https://cloudflare-ipfs.com/ipfs/';
// NETWORKS ID
exports.RINKEBY_CHAIN_ID = '4';
exports.GANACHE_CHAIN_ID = '1337';
// TOKEN STANDARDS
exports.ERC721 = 'ERC721';
exports.ERC1155 = 'ERC1155';
exports.ERC20 = 'ERC20';
// TOKEN INTERFACE IDS
exports.ERC721_INTERFACE_ID = '0x80ac58cd';
exports.ERC721_METADATA_INTERFACE_ID = '0x5b5e139f';
exports.ERC721_ENUMERABLE_INTERFACE_ID = '0x780e9d63';
exports.ERC1155_INTERFACE_ID = '0xd9b67a26';
exports.ERC1155_METADATA_URI_INTERFACE_ID = '0x0e89341c';
exports.ERC1155_TOKEN_RECEIVER_INTERFACE_ID = '0x4e2312e0';
// UNITS
exports.GWEI = 'gwei';
// ASSET TYPES
exports.ASSET_TYPES = {
    NATIVE: 'NATIVE',
    TOKEN: 'TOKEN',
    NFT: 'NFT',
    UNKNOWN: 'UNKNOWN',
};
// TICKER SYMBOLS
exports.TESTNET_TICKER_SYMBOLS = {
    RINKEBY: 'RinkebyETH',
    GOERLI: 'GoerliETH',
    ROPSTEN: 'RopstenETH',
    KOVAN: 'KovanETH',
    // Tron testnet
    TRONSHASTA: 'Shasta',
    TRONNILE: 'Nile',
};
// TYPED NetworkType TICKER SYMBOLS
exports.TESTNET_NETWORK_TYPE_TO_TICKER_SYMBOL = {
    rinkeby: 'RinkebyETH',
    goerli: 'GoerliETH',
    ropsten: 'RopstenETH',
    kovan: 'KovanETH',
    mainnet: '',
    rpc: '',
    localhost: '',
    TronMainet: 'Tron',
    TronShasta: 'ShastaTron',
    TronNile: 'NileTron',
};
// APIs
exports.OPENSEA_PROXY_URL = 'https://proxy.metaswap.codefi.network/opensea/v1/api/v1';
exports.OPENSEA_API_URL = 'https://api.opensea.io/api/v1';
exports.OPENSEA_TEST_API_URL = 'https://testnets-api.opensea.io/api/v1';
exports.ListTronNetwork = {
    TronMainet: { chainId: '728126428', url: 'https://api.trongrid.io' },
    TronShasta: { chainId: '2494104990', url: 'https://api.shasta.trongrid.io' },
    TronNile: { chainId: '3448148188', url: 'https://nile.trongrid.io' },
};
exports.ListRPCURL = {
    '728126428': 'https://api.trongrid.io',
    '2494104990': 'https://api.shasta.trongrid.io',
    '3448148188': 'https://nile.trongrid.io',
};
exports.ListTronChainId = ['728126428', '2494104990', '3448148188'];
//# sourceMappingURL=constants.js.map