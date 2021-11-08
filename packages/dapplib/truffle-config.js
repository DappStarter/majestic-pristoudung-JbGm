require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind atom harvest option bridge twin'; 
let testAccounts = [
"0x13c9fc151822ca71c66cc46e6de85ec2094a7d6cc7b6cde79e80947d7d1c8344",
"0xa011f6bb380b1fbb6d7ca823b06d3865cba94cde4b696f06fcd5e1dd19cfa07f",
"0x8a63f4cb799fab6b1247d73202a1f1bb13eb0c08c93b514a17aabea3951b71ee",
"0x29084d272396536b1ebd9c622da8578e659c6b01785948a76a35aca0d5f77684",
"0x638aefef5332b9deb019ad9d7d4b89b0564ac683324882cb4277b1425c5bd747",
"0x6fdd412ddca9419c8be4730e013591cf4ffef716ed9d7bec8ead23ef0cb951d2",
"0xbaf14ae4ec29f9e0fead6e7a2fcfc3ebcc3b4b8244d016530f7b94024746a667",
"0x5a56ef281dc8a2cd4cc40c58bf458bd669f910f36111eac618f324cc2e2f0235",
"0x14d33f2107822503cbc66930f4c970a0934928d4fb8eb520ba42afcdd03edfea",
"0x92d3ae05dbd56dc8f64987fd2a08de5f6f83ae35d2f5f9702df507034f5f7d80"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

