clone V2 core from uniswap
clone periphery from uniswap 


update factory smart contract 

create token A and token B simple ERC20 contract

npm install -g truffle

truflle init

Core v2:

move smart contracts into contract folder

update migration folder  in truffle with the deployed contracts

cd to root folder and run :

npm int -y 

npm install @openzeppelin/contracts@2.5.1 "version compatibility"

update truflle compiler to match solidity version eg "0.5.16"

update deploy_contracts.js 

npm install -g ganache-cli 

check truffle config file development port : 8545

run ganache-cli

run truflle compile : to compile contracts

run truffle migrate : to deploy contract using Ganache network


*There is two version of solidity used so create two separate truffle project*

periphery v2: Router contract

npm install -g truffle

truflle init

move smart contracts into contract folder

update migration folder  in truffle with the deployed contracts

npm int -y 

npm install @uniswap/lib @uniswap/v2-core

change solidity version 

create WETH contract *uniswap does not use ether but only use wrapped ether for router contract*

Find address for Wrapped Ether and copy code 

copy the Factory contract address and paste in the 'deploy_contracts.js' Factory Address
copy the WETH address and paste in the 'deploy_contracts.js' WETH Address

Ensure Ganache is still running 

comment Part of the contract in the 'UniswapV2Router02.sol' will get run out of gas error.
from :// **** SWAP (supporting fee-on-transfer tokens) ****  to  // **** LIBRARY FUNCTIONS ****

comment Part of the contract in the 'IUniswapV2Router02.sol' will get run out of gas error.
from :'function swapExactTokensForTokensSupportingFeeOnTransferTokens' to  END

run truflle compile : to compile contracts

run truffle migrate : to deploy contract using Ganache network

You can add Ganache to the interface version by adding both Truffle config files to Project in interface.



NB:

1. No deploymeent code

2. smart contracts are in different repo and they use different versions.
3. two separate truffle project need to be created.

FRONT END DONE IN REACT

Steps:

Clone interface 

npm install --global yarn

yarn start

create folder name contract and copy contract json files for each contract

create a file to connect frontend to interact with contract using ethers or web3


Get mnemonic :
ganache-cli --mnemonic
Mnemonic:      humble spatial curtain life dice offer seat reunion consider bubble kangaroo cereal

Place mnemonic in truffle config file 

add build directory to truffle file : contracts_build_directory: './frontend/src/contracts'



![img1](https://user-images.githubusercontent.com/90293555/151400986-871197ca-3ccf-42db-bdd2-97a36f212f67.jpg)


![img2](https://user-images.githubusercontent.com/90293555/151401019-046fc935-ec0b-44da-9a74-00f278ca3d79.jpg)



![img3](https://user-images.githubusercontent.com/90293555/151401047-542b653d-8ec9-4fea-9f75-17de64c62391.jpg)


GANACHE INTERFACE:

![img4](https://user-images.githubusercontent.com/90293555/151401069-0f2e962c-7480-4313-8bf4-bc2b84a2c56c.jpg)



![img5](https://user-images.githubusercontent.com/90293555/151401093-22286bc3-f7b7-455e-91ad-f1cd6b904a8d.jpg)



![img6](https://user-images.githubusercontent.com/90293555/151401107-d7019987-cb9c-4464-b13a-5277f5d96d43.jpg)


GANACHE INTERFACE:

![img7](https://user-images.githubusercontent.com/90293555/151401148-c46e3f69-3af7-4ed7-9bee-34c1e731473b.jpg)





![img8](https://user-images.githubusercontent.com/90293555/151401571-0655e2d1-61eb-4731-919d-a138f7e8f9ac.jpg)

