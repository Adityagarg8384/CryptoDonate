require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("accounts","Print the list of accounts", async (taskArgs, hre)=>{
  const accounts= await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

// const Privatekey= process.env.NEXT_PUBLIC_PRIVATE_KEY;
console.log("https://eth-sepolia.g.alchemy.com/v2/gnwm04ix_mQTmjxbBIia62RuKQejyJjk");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/gnwm04ix_mQTmjxbBIia62RuKQejyJjk",
      accounts:["6b9cdcf98429e92f39480918d56297ce61d50b146888dff83fba8979a0a08c3d"],
    }
  }
};
