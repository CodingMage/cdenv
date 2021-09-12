import tw, { css, styled } from "twin.macro";
import Btn from "../component/Buttons/Btn";
import Image from "next/image";

const Hero = styled.div`
  background: linear-gradient(0deg, #283a8f, #283a8f);
`;

const Nav = tw.div`
flex justify-between items-center px-12 p-7
`;
const Left = styled.div`
  padding-left: 50.65px;
  ${tw`pt-32  flex justify-center items-center flex-col`}
`;

const HostBtn = tw.button`flex justify-center items-center px-[30px] py-[25px] h-[23px] bg-[#01E4F0] text-black border-solid border-0 rounded-md text-sm cursor-pointer`;
export default function Home() {
  return (
    <div>
      <Hero>
        <Nav>
          <Image src="/assets/svg/cdEnv_logo.svg" width="88" height="27" />
          <div tw="flex items-center justify-center gap-8">
            <Btn type="transparent" link="#">
              <p tw="text-borderBlue">Log in</p>
            </Btn>
            <Btn type="transparent" link="#">
              <p tw="text-borderBlue">Sign Up</p>
            </Btn>
          </div>
        </Nav>

        <div tw="grid grid-cols-2 pb-[157.06px]">
          <Left>
            <div css={{ maxWidth: "587.7px" }}>
              <div
                css={[tw`text-5xl text-white mb-6`, { lineHeight: "121.9%" }]}
              >
                Securely <span tw="text-[#01E4F0]"> store</span> &{" "}
                <span tw="text-[#01E4F0]">access</span> API tokens, passwords
                keys and more{" "}
              </div>

              <div tw="text-xl font-light text-white leading-snug mb-[50px]">
                cdEnv is a self-hostable and secured system for storing and
                accessing keys and variables via HTTP API and CLI.
              </div>

              <HostBtn>Host environment</HostBtn>
            </div>
          </Left>
          <div tw="pt-[98.94px] flex justify-end pr-14 ">
            <Image
              src="/assets/svg/Hero_Image.svg"
              width="542"
              height="542"
              alt="Hero Image"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
}
