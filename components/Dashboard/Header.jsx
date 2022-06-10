import React from "react";
import tw, { styled } from "twin.macro";
import { useCheckViewport } from "../../hooks/useViewport";
import Btn from "../Buttons/Btn";
import { CdenvWelcomIcon, CEnv, cEnv, CloseIcon, SearchIcon } from "../Icons";

const Welcome = styled.header`
  padding: 38px 10px 38px 10px;
  ${({ dismiss }) =>
    dismiss === true
      ? tw`hidden`
      : tw`flex justify-around items-center h-[120px] bg-dark-blue-bg`}
`;
const WelcomeLeft = tw.div`max-w-[394.12px] w-full flex gap-[34px] items-center`;
const WelcomeLeftNote = tw.div` flex flex-col gap-1`;
const WelcomeLeftNoteTitle = tw.div` text-light-blue-bg font-medium text-xl break-mobile:(text-[16px] leading-[18px])`;
const WelcomeLeftNoteSubTitle = tw.div` text-white font-normal text-[14px] leading-[16px] break-mobile:(text-[16px] leading-[18px])`;
const WelcomeRightDismissBtn = tw.button` text-white border border-solid border-white rounded-md w-20 h-12 font-normal text-[14px] leading-[16px] flex justify-center items-center break-mobile:(hidden)`;

//Main header

const MainHeader = styled.header`
  padding: 21px 10px 21px 10px;
  ${({ dismiss }) =>
    dismiss === true
      ? tw`flex justify-around items-center gap-4 h-[90px] bg-[#F4F4F4]`
      : tw`hidden`}
`;

const SearchInputShell = tw.div` max-w-[660px] w-full h-12 rounded bg-white  flex`;

const SearchInput = styled.input`
  outline: none !important;
  ${tw` bg-transparent w-full p-3 outline-[0] placeholder-[#CDCDCD]`};
`;

function Header({ dismissWelcome, setDismissWelcome }) {
  const { isValid: isValidViewport } = useCheckViewport(685);

  return (
    <section>
      {!dismissWelcome && (
        <Welcome dismiss={dismissWelcome}>
          <WelcomeLeft>
            <div>
              {isValidViewport ? (
                <CdenvWelcomIcon width="22px" height="34px" />
              ) : (
                <CdenvWelcomIcon width="24px" height="36px" />
              )}
            </div>
            <WelcomeLeftNote>
              <WelcomeLeftNoteTitle>Welcome to cdEnv</WelcomeLeftNoteTitle>
              <WelcomeLeftNoteSubTitle>
                Now that your account has been created, get started.
              </WelcomeLeftNoteSubTitle>
            </WelcomeLeftNote>
          </WelcomeLeft>
          <WelcomeRightDismissBtn
            onClick={() => setDismissWelcome(!dismissWelcome)}
          >
            Dismiss
          </WelcomeRightDismissBtn>
          <div
            tw="hidden break-mobile:(block cursor-pointer) "
            onClick={() => setDismissWelcome(!dismissWelcome)}
          >
            <CloseIcon />
          </div>
        </Welcome>
      )}
      {dismissWelcome && (
        <MainHeader dismiss={dismissWelcome}>
          <SearchInputShell>
            <div tw="p-3 cursor-pointer">
              <SearchIcon />
            </div>
            <SearchInput placeholder="Search by environment, keys, value ..." />
          </SearchInputShell>
          <Btn type="0" link="#">
            <CEnv />
            <span tw="text-[#8E8E8E]">Create new environment</span>
          </Btn>
        </MainHeader>
      )}
    </section>
  );
}

export default Header;
