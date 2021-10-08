import tw, { css, styled } from "twin.macro";
import Btn from "../component/Buttons/Btn";
import Image from "next/image";
import AboutCard from "../component/AboutCard";
import Link from "next/link";

const about = [
  {
    scr: "/assets/svg/Hostable.svg",
    title: "Self hostable",
    description:
      "cdEnv is a self-hostable and secured system for storing and acessing keys and variables via HTTP API and CLI.",
  },
  {
    scr: "/assets/svg/shield.svg",
    title: "Secure",
    description:
      "cdEnv is a self-hostable and secured system for storing and acessing keys and variables via HTTP API and CLI.",
  },
  {
    scr: "/assets/svg/Accessible.svg",
    title: "Accessible",
    description:
      "cdEnv is a self-hostable and secured system for storing and acessing keys and variables via HTTP API and CLI.",
  },
  {
    scr: "/assets/svg/deploy.svg",
    title: "Easy to deploy",
    description:
      "cdEnv is a self-hostable and secured system for storing and acessing keys and variables via HTTP API and CLI.",
  },
];
const Hero = styled.div`
  background: linear-gradient(0deg, #283a8f, #283a8f);
`;

const Nav = tw.div`
flex justify-between items-center px-12 p-7
`;
const Footer = tw.div`
flex justify-between items-center px-[57.55px] py-[36.5px] bg-white text-[#8E8E8E]
`;
const Left = styled.div`
  padding-left: 50.65px;
  ${tw`pt-32  flex justify-center items-center flex-col`}
`;

const HostBtn = tw.button`flex justify-center items-center px-[30px] py-[25px] h-[23px] bg-[#01E4F0] text-black border-solid border-0 rounded-md text-sm cursor-pointer`;
export default function Home() {
  return (
    <div className="home">
      <Hero>
        <Nav>
          <Image src="/assets/svg/cdEnv_logo.svg" width="88" height="27" />
          <div tw="flex items-center justify-center gap-8">
            <Btn type="transparent" link="/authentication/signin">
              <p tw="text-borderBlue">Log in</p>
            </Btn>
            <Btn type="transparent" link="/authentication/signup">
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

      <div tw="bg-white pb-[173px]">
        <div tw="flex justify-center items-center flex-col pt-[70px]">
          <div tw="text-[#1A254A] font-bold text-[50px] pb-4">
            What is cdEnv?
          </div>
          <div tw="text-[#8E8E8E] text-[20px] leading-[26px] max-w-[541.99px] text-center ">
            cdEnv is a self-hostable and secured system for storing and acessing
            keys and variables via HTTP API and CLI.
          </div>
        </div>
        <div tw="grid grid-cols-2 place-items-center gap-x-[50px] gap-y-10 max-w-[1114px] my-0 mx-auto mt-[100px] ">
          {about.map((item, idx) => (
            <AboutCard
              key={`AboutCard ${idx}`}
              src={item.scr}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div tw="bg-[#283A8F]">
        <div tw="flex justify-center items-center flex-col pt-[70px]">
          <div tw="text-[#01E4F0] font-bold text-[50px] pb-4">Learn more</div>
          <div tw="text-white text-[20px] leading-[26px] max-w-[541.99px] text-center ">
            Access cdEnv documentation on Github to know all about the project
            and how to better us it.
          </div>
        </div>
        <div tw="flex justify-center items-center mt-[77px] pb-[161.44px]">
          <Image
            src="/assets/img/cdenv1.png"
            width="908"
            height="522"
            objectFit="contain"
          />
        </div>
      </div>

      <Footer>
        <Image src="/assets/img/cdEnvLogo.png" width="88" height="27" />
        <div tw="flex items-center justify-center gap-[60px] ">
          <Link tw="text-[#8E8E8E] text-[16px] leading-[18px]" href="">
            <a> Host environment</a>
          </Link>
          <Link tw="text-[#8E8E8E] text-[16px] leading-[18px]" href="">
            <a> FAQs</a>
          </Link>
          <Link tw="text-[#8E8E8E] text-[16px] leading-[18px]" href="">
            <a> Documentation</a>
          </Link>
        </div>
        <Link tw="text-[#8E8E8E] text-[16px] leading-[18px]" href="">
          <a> © Copyright 2021.</a>
        </Link>
      </Footer>
    </div>
  );
}
