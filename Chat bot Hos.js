import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import ChatUI from "./ChatUI";

require("@solana/wallet-adapter-react-ui/styles.css");

const App = () => {
  const endpoint = "https://api.mainnet-beta.solana.com";
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h2>Health OS Healing Assistant</h2>
            <WalletMultiButton />
            <ChatUI />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;