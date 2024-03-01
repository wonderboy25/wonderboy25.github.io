export const assetTokens = [
	{	name: "bear",
		symbol: "BEAR",
		icon: "https://cdn.coinranking.com/GcD9RsRbg/ordi.png",
		latestPriceUSD: "54.49445886739449",
		decimals: 6,
		contracts: [
            {
                chainId: 1, // 11155111,
                chain: "ETH",
                contractAddress: "0xcb68f408cf374810f0a7a9cb469607209c6e27d5"
            },
            {
                chainId: 43114, // 43113,
                chain: "Avalanche",
                contractAddress: "0x5912eB0707e9Fc3b541B8EcDd3e7b78A83Fa95C0"
            },
            {
                chainId: 42161, // 421614,
                chain: "Arbitrum",
                contractAddress: "0x1fca20c5a3fa6ba69469db4f974e7cb9e5523091"
            },
            {
                chainId: 8453, // 84532,
                chain: "Base",
                contractAddress: "0x5aa1f58149318b290c45c431da1965f1e67ad9fd"
            },
            {
                chainId: 137, // 80001,
                chain: "Polygon",
                contractAddress: "0x5FD44aAAFDF10F45E27092e4F1960DF301a269F4"
            },
            {
                chainId: 56, // 97,
                chain: "BSC",
                contractAddress: "0xef0513cf80e6bd86a726acbd5859891d0a855329"
            }
        ]
	},
	{	name: "PEPE",
		symbol: "PEPEBRC",
		icon: "https://cdn.coinranking.com/OPXt-6gZw/HhczkhfU_400x400.png",
		latestPriceUSD: "0.07887648335067868",
		decimals: 10,
		contracts: [
            {
                chainId: 1,
                chain: "ETH",
                contractAddress: "0xB1A91036e4a3C144efeD953e0b6CC5f6B98AD256"
            },
            {
                chainId: 56,
                chain: "BSC",
                contractAddress: "0xB1A91036e4a3C144efeD953e0b6CC5f6B98AD256"
            }
        ]
	}
]