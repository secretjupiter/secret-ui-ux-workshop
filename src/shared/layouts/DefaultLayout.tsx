import { KeplrPanel } from "shared/components/Keplr";
import { createContext } from "react";
import { Breakpoint } from "react-socks";
import { Flip, ToastContainer } from "react-toastify";

export const NavigationContext = createContext<boolean | null>(null);

export const DefaultLayout = ({ children }: any) => {

  return (
    <>
      <main className="flex flex-col min-h-screen flex-1 lg:ml-[17rem]">
        <div className="flex-1">
          <div className="flex items-center gap-4 p-4">
            <div className="flex-1 sm:flex-initial sm:flex sm:justify-end">
              <KeplrPanel />
            </div>
          </div>

          <div className="lg:mr-[17rem]">{children}</div>
        </div>
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
