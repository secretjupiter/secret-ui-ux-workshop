import { ibcDenom } from "shared/utils/commons";

export type Chain = {
  /** display name of the chain */
  chain_name: string;
  /** channel_id on the chain */
  deposit_channel_id: string;
  /** gas limit for ibc transfer from the chain to Secret Network */
  deposit_gas: number;
  /** gas denom for ibc transfer from the chain to Secret Network */
  deposit_gas_denom: string;
  /** channel_id on Secret Network */
  withdraw_channel_id: string;
  /** gas limit for ibc transfer from Secret Network to the chain */
  withdraw_gas: number;
  /** bech32 prefix of addresses on the chain */
  bech32_prefix: string;
  /** logo of the chain */
  chain_image: string;
  /** chain-id of the chain */
  chain_id: string;
  /** lcd url of the chain */
  lcd: string;
  /** rpc url of the chain */
  rpc: string;
  /** explorer link for accounts */
  explorer_account: string;
  /** explorer link for txs */
  explorer_tx?: string;
};

export const chains: { [chain_name: string]: Chain } = {
  "Secret Network": {
    chain_name: "Secret Network",
    deposit_channel_id: "",
    deposit_gas: 0,
    deposit_gas_denom: "uscrt",
    withdraw_channel_id: "",
    withdraw_gas: 0,
    chain_id: "secret-4",
    bech32_prefix: "secret",
    lcd: "https://lcd.mainnet.secretsaturn.net",
    rpc: "https://grpc.mainnet.secretsaturn.net", // gRPC-web
    chain_image: "img/assets/scrt.svg",
    explorer_account: "https://www.mintscan.io/secret/account/",
  },
  Agoric: {
    chain_name: "Agoric",
    deposit_channel_id: "channel-10",
    deposit_gas: 150_000,
    deposit_gas_denom: "ubld",
    withdraw_channel_id: "channel-51",
    withdraw_gas: 30_000,
    chain_id: "agoric-3",
    bech32_prefix: "agoric",
    lcd: "https://main.api.agoric.net",
    rpc: "https://main.rpc.agoric.net",
    chain_image: "/bld.webp",
    explorer_account: "https://agoric.explorers.guru/account/",
  },
  Akash: {
    chain_name: "Akash",
    deposit_channel_id: "channel-43",
    deposit_gas: 150_000,
    deposit_gas_denom: "uakt",
    withdraw_channel_id: "channel-21",
    withdraw_gas: 30_000,
    chain_id: "akashnet-2",
    bech32_prefix: "akash",
    lcd: "https://akash-api.lavenderfive.com",
    rpc: "https://rpc.akash.forbole.com",
    chain_image: "/akt.svg",
    explorer_account: "https://www.mintscan.io/akash/account/",
  },
  Chihuahua: {
    chain_name: "Chihuahua",
    deposit_channel_id: "channel-16",
    deposit_gas: 150_000,
    deposit_gas_denom: "uhuahua",
    withdraw_channel_id: "channel-11",
    withdraw_gas: 30_000,
    chain_id: "chihuahua-1",
    bech32_prefix: "chihuahua",
    lcd: "https://api-chihuahua-ia.cosmosia.notional.ventures",
    rpc: "https://rpc.chihuahua.wtf",
    chain_image: "/huahua.jpg",
    explorer_account: "https://ping.pub/chihuahua/account/",
  },
  "Cosmos Hub": {
    chain_name: "Cosmos Hub",
    deposit_channel_id: "channel-235",
    deposit_gas: 150_000,
    deposit_gas_denom: "uatom",
    withdraw_channel_id: "channel-0",
    withdraw_gas: 30_000,
    chain_id: "cosmoshub-4",
    bech32_prefix: "cosmos",
    lcd: "https://api-cosmoshub-ia.cosmosia.notional.ventures",
    rpc: "https://rpc.cosmoshub.strange.love",
    chain_image: "/atom.jpg",
    explorer_account: "https://www.mintscan.io/cosmos/account/",
  },
  Crescent: {
    chain_name: "Crescent",
    deposit_channel_id: "channel-10",
    deposit_gas: 150_000,
    deposit_gas_denom: "ucre",
    withdraw_channel_id: "channel-24",
    withdraw_gas: 30_000,
    chain_id: "crescent-1",
    bech32_prefix: "cre",
    lcd: "https://mainnet.crescent.network:1317",
    rpc: "https://mainnet.crescent.network:26657",
    chain_image: "/cre.svg",
    explorer_account: "https://www.mintscan.io/crescent/account/",
  },
  Evmos: {
    chain_name: "Evmos",
    deposit_channel_id: "channel-15",
    deposit_gas: 350_000,
    deposit_gas_denom: "aevmos",
    withdraw_channel_id: "channel-18",
    withdraw_gas: 30_000,
    chain_id: "evmos_9001-2",
    bech32_prefix: "evmos",
    lcd: "https://api-evmos-ia.cosmosia.notional.ventures",
    rpc: "https://tendermint.bd.evmos.org:26657",
    chain_image: "/evmos.jpg",
    explorer_account: "https://www.mintscan.io/evmos/account/",
  },
  "Gravity Bridge": {
    chain_name: "Gravity Bridge",
    deposit_channel_id: "channel-79",
    deposit_gas: 150_000,
    deposit_gas_denom: "ugraviton",
    withdraw_channel_id: "channel-17",
    withdraw_gas: 30_000,
    chain_id: "gravity-bridge-3",
    bech32_prefix: "gravity",
    lcd: "https://api-gravitybridge-ia.cosmosia.notional.ventures",
    rpc: "https://rpc.gravity-bridge.ezstaking.io",
    chain_image: "/grav.svg",
    explorer_account: "https://www.mintscan.io/gravity-bridge/account/",
  },
  Injective: {
    chain_name: "Injective",
    deposit_channel_id: "channel-88",
    deposit_gas: 350_000,
    deposit_gas_denom: "inj",
    withdraw_channel_id: "channel-23",
    withdraw_gas: 30_000,
    chain_id: "injective-1",
    bech32_prefix: "inj",
    lcd: "https://api-injective-ia.cosmosia.notional.ventures",
    rpc: "https://tm.injective.network",
    chain_image: "/inj.svg",
    explorer_account: "https://www.mintscan.io/injective/account/",
  },
  Juno: {
    chain_name: "Juno",
    deposit_channel_id: "channel-48",
    deposit_gas: 150_000,
    deposit_gas_denom: "ujuno",
    withdraw_channel_id: "channel-8",
    withdraw_gas: 30_000,
    chain_id: "juno-1",
    bech32_prefix: "juno",
    lcd: "https://lcd-juno.itastakers.com",
    rpc: "https://rpc-juno.itastakers.com",
    chain_image: "/juno.svg",
    explorer_account: "https://www.mintscan.io/juno/account/",
  },
  Kujira: {
    chain_name: "Kujira",
    deposit_channel_id: "channel-10",
    deposit_gas: 150_000,
    deposit_gas_denom: "ukuji",
    withdraw_channel_id: "channel-22",
    withdraw_gas: 30_000,
    chain_id: "kaiyo-1",
    bech32_prefix: "kujira",
    lcd: "https://lcd.kaiyo.kujira.setten.io",
    rpc: "https://rpc.kaiyo.kujira.setten.io",
    chain_image: "/kuji.png",
    explorer_account: "https://kujira.explorers.guru/account/",
  },
  Osmosis: {
    chain_name: "Osmosis",
    deposit_channel_id: "channel-88",
    deposit_gas: 300_000,
    deposit_gas_denom: "uosmo",
    withdraw_channel_id: "channel-1",
    withdraw_gas: 30_000,
    chain_id: "osmosis-1",
    bech32_prefix: "osmo",
    lcd: "https://api-osmosis-ia.cosmosia.notional.ventures",
    rpc: "https://rpc.osmosis.zone",
    chain_image: "/osmo.jpeg",
    explorer_account: "https://www.mintscan.io/osmosis/account/",
  },
  Sentinel: {
    chain_name: "Sentinel",
    deposit_channel_id: "channel-50",
    deposit_gas: 150_000,
    deposit_gas_denom: "udvpn",
    withdraw_channel_id: "channel-3",
    withdraw_gas: 30_000,
    chain_id: "sentinelhub-2",
    bech32_prefix: "sent",
    lcd: "https://api-sentinel-ia.cosmosia.notional.ventures",
    rpc: "https://rpc-sentinel-ia.cosmosia.notional.ventures",
    chain_image: "/dvpn.jpeg",
    explorer_account: "https://www.mintscan.io/sentinel/account/",
  },
  Sifchain: {
    chain_name: "Sifchain",
    deposit_channel_id: "channel-65",
    deposit_gas: 150_000,
    deposit_gas_denom: "urowan",
    withdraw_channel_id: "channel-15",
    withdraw_gas: 30_000,
    chain_id: "sifchain-1",
    bech32_prefix: "sif",
    lcd: "https://api-sifchain-ia.cosmosia.notional.ventures",
    rpc: "https://rpc.sifchain.finance",
    chain_image: "/rowan.svg",
    explorer_account: "https://www.mintscan.io/sifchain/account/",
  },
  Stargaze: {
    chain_name: "Stargaze",
    deposit_channel_id: "channel-48",
    deposit_gas: 150_000,
    deposit_gas_denom: "ustars",
    withdraw_channel_id: "channel-19",
    withdraw_gas: 30_000,
    chain_id: "stargaze-1",
    bech32_prefix: "stars",
    lcd: "https://rest.stargaze-apis.com",
    rpc: "https://rpc.stargaze-apis.com",
    chain_image: "/stars.webp",
    explorer_account: "https://www.mintscan.io/stargaze/account/",
  },
  Stride: {
    chain_name: "Stride",
    deposit_channel_id: "channel-40",
    deposit_gas: 150_000,
    deposit_gas_denom: "ustrd",
    withdraw_channel_id: "channel-37",
    withdraw_gas: 30_000,
    chain_id: "stride-1",
    bech32_prefix: "stride",
    lcd: "https://stride-api.lavenderfive.com",
    rpc: "https://stride-rpc.lavenderfive.com",
    chain_image: "/stride.svg",
    explorer_account: "https://www.mintscan.io/stride/account/",
  },
  Terra: {
    chain_name: "Terra",
    deposit_channel_id: "channel-3",
    deposit_gas: 150_000,
    deposit_gas_denom: "uluna",
    withdraw_channel_id: "channel-16",
    withdraw_gas: 30_000,
    chain_id: "phoenix-1",
    bech32_prefix: "terra",
    lcd: "https://phoenix-lcd.terra.dev",
    rpc: "https://terra-rpc.lavenderfive.com",
    chain_image: "/luna2.svg",
    explorer_account: "https://finder.terra.money/mainnet/address/",
  },
};

export type Token = {
  /** display name of the token */
  name: string;
  /** a snip20 token that's originated from Secret Network */
  is_snip20?: boolean;
  /** secret contract address of the token */
  address: string;
  /** secret contract code hash of the token */
  code_hash: string;
  /** logo of the token */
  image: string;
  /** decimals of the token */
  decimals: number;
  /** coingeck id to get usd price */
  coingecko_id: string;
  /** how to deposit this token into Secret Network */
  deposits: Deposit[];
  /** how to withdraw this token out of Secret Network */
  withdrawals: Withdraw[];
};

export type Deposit = {
  /** display name of the source chain */
  chain_name: string;
  /** denom on the other chain */
  from_denom: string;

  /** channel_id on the chain (snip20) */
  channel_id?: string;
  /** gas limit for ibc transfer from the chain to Secret Network (snip20) */
  gas?: number;
};

export type Withdraw = {
  /** display name of the target chain */
  chain_name: string;
  /** denom on Secret Network */
  from_denom: string;

  /** channel_id on Secret Network (snip20) */
  channel_id?: string;
  /** gas limit for ibc transfer from Secret Network to the chain (snip20) */
  gas?: number;
};

// Native tokens of chains (and tokens from external chains)
export const tokens: Token[] = [
  {
    name: "SCRT",
    address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
    code_hash:
      "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e",
    image: "/scrt.svg",
    decimals: 6,
    coingecko_id: "secret",
    deposits: [
      {
        chain_name: "Agoric",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Agoric"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Akash",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Akash"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Chihuahua",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Chihuahua"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Cosmos Hub",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Cosmos Hub"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Crescent",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Crescent"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Evmos",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Evmos"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Gravity Bridge",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Gravity Bridge"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Injective",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Injective"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Juno"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Kujira"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Osmosis"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Sentinel",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Sentinel"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Sifchain",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Sifchain"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Stargaze",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stargaze"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Stride",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stride"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
      {
        chain_name: "Terra",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Terra"].deposit_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uscrt"
        ),
      },
    ],
    withdrawals: [
      {
        chain_name: "Agoric",
        from_denom: "uscrt",
      },
      {
        chain_name: "Akash",
        from_denom: "uscrt",
      },
      {
        chain_name: "Chihuahua",
        from_denom: "uscrt",
      },
      {
        chain_name: "Cosmos Hub",
        from_denom: "uscrt",
      },
      {
        chain_name: "Crescent",
        from_denom: "uscrt",
      },
      {
        chain_name: "Evmos",
        from_denom: "uscrt",
      },
      {
        chain_name: "Gravity Bridge",
        from_denom: "uscrt",
      },
      {
        chain_name: "Injective",
        from_denom: "uscrt",
      },
      {
        chain_name: "Juno",
        from_denom: "uscrt",
      },
      {
        chain_name: "Kujira",
        from_denom: "uscrt",
      },
      {
        chain_name: "Osmosis",
        from_denom: "uscrt",
      },
      {
        chain_name: "Sentinel",
        from_denom: "uscrt",
      },
      {
        chain_name: "Sifchain",
        from_denom: "uscrt",
      },
      {
        chain_name: "Stargaze",
        from_denom: "uscrt",
      },
      {
        chain_name: "Stride",
        from_denom: "uscrt",
      },
      {
        chain_name: "Terra",
        from_denom: "uscrt",
      },
    ],
  },
  {
    name: "AKT",
    address: "secret168j5f78magfce5r2j4etaytyuy7ftjkh4cndqw",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/akt.svg",
    decimals: 6,
    coingecko_id: "akash-network",
    deposits: [
      {
        chain_name: "Akash",
        from_denom: "uakt",
      },
    ],
    withdrawals: [
      {
        chain_name: "Akash",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Akash"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uakt"
        ),
      },
    ],
  },
  {
    name: "ATOM",
    address: "secret14mzwd0ps5q277l20ly2q3aetqe3ev4m4260gf4",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: "/atom.jpg",
    decimals: 6,
    coingecko_id: "cosmos",
    deposits: [
      {
        chain_name: "Cosmos Hub",
        from_denom: "uatom",
      },
    ],
    withdrawals: [
      {
        chain_name: "Cosmos Hub",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Cosmos Hub"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uatom"
        ),
      },
    ],
  },
  {
    name: "BLD",
    address: "secret1rw2l7z22s3ed6dl5v70ktvnckhurldy23a3a58",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/bld.webp",
    decimals: 6,
    coingecko_id: "agoric",
    deposits: [
      {
        chain_name: "Agoric",
        from_denom: "ubld",
      },
    ],
    withdrawals: [
      {
        chain_name: "Agoric",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Agoric"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ubld"
        ),
      },
    ],
  },
  {
    name: "CRE",
    address: "secret1tatdlkyznf00m3a7hftw5daaq2nk38ugfphuyr",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/cre.svg",
    decimals: 6,
    coingecko_id: "crescent-network",
    deposits: [
      {
        chain_name: "Crescent",
        from_denom: "ucre",
      },
    ],
    withdrawals: [
      {
        chain_name: "Crescent",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Crescent"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ucre"
        ),
      },
    ],
  },
  {
    name: "DVPN",
    address: "secret1k8cge73c3nh32d4u0dsd5dgtmk63shtlrfscj5",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: "/dvpn.jpeg",
    decimals: 6,
    coingecko_id: "sentinel",
    deposits: [
      {
        chain_name: "Sentinel",
        from_denom: "udvpn",
      },
    ],
    withdrawals: [
      {
        chain_name: "Sentinel",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Sentinel"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "udvpn"
        ),
      },
    ],
  },
  {
    name: "EVMOS",
    address: "secret1grg9unv2ue8cf98t50ea45prce7gcrj2n232kq",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/evmos.jpg",
    decimals: 18,
    coingecko_id: "evmos",
    deposits: [
      {
        chain_name: "Evmos",
        from_denom: "aevmos",
      },
    ],
    withdrawals: [
      {
        chain_name: "Evmos",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Evmos"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "aevmos"
        ),
      },
    ],
  },
  {
    name: "GRAV",
    address: "secret1dtghxvrx35nznt8es3fwxrv4qh56tvxv22z79d",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/grav.svg",
    decimals: 6,
    coingecko_id: "graviton",
    deposits: [
      {
        chain_name: "Gravity Bridge",
        from_denom: "ugraviton",
      },
    ],
    withdrawals: [
      {
        chain_name: "Gravity Bridge",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Gravity Bridge"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ugraviton"
        ),
      },
    ],
  },
  {
    name: "HUAHUA",
    address: "secret1ntvxnf5hzhzv8g87wn76ch6yswdujqlgmjh32w",
    code_hash:
      "182d7230c396fa8f548220ff88c34cb0291a00046df9ff2686e407c3b55692e9",
    image: "/huahua.jpg",
    decimals: 6,
    coingecko_id: "chihuahua-chain",
    deposits: [
      {
        chain_name: "Chihuahua",
        from_denom: "uhuahua",
      },
    ],
    withdrawals: [
      {
        chain_name: "Chihuahua",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Chihuahua"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uhuahua"
        ),
      },
    ],
  },
  {
    name: "INJ",
    address: "secret16cwf53um7hgdvepfp3jwdzvwkt5qe2f9vfkuwv",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/inj.svg",
    decimals: 18,
    coingecko_id: "injective-protocol",
    deposits: [
      {
        chain_name: "Injective",
        from_denom: "inj",
      },
    ],
    withdrawals: [
      {
        chain_name: "Injective",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Injective"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "inj"
        ),
      },
    ],
  },
  {
    name: "IST",
    address: "secret1kjqktuq2wq6mk7l0ecvk2cwcskjmv3ghpklctn",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/ist.webp",
    decimals: 6,
    coingecko_id: "inter-stable-token",
    deposits: [
      {
        chain_name: "Agoric",
        from_denom: "uist",
      },
    ],
    withdrawals: [
      {
        chain_name: "Agoric",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Agoric"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uist"
        ),
      },
    ],
  },
  {
    name: "JUNO",
    address: "secret1smmc5k24lcn4j2j8f3w0yaeafga6wmzl0qct03",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: "/juno.svg",
    decimals: 6,
    coingecko_id: "juno-network",
    deposits: [
      {
        chain_name: "Juno",
        from_denom: "ujuno",
      },
    ],
    withdrawals: [
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Juno"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ujuno"
        ),
      },
    ],
  },
  {
    name: "KUJI",
    address: "secret1gaew7k9tv4hlx2f4wq4ta4utggj4ywpkjysqe8",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/kuji-token.webp",
    decimals: 6,
    coingecko_id: "kujira",
    deposits: [
      {
        chain_name: "Kujira",
        from_denom: "ukuji",
      },
    ],
    withdrawals: [
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Kujira"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ukuji"
        ),
      },
    ],
  },
  {
    name: "LUNA",
    address: "secret1w8d0ntrhrys4yzcfxnwprts7gfg5gfw86ccdpf",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/luna2.svg",
    decimals: 6,
    coingecko_id: "terra-luna-2",
    deposits: [
      {
        chain_name: "Terra",
        from_denom: "uluna",
      },
    ],
    withdrawals: [
      {
        chain_name: "Terra",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Terra"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uluna"
        ),
      },
    ],
  },
  {
    name: "OSMO",
    address: "secret1zwwealwm0pcl9cul4nt6f38dsy6vzplw8lp3qg",
    code_hash:
      "ad91060456344fc8d8e93c0600a3957b8158605c044b3bef7048510b3157b807",
    image: "/osmo.jpeg",
    decimals: 6,
    coingecko_id: "osmosis",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: "uosmo",
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Osmosis"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "uosmo"
        ),
      },
    ],
  },
  {
    name: "ROWAN",
    address: "secret159p22zvq2wzsdtqhm2plp4wg33srxp2hf0qudc",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/rowan.svg",
    decimals: 18,
    coingecko_id: "sifchain",
    deposits: [
      {
        chain_name: "Sifchain",
        from_denom: "rowan",
      },
    ],
    withdrawals: [
      {
        chain_name: "Sifchain",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Sifchain"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "rowan"
        ),
      },
    ],
  },
  {
    name: "STARS",
    address: "secret1x0dqckf2khtxyrjwhlkrx9lwwmz44k24vcv2vv",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/stars.webp",
    decimals: 6,
    coingecko_id: "stargaze",
    deposits: [
      {
        chain_name: "Stargaze",
        from_denom: "ustars",
      },
    ],
    withdrawals: [
      {
        chain_name: "Stargaze",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stargaze"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ustars"
        ),
      },
    ],
  },
  {
    name: "stATOM",
    address: "secret1gedmwfcjfykl9ljt5u50ecfzp8pwwsvgjgq8vc",
    code_hash:
      "0e6b2ae7575d5b91ea534933ad9df0ffb6c33e77819876a2e68b0e5dcd2539a8",
    image: "/statom.svg",
    decimals: 6,
    coingecko_id: "stride-staked-atom",
    deposits: [
      {
        chain_name: "Stride",
        from_denom: "stuatom",
      },
    ],
    withdrawals: [
      {
        chain_name: "Stride",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stride"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "stuatom"
        ),
      },
    ],
  },
  {
    name: "stOSMO",
    address: "secret1ffrjnxpvrc0cv0s7rmtgc2a29cy7acnxxu6jtf",
    code_hash:
      "0e6b2ae7575d5b91ea534933ad9df0ffb6c33e77819876a2e68b0e5dcd2539a8",
    image: "/stosmo.svg",
    decimals: 6,
    coingecko_id: "stride-staked-osmo",
    deposits: [
      {
        chain_name: "Stride",
        from_denom: "stuosmo",
      },
    ],
    withdrawals: [
      {
        chain_name: "Stride",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stride"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "stuosmo"
        ),
      },
    ],
  },
  {
    name: "stJUNO",
    address: "secret1uhmquwlra5efgrsp5srwlsaqz5mtfcsvlrxrkv",
    code_hash:
      "0e6b2ae7575d5b91ea534933ad9df0ffb6c33e77819876a2e68b0e5dcd2539a8",
    image: "/stjuno.svg",
    decimals: 6,
    coingecko_id: "stride-staked-juno",
    deposits: [
      {
        chain_name: "Stride",
        from_denom: "stujuno",
      },
    ],
    withdrawals: [
      {
        chain_name: "Stride",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stride"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "stujuno"
        ),
      },
    ],
  },
  {
    name: "STRD",
    address: "secret17gg8xcx04ldqkvkrd7r9w60rdae4ck8aslt9cf",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/stride.svg",
    decimals: 6,
    coingecko_id: "stride",
    deposits: [
      {
        chain_name: "Stride",
        from_denom: "ustrd",
      },
    ],
    withdrawals: [
      {
        chain_name: "Stride",
        from_denom: ibcDenom(
          [
            {
              incomingChannelId: chains["Stride"].withdraw_channel_id,
              incomingPortId: "transfer",
            },
          ],
          "ustrd"
        ),
      },
    ],
  },
];

// These are snip 20 tokens that are IBC compatible (no need to wrap them manually)
export const snips: Token[] = [
  {
    name: "ALTER",
    is_snip20: true,
    address: "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
    code_hash:
      "d4f32c1bca133f15f69d557bd0722da10f45e31e5475a12900ca1e62e63e8f76",
    image: "/alter.jpg",
    decimals: 6,
    coingecko_id: "alter",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
  {
    name: "AMBER",
    is_snip20: true,
    address: "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
    code_hash:
      "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042",
    image: "/amber.jpg",
    decimals: 6,
    coingecko_id: "",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
  {
    name: "BUTT",
    is_snip20: true,
    address: "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
    code_hash:
      "f8b27343ff08290827560a1ba358eece600c9ea7f403b02684ad87ae7af0f288",
    image: "/butt.png",
    decimals: 6,
    coingecko_id: "button",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
  {
    name: "SHD",
    is_snip20: true,
    address: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
    code_hash:
      "fa824c4504f21fc59250da0cdf549dd392fd862baf2689d246a07b9e941f04a9",
    image: "/shd.jpg",
    decimals: 8,
    coingecko_id: "shade-protocol",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
  {
    name: "SIENNA",
    is_snip20: true,
    address: "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
    code_hash:
      "c1dc8261059fee1de9f1873cd1359ccd7a6bc5623772661fa3d55332eb652084",
    image: "/sienna.jpg",
    decimals: 18,
    coingecko_id: "sienna",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
  {
    name: "stkd-SCRT",
    is_snip20: true,
    address: "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
    code_hash:
      "f6be719b3c6feb498d3554ca0398eb6b7e7db262acb33f84a8f12106da6bbb09",
    image: "/stkd-scrt.svg",
    decimals: 6,
    coingecko_id: "stkd-scrt",
    deposits: [
      {
        chain_name: "Osmosis",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-476", incomingPortId: "transfer" }],
          "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4"
        ),
        channel_id: "channel-476",
        gas: 200_000,
      },
      {
        chain_name: "Kujira",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-44", incomingPortId: "transfer" }],
          "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4"
        ),
        channel_id: "channel-44",
        gas: 200_000,
      },
      {
        chain_name: "Juno",
        from_denom: ibcDenom(
          [{ incomingChannelId: "channel-163", incomingPortId: "transfer" }],
          "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4"
        ),
        channel_id: "channel-163",
        gas: 200_000,
      },
    ],
    withdrawals: [
      {
        chain_name: "Osmosis",
        from_denom: "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
        channel_id: "channel-44",
        gas: 350_000,
      },
      {
        chain_name: "Kujira",
        from_denom: "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
        channel_id: "channel-46",
        gas: 350_000,
      },
      {
        chain_name: "Juno",
        from_denom: "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
        channel_id: "channel-45",
        gas: 350_000,
      },
    ],
  },
];

export const SECRET_CHAIN_ID = chains["Secret Network"].chain_id;
export const SECRET_LCD = chains["Secret Network"].lcd;
export const SECRET_RPC = chains["Secret Network"].rpc;