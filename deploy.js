#!/usr/bin/env node
const { PinataSDK } = require("pinata");
const fs = require("fs");
const path = require("path");

async function deploy() {
  try {
    // Read JWT from credentials
    const credsPath = path.join(process.env.HOME, ".config/pinata/credentials.json");
    const creds = JSON.parse(fs.readFileSync(credsPath, "utf8"));
    
    if (!creds.jwt) {
      console.error("Error: No JWT found in credentials file");
      process.exit(1);
    }

    // Initialize Pinata SDK
    const pinata = new PinataSDK({
      pinataJwt: creds.jwt,
      pinataGateway: "gateway.pinata.cloud",
    });

    console.log("Uploading kyro-services landing page to Pinata...\n");

    // Read the HTML file
    const htmlPath = path.join(__dirname, "index.html");
    const file = new File(
      [fs.readFileSync(htmlPath)],
      "index.html",
      { type: "text/html" }
    );

    // Upload to Pinata
    const upload = await pinata.upload.public.file(file);

    console.log("✅ Upload successful!\n");
    console.log("CID:", upload.cid);
    console.log("\nPreview URLs:");
    console.log(`  https://ipfs.io/ipfs/${upload.cid}`);
    console.log(`  https://cloudflare-ipfs.com/ipfs/${upload.cid}`);
    console.log(`  https://${upload.cid}.ipfs.dweb.link`);
    console.log("\nNext step: Set ENS contenthash for kyro-agent.eth");
    console.log(`  Contenthash: ipfs://${upload.cid}`);

  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

deploy();
