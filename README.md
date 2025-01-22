Art House
C4eiHouse is an NFT platform that allows you to create, buy and sell NFTs on multiple blockchains.

https://art.c4ei.net
Quickstart
yarn install

yarn start

Go to http://localhost:3000/

Click on Create NFT

Make sure that you can see the created NFT in NFT gallery

To build the project: yarn build

Here's a step-by-step tutorial on how to build your own C4eiHouse.

How it Works
C4eiHouse can do 4 things:

Mint an NFT
List an NFT for sale
Buy an NFT
Unlist an NFT
NFT Process
Everytime a new NFT is minted it gets deployed to the provided smart contract on the relevant chain ID in config-chains.json
When it gets listed for sale, approval is given by the account to the Market contract, the NFT is transferred to the address of the contract which will list the item for sale.
When the account buys a listed item, the marketplace receives a commission of salesFeeBasisPoints (currently 250 basis points or 2.50%) and the seller receives the rest.
The seller may choose to unlist an item at which point the ownership of the NFT will be transferred back to the seller and become unavailable for purchase in the market.
Run Hardhat in Console
To quickly run commands you can use the interactive hardhat console

npx hardhat console

const [ownerSigner, signer1, signer2] = await ethers.getSigners();
const ownerBalance = await ethers.provider.getBalance(ownerSigner.address);
Set up your Backend
If you won't be deploying to a test net or mainnet, go to hardhat.config.js and comment out privateKey and all the networks except for networks.hardhat

Put your private keys for the account that will be deploying the smart contract in a .secrets file. This will NOT be included in your version control. You can get the key from shared.secrets and run cp shared.secrets .secrets and replace the private key.

Load the secret key source .secrets

Compile the smart contracts to get the most recent change: npx hardhat compile

Run your own local blockchain node using: npx hardhat node

Backend
Running Your Local Node
The backend for this project is a blockchain node. For development, you can run your own local blockchain node using: npx hardhat node

Deploying Smart Contracts
Deploying Locally
Run smart contract deployment script: npx hardhat run scripts/deploy.js --network localhost
Deploying to live Testnet or Mainnet
Adding a New Chain
Put your private keys for the account that will be deploying the smart contract in .secrets. This will NOT be included in your version control and run source .secrets.

Add the chain information to src/config-chains.json

Get Chain ID from:
https://chainlist.org/
Get an RPC URL for your desired blockchain (TODO: where to get good RPC urls)
Binance: https://docs.binance.org/smart-chain/developer/rpc.html (TODO: add other chains)
Add the apikey to .secrets
Get some tokens to pay the gas fees for deploying the smart contracts. On testnets you can use a faucet:

Ethereum Rinkeby: https://rinkebyfaucet.com
Binance: https://testnet.binance.org/faucet-smart
Polygon: https://faucet.polygon.technology
Celo: https://celo.org/developers/faucet
Harmony: https://faucet.pops.one
Load secrets to your environment variable source .secrets

Deploy the smart contract: npx hardhat deploy --chain-id [chainId]

If you want to deploy just the NFT or the Market without deploying everything run:
npx hardhat deploy:nft --chain-id [chainId]
npx hardhat deploy:market --chain-id [chainId]
Here are some examples:
Ethereum Rinkeby: npx hardhat deploy --chain-id 4
Binance Smart Chain Testnet: npx hardhat deploy --chain-id 97
Polygon Mumbai: npx hardhat deploy --chain-id 80001
If the deploy script is not working you can also us the default hardhat deployment script. Make sure to update the CHAIN ID variable: TODO add a check that chainID matches the passed in network

npx hardhat run --network polygon scripts/deploy-hardhat.js

Add the new chain information to README.md, see these commits below for examples of what to change:
Ethereum
Binance
Polygon
Celo
Smart Contract Addresses
View Ethereum (Rinkeby) NFT Contract on Block Explorer
Note: We use Ethereum Rinkeby because that's what Opensea uses, so our testnet NFTs will also be visible on Opensea.
View Binance Smart Chain (Testnet) NFT Contract on Block Explorer
View Polygon (Mumbai) NFT Contract on Block Explorer
View Celo (Alfajores) NFT Contract on Block Explorer
View Harmony (Testnet) NFT Contract on Block Explorer
Troubleshooting
If you see, the following doublecheck you set the correct credentials for your RPC URL:

Invalid JSON-RPC response received: {
  "message":"Invalid authentication credentials"
}
Adding Chains to Metamask
Localhost
Switch to localhost 8545 in metamask

Import private keys from test-accounts.txt

Use accounts #0-3 for making, selling and buying NFTs between accounts

Testnets and Main
Open Metamask extension and go to settings > networks (TODO add a 1-click button for adding networks)
Public RPCs may have traffic or rate-limits depending on usage.

So you may see the following error.

Could not fetch chain ID. Is your RPC URL correct?
If that happens, try a different URL or you can get a free dedicated free RPC URLS.

Celo Alfajores

Network Name: Celo (Alfajores Testnet)
New RPC URL: https://alfajores-forno.celo-testnet.org
Chain ID: 44787
Currency Symbol (Optional): CELO
Block Explorer URL (Optional): https://alfajores-blockscout.celo-testnet.org
Polygon:

Network Name: Mumbai TestNet
New RPC URL: https://rpc-mumbai.matic.today
Chain ID: 80001
Currency Symbol: Matic
Block Explorer URL: https://mumbai.polygonscan.com/
TODO: Get correct Browser settings for Rinkeby (although it's included by default in Metamask) [Rinkeby Ethereum]

Network Name: Mumbai TestNet
New RPC URL: https://rpc-mumbai.matic.today
Chain ID: 80001
Currency Symbol: Matic
Block Explorer URL: https://mumbai.polygonscan.com/
Harmony Testnet

Network Name: Harmony Testnet
RPC URL: https://api.s0.b.hmny.io
Chain ID: 1666700000
Currency Symbol: ONE
Block Explorer URL: https://explorer.pops.one/
Running Tests
Testing Smart Contracts
npx hardhat test

Test a specific feature: npx hardhat test --grep unListMarketItem

Sometimes you might try to run a test or a piece of code and find that a function is undefined. This might be due to an outdated artifacts build. Run npx hardhat compile --force to force a recompilation.

Deploying smart contracts
Compile the smart contracts to get the most recent change: npx hardhat compile
Load your environment variables using shared.env as a template
Resources
Inspired by Nader Dabit's Building a Full Stack NFT Marketplace on Ethereum with Polygon.
