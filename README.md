Clone V2 core from uniswap

Clone periphery from uniswap 

Create Token X and Token Y simple ERC20 contract

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

check truffle config file development port : 7545

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

Change solidity version to match 

create WETH contract *uniswap does not use ether but only use wrapped ether for router contract*

Find address for Wrapped Ether and copy code 

Copy the Factory contract address and paste in the 'deploy_contracts.js' Factory Address

Copy the WETH address and paste in the 'deploy_contracts.js' WETH Address

Ensure Ganache is still running 

COMMENT Part of the contract in the 'UniswapV2Router02.sol' will get run out of gas error.
from :// **** SWAP (supporting fee-on-transfer tokens) ****  to  // **** LIBRARY FUNCTIONS ****

COMMENT Part of the contract in the 'IUniswapV2Router02.sol' will get run out of gas error.
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

Clone interface repo

npm install --global yarn


Update the router address using the deployed router contract address

Generate the hash init using the Bytecode of UniswapV2Library contract 

//  6be5c1f5c0ede0c0a1b7698c31428bbf4078205ffcfdb8e488d396a0cb9fc9c8
// The code in the route
// calculates the CREATE2 address for a pair without making any external calls
    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = address(uint(keccak256(abi.encodePacked(
                hex'ff',
                factory,
                keccak256(abi.encodePacked(token0, token1)),
                hex'6be5c1f5c0ede0c0a1b7698c31428bbf4078205ffcfdb8e488d396a0cb9fc9c8' //init code hash
                //hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' //init code hash
            ))));
    }

yarn start


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

CONVERY BYTECODE FOR "UniswapV2Pair" to Hash:


![img9](https://user-images.githubusercontent.com/90293555/151403196-b87f9e09-b165-4d42-8bb3-00e50aa2346f.jpg)



