/**
 * Human-readable network name
 */
export type NetworkType =
  | 'kovan'
  | 'localhost'
  | 'mainnet'
  | 'rinkeby'
  | 'goerli'
  | 'ropsten'
  | 'rpc'
  // Tron Network
  | 'TronMainet'
  | 'TronShasta'
  | 'TronNile';

export enum NetworksChainId {
  mainnet = '1',
  kovan = '42',
  rinkeby = '4',
  goerli = '5',
  ropsten = '3',
  localhost = '',
  rpc = '',
  // Tron Network
  TronMainet = '728126428',
  TronShasta = '2494104990',
  TronNile = '3448148188',
}

export type Json =
  | null
  | boolean
  | number
  | string
  | Json[]
  | { [prop: string]: Json };


