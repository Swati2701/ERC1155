/* eslint-disable */

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);

    console.log('Account balance:', (await deployer.getBalance()).toString());

     const TokenCreationERC1155 = await ethers.getContractFactory("TokenCreationERC1155")
      
        // Start deployment, returning a promise that resolves to a contract object
     const tokenCreation = await TokenCreationERC1155.deploy()
     console.log("Contract deployed to address:", tokenCreation.address)
}
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})