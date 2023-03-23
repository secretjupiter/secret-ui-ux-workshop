import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { SecretNetworkClient } from "secretjs";
import { SECRET_CHAIN_ID, SECRET_LCD } from "shared/utils/config";
import GetWalletModal from "./GetWalletModal";

const SecretjsContext = createContext(null);

const SecretjsContextProvider = ({ children }: any) => {
  const [secretjs, setSecretjs] = useState<SecretNetworkClient | null>(null);
  const [secretAddress, setSecretAddress] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function setupKeplr(
    setSecretjs: React.Dispatch<
      React.SetStateAction<SecretNetworkClient | null>
    >,
    setSecretAddress: React.Dispatch<React.SetStateAction<string>>
  ) {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    while (
      !window.keplr ||
      !window.getEnigmaUtils ||
      !window.getOfflineSignerOnlyAmino
    ) {
      await sleep(50);
    }

    await window.keplr.enable(SECRET_CHAIN_ID);
    window.keplr.defaultOptions = {
      sign: {
        preferNoSetFee: false,
        disableBalanceCheck: true,
      },
    };

    const keplrOfflineSigner =
      window.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID);
    const accounts = await keplrOfflineSigner.getAccounts();

    const secretAddress = accounts[0].address;

    const secretjs = new SecretNetworkClient({
      url: SECRET_LCD,
      chainId: SECRET_CHAIN_ID,
      wallet: keplrOfflineSigner,
      walletAddress: secretAddress,
      encryptionUtils: window.getEnigmaUtils(SECRET_CHAIN_ID),
    });

    setSecretAddress(secretAddress);
    setSecretjs(secretjs);
  }

  async function connectWallet() {
    if (!window.keplr) {
      setIsModalOpen(true);
      document.body.classList.add("overflow-hidden");
    } else {
      await setupKeplr(setSecretjs, setSecretAddress);
      localStorage.setItem("keplrAutoConnect", "true");
    }
  }

  function disconnectWallet() {
    // reset secretjs and secretAddress
    setSecretAddress("");
    setSecretjs(null);

    // disable auto connect
    localStorage.setItem("keplrAutoConnect", "false");

    // Toast for success
    toast.success("Wallet disconnected!");
  }

  return (
    <SecretjsContext.Provider
      value={{
        secretjs,
        setSecretjs,
        secretAddress,
        setSecretAddress,
        connectWallet,
        disconnectWallet,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {/* <GetWalletModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          document.body.classList.remove("overflow-hidden");
        }}
      /> */}
      {children}
    </SecretjsContext.Provider>
  );
};

async function setKeplrViewingKey(token: string) {
  if (!window.keplr) {
    console.error("Keplr not present");
    return;
  }

  await window.keplr.suggestToken(SECRET_CHAIN_ID, token);
}

async function getKeplrViewingKey(token: string): Promise<string | null> {
  if (!window.keplr) {
    console.error("Keplr not present");
    return null;
  }

  try {
    return await window.keplr.getSecret20ViewingKey(SECRET_CHAIN_ID, token);
  } catch (e) {
    return null;
  }
}

export {
  SecretjsContext,
  SecretjsContextProvider,
  setKeplrViewingKey,
  getKeplrViewingKey,
};
