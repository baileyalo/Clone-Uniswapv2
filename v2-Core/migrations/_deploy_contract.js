const Factory = artifacts.require('UniswapV2newFactory.sol');
const TokenA = artifacts.require('TokenA.sol');
const TokenB = artifacts.require('TokenB.sol');

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  await deployer.deploy(TokenA);
  await deployer.deploy(TokenB);
  
  const tokenA = await TokenA.deployed();
  const tokenB = await TokenB.deployed();
  await factory.createPair(tokenA.address, tokenB.address);
};