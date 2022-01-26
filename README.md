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

run ganache-cli

run truflle compile : to compile contracts

run truffle migrate : to deploy contract using Ganache network

NB:
no deploymeent code
smart contracts are in different repo and they use different versions
two separate truffle project




