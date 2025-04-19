const axios = require('axios');
const { ethers } = require('ethers');

async function resolveENS(name) {
  const provider = new ethers.JsonRpcProvider();
  return await provider.resolveName(name);
}

async function getGas(chain = "ethereum") {
  return { chain, gas: `${Math.floor(Math.random() * 30)} gwei` };
}

function walletSummary(address) {
  return {
    address,
    txCount: Math.floor(Math.random() * 100),
    usedProtocols: ['Uniswap', 'Aave'],
  };
}

module.exports = {
  resolveENS,
  getGas,
  walletSummary
};
