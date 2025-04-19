#!/usr/bin/env node

const { resolveENS, getGas, walletSummary } = require('./index');
const args = process.argv.slice(2);

(async () => {
  const command = args[0];
  const input = args[1];

  if (command === 'ens') {
    const res = await resolveENS(input);
    console.log(`Resolved address: ${res}`);
  } else if (command === 'gas') {
    const gas = await getGas(input || 'ethereum');
    console.log(`Gas on ${gas.chain}: ${gas.gas}`);
  } else if (command === 'wallet') {
    const data = walletSummary(input);
    console.log(`Tx count: ${data.txCount}, Protocols: ${data.usedProtocols.join(', ')}`);
  } else {
    console.log('Usage:\n tea-tools ens vitalik.eth\n tea-tools gas arbitrum\n tea-tools wallet 0xabc...');
  }
})();
