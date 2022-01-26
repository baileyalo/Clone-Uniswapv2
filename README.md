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


Contract created: 0xa46603800e2edee379753042b21cc388041e7fc6 ---Migration core

Contract created: 0xbf5b8ed247d6365ad18a155621185eb95f5115e8---migration periphery

Contract created: 0x7ecd310f282ed005a3f87dcbb5455a6f6295d060---WETH 

Contract created: 0x5db21465904704d486da0933aeb2d6b49fd8e973 --- UniswapV2Router


NB:

1. No deploymeent code

2. smart contracts are in different repo and they use different versions.
3. two separate truffle project need to be created.

FRONT END DONE IN REACT

Steps:

npx create-react-app frontend





![img1](https://user-images.githubusercontent.com/90293555/151086332-5919dce4-66a3-40c0-aed9-d918ca21ce4d.jpg)



![img2](https://user-images.githubusercontent.com/90293555/151086342-427013d1-4810-40d6-8ecb-74c2633a1e96.jpg)


![img3](https://user-images.githubusercontent.com/90293555/151086350-194e0e6e-baea-48b1-a6b6-0e3e09f58c64.jpg)


![Gimg1](https://user-images.githubusercontent.com/90293555/151086359-f5100ec4-32ea-4901-bb83-fc9002c306e5.jpg)


![Gimg2](https://user-images.githubusercontent.com/90293555/151086377-73d937c6-1141-42d6-8ec7-3a8bcbb09959.jpg)


![Gimg3](https://user-images.githubusercontent.com/90293555/151086392-36b169de-29ab-44b0-9167-34442cd05f24.jpg)


