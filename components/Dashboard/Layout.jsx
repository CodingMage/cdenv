import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";
import tw, { styled } from "twin.macro";
import { CEnv } from "../Icons";

function Layout({ children }) {
  const [dismissWelcome, setDismissWelcome] = useState(false);
  const CreateBtn = styled.button`
    outline: none !important;
    padding: 10px 15px 13px;
    ${tw` bg-transparent border rounded-[5px] border-solid border-[#F4F4F4] max-w-[212px] gap-1.5 w-full flex flex-col justify-center items-center`};
  `;
  return (
    <main tw="flex flex-col h-screen bg-white">
      <header>
        <Navbar />
        <Header
          dismissWelcome={dismissWelcome}
          setDismissWelcome={setDismissWelcome}
        />
      </header>

      <section tw="w-full max-h-full h-full bg-transparent ">
        {dismissWelcome ? (
          <main>{children}</main>
        ) : (
          <div tw="w-full h-full flex flex-col justify-center items-center gap-8">
            <CreateBtn>
              <div>
                <CEnv />
              </div>
              <span tw="text-[#8E8E8E]">Create new environment</span>
            </CreateBtn>

            <div tw="max-w-[373px] text-center text-[#8E8E8E] text-[14px] leading-[16px]">
              Create virtual environment to store your keys and values privately
              during project development.
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
