import React from "react";
import tw, { styled } from "twin.macro";
import { HelpIcon } from "../Icons";

function Footer() {
  return (
    <footer tw="flex justify-around items-center p-2.5 pb-6 ">
      <div tw="flex gap-1 items-center cursor-pointer">
        <HelpIcon />
        <span tw="text-dark-blue-bg  font-normal text-[14px] leading-[16px]">
          FAQs
        </span>
      </div>
      <div tw="text-[#8E8E8E]  font-normal text-[14px] leading-[16px] cursor-pointer">
        © Copyright 2021.
      </div>
    </footer>
  );
}

export default Footer;

// fixed w-full bottom-0 bg-white
