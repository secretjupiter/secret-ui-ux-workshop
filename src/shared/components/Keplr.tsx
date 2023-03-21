import { useContext, useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faWallet } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import GetWalletModal from "shared/context/GetWalletModal";
import { SecretjsContext } from "../context/SecretjsContext";
import { useHoverOutside } from "shared/utils/useHoverOutside";

export function KeplrPanel() {
  const {
    secretjs,
    secretAddress,
    connectWallet,
    disconnectWallet,
    isModalOpen,
    setIsModalOpen,
  } = useContext(SecretjsContext);

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("keplrAutoConnect") === "true") {
      connectWallet();
    }
  }, []);

  const keplrRef = useRef();

  useHoverOutside(keplrRef, () => setIsMenuVisible(false));

  const KeplrMenu = () => {
    return (
      <div className="absolute pt-2 right-4 z-40 top-[3.7rem] right-[0rem]">
        <div className="bg-white border text-xs border-neutral-200 p-4 w-auto rounded-lg">
          <CopyToClipboard
            text={secretAddress}
            onCopy={() => {
              toast.success("Address copied to clipboard!");
            }}
          >
            <button className="px-2 py-1 mb-2 rounded-lg flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-200 transition-colors">
              <span>
                {secretAddress.slice(0, 14) + "..." + secretAddress.slice(-14)}
              </span>
              <FontAwesomeIcon
                icon={faCopy}
                className="block text-neutral-500 transition-colors"
              />
            </button>
          </CopyToClipboard>
          <div className="text-right">
            <button
              onClick={disconnectWallet}
              className="font-semibold px-3 py-1.5 rounded-md text-white bg-red-500 hover:bg-red-400 hover:text-white transition-colors cursor-pointer"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AnimatedDot = () => {
    return (
      <span className="flex relative h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-1/2"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
    );
  };

  const Content = () => {
    return (
      <>
        <div className="flex items-center font-semibold text-sm">
          <div className="flex items-center">
            {/* Animated Dot */}
            {secretAddress.length > 0 ? (
              <span className="mr-3">
                <AnimatedDot />
              </span>
            ) : null}
            {/* Wallet Icon */}
            <FontAwesomeIcon icon={faWallet} className="mr-2" />
            {/* Connect Wallet || Connected */}
            <span className="flex-1">
              {secretAddress.length > 0 ? "Connected" : "Connect Wallet"}
            </span>
          </div>
        </div>
      </>
    );
  };

  if (secretjs) {
    return (
      <>
        <div ref={keplrRef}>
          {isMenuVisible ? <KeplrMenu /> : null}
          <div
            className="w-full sm:w-auto rounded-lg px-4 py-3 bg-white border border-neutral-200 select-none cursor-pointer"
            onMouseOver={() => setIsMenuVisible(true)}
            ref={keplrRef}
          >
            <Content />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <GetWalletModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            document.body.classList.remove("overflow-hidden");
          }}
        />
        <button
          id="keplr-button"
          onClick={() => connectWallet()}
          className="w-full sm:w-auto rounded-lg px-4 py-3 bg-white border border-neutral-200 hover:bg-neutral-100 active:bg-neutral-500 transition-colors select-none"
        >
          <Content />
        </button>
      </>
    );
  }
}
