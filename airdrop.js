const solana = require("@solana/web3.js"); // Web3.js library of Solana

const a = async () => {
  const connection = new solana.Connection(
    solana.clusterApiUrl("devnet"),
    "confirmed"
  ); //requesting some solana tokens from devnet
  const publicKey = solana.Keypair.generate().publicKey; // Generate Public Key
  console.log(publicKey);

  let tokenAmount = await connection.solana.getBalance(publicKey);
  console.log("amount: ${tokenAmount}`");

  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    2 * solana.LAMPORTS_PER_SOL
  ); // Requesting 2 Sol

  //await connection solana.sendAndConfirmTransaction(airdropSignature); //Recieve 2 Sol

  tokenAmount = await connection.solana.getBalance(publicKey);
  console.log(`amount: ${tokenAmount}`);
};

//Why not working IDK