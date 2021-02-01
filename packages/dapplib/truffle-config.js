require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name remember night equip hockey end army giant'; 
let testAccounts = [
"0x1430fcb91e0c32460da7eb1233013d2e6bdfea4f6d63e9b71128145427f1673d",
"0x43f75949395531312e7a9698296022d4b78f82e5dda752c6b8b72ed6f82c2c80",
"0x99136830a767722ab87b7060d28a2f9e1fc0231ab6e1b3b324baae51f640afc8",
"0x71b3aa08f1fd6821be6fff4310d43c3e88e3e32e087f294ff5106229396bfb86",
"0x8aec8a00522d18cfbf0676131fa99660fb55b9fff5d7b3ebda9c9b75060cbbe4",
"0x3e8c104cd053a74fe64baa5e459ee90daba5c0917f3570cb91c242b8f32e7f1f",
"0x5848fd28d02b967d3d9c29314b4546750753b37500e95f7969a4935702ead164",
"0x75856dcd38ef90b31e0e70515883fb2cee54e7a270941d8b72a744f45d809d8c",
"0x6c2eb68001ba5be2a81cd548240406e9619a6094c71b4001584c79e30b0fd43a",
"0x683e23f8940404852a35197ed216d875c4fe4a003d98d7d1b85ad77ee4be83fc"
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
            version: '^0.5.11'
        }
    }
};
