const contracts = {
	// coinbase
	coinbase: "0xD4D6F030520649c7375c492D37ceb56571f768D0",

	nftManagerJson: "@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json",
	factoryJson: "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json",
	poolJson: "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json",

	swapRouterJson: "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json",

	// tokens and contracts
    izumiTest: {
		// uniswapV3
		nftManager: "0x5202254db4B1Eb6632D54B6860ebC85892889fD1",
		factory: "0x8c05B8e31C5f94EDF49173f2b04E637a81F6510f",
		swapRouter: "0x6d44131a2A84B49Fa1F73e7c854A0c90982ffdB5",

		USDT: "0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f",
		USDC: "0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B",
		DAI: "0xA97f8bc2b98a56f648340e05406cc7E34bB25D3A",
		BIT: "0x41BC21bdcF0FA87ae6eeFcBE0e4dB29dB2b650C1",
		iZi: "0xEe5e3852434eB67F8e9E97015e32845861ea15E8",
		LIDO: "0xB7556AF20fDcCfA1f3E10AFDaFfef1F975Fd26fF",
		SPELL: "0x280F127021DeeB3Bd147a15e213A1B595dD21bfe",
		MIM: "0x52F87F2F02B0FD6797905644572F76537260CC8b",
		stETH: "0x0453189A122462bd64348F01EBdcD20d2d60be81",
	    WETH9: "0x3AD23A16A81Cd40010F39309876978F20DD2f682",
		YIN: "0x628571078add0031Ff6E9975AE6ddE1123fC423b",
		ACY: "0x532403eeAB8673d008CB558815B784267Cec63A0",

		USDC6: '0x244d6215E5b70e060094E9593E4497D952A2faD0',
		USDT6: '0x43C3b947FF2f63Bdd7d14C6dAeEb8D9428B1686d',

		DEVT: '0xD93FfD9B4d5D643A175B7DcBf4Fb0dA0016D35C7',

		DDAO: '0x23f9837867c28069840da3914c16429bEC008Ef5',

		ETHT: '0x72328EB80d99147A48BA5d05B54D6d19dA655A01',
		iZiT: '0x13F36332b6b9e658Ed3e7429F1A50AEA8f4e766E',

		IZITEST: '0xBc92690a178Cd91A079FAc2BE67d27424e292Fd2',
		
		AIRDROP: "0x6A794Ac1AD9401cb988f00F4ad2629F09B28d172",
		ONESIDE_USDC_BIT_3000: "0x4177ae2fBB01cD2704ed36864678B43DFf1D365B",

		ONESIDE_WETH9_IZI_3000: "0x4e063602f64763C11BBeA2E46Cd0D4C58D1C2647",
		ONESIDE_WETH9_IZI_3000_EMERGENCY_WITHDRAW: '0xdD6CA273955C1dAfBd52E38cC444db2480644c5C',


		ONESIDE_WETH9_YIN_3000: '0xA75a3E7dF5f0f5556501e608339CB54C357acD81',
		ONESIDE_WETH9_YIN_3000_EMERGENCY_WITHDRAW: '0x931B4E5d6CCFCE0fE4D36935d1948525D727371E',

		FIXRANGE_V2_USDC_USDT_100: "0x2b054048e4Bf4F673E2A701744e2284Ab7B645A2",
		FIXRANGE_V2_USDC_USDT_100_EMERGENCY_WITHDRAW: "0x3500301bbdbD9960aCa36A09263381e901D021CB",

		ONESIDE_V2_ETHT_IZIT_3000: '0xbC1932Ea489669ff3261F30eEB65Fee0680950De',
		ONESIDE_V2_USDC_ACY_3000: '0xebF93A381b22066484fBD08F8d6E249f0D49f174',
		ONESIDE_V2_USDC_ACY_3000_EMERGENCY_WITHDRAW: '0x590D2623c7d988C7B3ee385b39090347b11E708B',

		ONESIDE_V2_USDC_DEVT_3000: '0x150848c11040F6E52D4802bFFAfFBD57E6264737',

		ONESIDE_VEIZI_USDC_IZI_3000: '0x390bd26F34D7764c7D7250a99898Fc467BdEfef1',

		FIXRANGE_DAI_USDC_100: '0x4969ced0736aCddd271A89150F777312cf4be99a',


		DYNRANGE_V2_WETH9_DDAO_3000: '0x4daCaf7Bf6Cc61d48F5b915a30D5e636a4f55654',

		DYNRANGE_V2_WETH9_DDAO_3000_EMERGENCY_WITHDRAW: '0xCd9244ec673786A475d57CE89d321611cfb1187a',

		DYNRANGE_V2_ETHT_DDAO_3000: '0xdC15ed2aEDBA1D0255b9f0faAb1dCd46ba2461bB',

		DYNRANGE_VEIZI_USDC_IZI_3000: '0x748e2fd60dB433Fe50E975268c8Db579c8FA77D0',

		testOracle: '0xEC65Ba571bB4f449065Ba0c2A0795F038109e4fb',

		testPow: '0x6B4D3f0A9351aaa4bFF2f2a3aF3f88082673E9be',

		YIN_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		BIT_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		iZi_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		DDAO_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		iZiT_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		ACY_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		DEVT_PROVIDER: '0xD4D6F030520649c7375c492D37ceb56571f768D0',
		CHARGE_RECEIVER: '0xa064411B9F927226FB4a99864a247b1ef991b04F',
		CHARGE_RECEIVER2: '0x7628c09B7B808285A35815125e8c05d16D9Baa7b',

		veiZi: '0xC22Af3F30a22c6c02dC4C9a9AcF5c337Fad4Aa1F',
    },

	arbitrum: {
		USDT: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
		USDC: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
		factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
		nftManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',

		iZi_PROVIDER: '0x901836abD28c15DD1d56155cEdAFE2ec2c6b4801',
		iZi: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
		CHARGE_RECEIVER: '0x3599A414B4365b118766479600c0fD135177C2D5',
	},

	rinkeby: {
		USDC: '0xdbd76B3B7330374386829B3B5C9317e84Ee75257',
		USDT: '0x905f8714ebE30BF9829096043370B9BA29643D3D',

		iZi: "0x40E2BA87F796FaBeEe98872F2085fC020DbAd47B",
		WETH9: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
		nftManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
		factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
		swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",

		ONESIDE_WETH9_IZI_3000: '0x2cc9e757dA9C89d297E78972E60837A2Cf4e8447',
		// FIXRANGE_USDC_USDT_500: '0x7B619028b64d7675806A42Dd5B17dfE8aD4830D2',
		FIXRANGE_USDC_USDT_500: '0x275Ee44eB04b682E94C7455be07639Be7Ac12127',

		AIRDROP: '0xA61A38b9350cbE00a2030A94B40b888483C28E8F',
	},

	polygon: {
		WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
		ETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
		iZi: '0x60d01ec2d5e98ac51c8b4cf84dfcce98d527c747',
		YIN: '0x794Baab6b878467F93EF17e2f2851ce04E3E34C8',
		USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
		USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
		ACY: '0x8b1f836491903743fE51ACd13f2CC8Ab95b270f6',
		DDAO: '0x90f3edc7d5298918f7bb51694134b07356f7d0c7',

		USDC6: '0x1DADF066518E2b7064D85cED45625BFeC52ca07d',
		USDT6: '0x130f74273856Dfc5Ee8AE485FE991c0cC6411f39',
		ETHT: '0x8981c60ff02CDBbF2A6AC1a9F150814F9cF68f62',
		iZiT: '0xbE138aD5D41FDc392AE0B61b09421987C1966CC3',
		YINT: '0x1f2412A4cb5eBA5c349257bEf4b323ba7044be9B',

		iZiT_PROVIDER: '0x3E8aE53D96006bd4c8462eDAFb4Fb8364007E744',
		YINT_PROVIDER: '0x3E8aE53D96006bd4c8462eDAFb4Fb8364007E744',

		ONESIDE_ETHT_IZIT_3000: '0x99CC0A41F8006385f42aed747e2d3642a226d06E',
		FIXRANGE_USDC6_USDT6_500: '0x8984901cEaff81b45396a13D8DcD4F153e62A429',

		FIXRANGE_V2_USDC_USDT_500: '0x01Cc44fc1246D17681B325926865cDB6242277A5',
		ONESIDE_V2_USDC_ACY_3000: '0x28d7BFf13c5A1227aEe2E892F8d22d8A1a84A0D4',

		ONESIDE_V2_ETH_YIN_3000_2_15: '0x150848c11040f6e52d4802bffaffbd57e6264737',

		DYNRANGE_V2_ETH_DDAO_3000: '0xafd5f7a790041761f33bfbf3df1b54df272f2576',

		CHARGE_RECEIVER: '0x3599A414B4365b118766479600c0fD135177C2D5',

		YIN_PROVIDER: '0x69D844a9B9334a846f5e6ae437844ac9A25243ba',
		iZi_PROVIDER: '0xee264e74A2Fd2c7A55da705b80e092f05DaE5b5D',
		ACY_PROVIDER: "0x901836abD28c15DD1d56155cEdAFE2ec2c6b4801",
		
		nftManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
		factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
		swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
	},

	mumbai: {
		WMATIC: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
		ETH: '0x1DADF066518E2b7064D85cED45625BFeC52ca07d',
		iZi: '0xBd770416a3345F91E4B34576cb804a576fa48EB1',
		USDC: '0x263B272A99127ad57cff73AA9c04C515007bFb6f',
		USDT: '0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA',

		nftManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
		factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
		swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
	},

	ethereum: {
		WETH9: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
		YIN: "0x794baab6b878467f93ef17e2f2851ce04e3e34c8",
		USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		iZi: "0x9ad37205d608B8b219e6a2573f922094CEc5c200",
		DEVT: "0xB5c578947de0fd71303F71F2C3d41767438bD0de",
		nftManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
		factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
		swapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
		AIRDROP: '0xE65DB7179d70DAea99A0547eE732087eab0ffFBC',
		FIXRANGE_USDC_USDT_100: '0x8981c60ff02CDBbF2A6AC1a9F150814F9cF68f62',
		ONESIDE_WETH9_IZI_3000: '0xbE138aD5D41FDc392AE0B61b09421987C1966CC3',
		ONESIDE_WETH9_YIN_3000: '0x57AFF370686043B5d21fDd76aE4b513468B9fb3C',

		ONESIDE_V2_USDC_DEVT_3000: '0x99CC0A41F8006385f42aed747e2d3642a226d06E',

		YIN_PROVIDER: '0x69D844a9B9334a846f5e6ae437844ac9A25243ba',
		iZi_PROVIDER: '0xee264e74A2Fd2c7A55da705b80e092f05DaE5b5D',

		CHARGE_RECEIVER: '0x3599A414B4365b118766479600c0fD135177C2D5',
	}
}

module.exports = contracts;

