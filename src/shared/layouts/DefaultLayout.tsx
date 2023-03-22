import { KeplrPanel } from "shared/components/Wallet";
import { createContext } from "react";
import { Breakpoint } from "react-socks";
import { Flip, ToastContainer } from "react-toastify";

export const NavigationContext = createContext<boolean | null>(null);

export const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <main>
        {/* Top Bar */}
        <div className="container mx-auto p-4 flex justify-end">
          <KeplrPanel />
        </div>

        {/* Content */}
        <div className="">{children}</div>
      </main>
      <Breakpoint medium up>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={true}
          theme="dark"
        />
      </Breakpoint>
      <Breakpoint small down>
        <ToastContainer
          position={"bottom-left"}
          autoClose={false}
          hideProgressBar={true}
          closeOnClick={true}
          draggable={false}
          theme={"dark"}
          transition={Flip}
        />
      </Breakpoint>
    </>
  );
};

export default DefaultLayout;
