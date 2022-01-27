const Factory = artifacts.require('UniswapV2Factory.sol');
const TokenX = artifacts.require('TokenX.sol');
const TokenY = artifacts.require('TokenY.sol');

module.exports = async function (deployer, _network, account) {
  await deployer.deploy(Factory, account[0]);
  const factory = await Factory.deployed();
  
  await deployer.deploy(TokenX);
  await deployer.deploy(TokenY);
  const tokenX = await TokenX.deployed();
  const tokenY = await TokenY.deployed();
  await factory.createPair(tokenX.address, tokenY.address);
};