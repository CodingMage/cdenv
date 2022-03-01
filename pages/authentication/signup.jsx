import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { Account } from "../../components/Icons";
import { signUpData } from "../../data/signup";
import Link from "next/link";
import FormField from "../../components/FormField/formField";
import { useForm } from "react-hook-form";

const SignUpContainer = styled.main`
  grid-template-columns: 300px 370px;
  ${tw`max-w-2xl h-[632px] w-full my-0 mx-auto rounded-[12px] grid mt-10 `}
`;

const Left = tw.div`w-full bg-[#F4F4F4] rounded-l-[12px] pl-[38px] pr-[35.25px] `;
const Right = tw.div`w-full bg-white rounded-r-[12px] flex px-[62.5px] pt-[41px] pb-[66px]`;

const LeftItem = tw.div`flex flex-col max-w-[227px] w-full`;
const LeftItemHeader = tw.div`flex justify-start items-center gap-3 text-dark-blue-text text-[20px] leading-6 font-normal`;
const LeftItemNote = tw.div`text-left max-w-[226.74px] w-full text-[#8E8E8E] text-xs leading-[14px] mt-4`;
function Signup() {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <div tw="bg-[#283A8F] w-full min-h-screen ">
      <nav tw="flex justify-around  pt-[30px] items-center">
        <Link href="/" passHref={true}>
          <div tw="cursor-pointer">
            <Image
              src="/assets/svg/cdEnv_big_logo.svg"
              width="88"
              height="27"
              alt="cdenv logo"
            />
          </div>
        </Link>

        <div>
          <p tw="text-white text-[14px] leading-4">
            Already have an account?{" "}
            <Link href="/authentication/signin" passHref={true}>
              <span tw="text-light-blue-bg cursor-pointer"> Log in</span>
            </Link>
          </p>
        </div>
      </nav>

      <header tw="text-white text-[22px] leading-6 text-center pt-11 font-normal">
        Sign up for free to experience cdEnv today.
      </header>

      <SignUpContainer>
        <Left>
          <div tw="mt-[58.5px] flex flex-col gap-16">
            {signUpData.map((item) => (
              <div key={item.title}>
                <LeftItem>
                  <LeftItemHeader>
                    {item.icon}
                    <div>{item.title}</div>
                  </LeftItemHeader>

                  <LeftItemNote>{item.notes}</LeftItemNote>
                </LeftItem>
              </div>
            ))}
          </div>
        </Left>

        <Right>
          <div tw="flex justify-center gap-[15px] flex-col items-center">
            <FormField
              label="Username"
              title="Username"
              type="text"
              name="username"
              placeholder="Username"
              full={true}
              required={true}
              register={register}
              errors={errors}
            />

            <FormField
              label="Email address"
              title="Email address"
              type="email"
              name="email"
              placeholder="Email address"
              full={true}
              required={true}
              register={register}
              errors={errors}
            />

            <FormField
              label="Password"
              title="Password"
              type="password"
              name="password"
              placeholder="Password"
              full={true}
              required={true}
              register={register}
              errors={errors}
              minLength={8}
            />

            <button
              // disabled={enableBtn}
              disabled={!isValid}
              css={[
                tw`w-full  h-12 flex justify-center cursor-pointer items-center p-4 bg-[#F4F4F4] mt-[15px] rounded-md border-0`,
                isValid && tw`bg-dark-blue-bg text-light-blue-bg`,
              ]}
            >
              Create account
            </button>
          </div>
        </Right>
      </SignUpContainer>
    </div>
  );
}

export default Signup;
