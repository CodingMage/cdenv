import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { Account } from "../../components/Icons";
import { signUpData } from "../../data/signup";
import Link from "next/link";
import FormField from "../../components/FormField/formField";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../queries/queryHooks/createUser";
import { BounceLoader } from "react-spinners";
import { removeCookies } from "cookies-next";
import { useCheckViewport } from "../../hooks/useViewport";

const SignUpContainer = styled.main`
  grid-template-columns: 300px 370px;
  ${tw`max-w-2xl h-[632px] w-full my-0 mx-auto rounded-[12px] grid mt-10 break-mobile:(grid-cols-1 )`}
`;

const Left = tw.div`w-full bg-[#F4F4F4] rounded-l-[12px] pl-[38px] pr-[35.25px] break-mobile:(hidden)`;
const Right = tw.form`w-full bg-white rounded-r-[12px] flex px-[62.5px] pt-[41px] pb-[66px] justify-center`;

const LeftItem = tw.div`flex flex-col max-w-[227px] w-full`;
const LeftItemHeader = tw.div`flex justify-start items-center gap-3 text-dark-blue-text text-[20px] leading-6 font-normal`;
const LeftItemNote = tw.div`text-left max-w-[226.74px] w-full text-[#8E8E8E] text-xs leading-[14px] mt-4`;
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const { mutate, isLoading } = useCreateUser();

  const onSubmit = (data) => {
    let user = {
      user: data,
    };
    // console.log(user);
    mutate(user);
  };
  useEffect(() => {
    removeCookies("token");
  }, []);
  const { isValid: isValidViewport } = useCheckViewport(685);

  return (
    <div tw="bg-[#283A8F] w-full min-h-screen  break-mobile:(flex flex-col justify-center items-center bg-white)">
      <nav tw="flex justify-around  pt-[30px] items-center break-mobile:(justify-center)">
        <Link href="/" passHref={true}>
          <div tw="cursor-pointer">
            <Image
              src={
                isValidViewport
                  ? "/assets/img/cdEnvlogoSignin.png"
                  : "/assets/svg/cdEnv_big_logo.svg"
              }
              width={isValidViewport ? "67.17" : "88"}
              height={isValidViewport ? "20.61" : "27"}
              alt="cdenv logo"
            />
          </div>
        </Link>

        <div>
          <p tw="text-white text-[14px] leading-4 break-mobile:(hidden)">
            Already have an account?{" "}
            <Link href="/authentication/signin" passHref={true}>
              <span tw="text-light-blue-bg cursor-pointer"> Log in</span>
            </Link>
          </p>
        </div>
      </nav>

      <header
        tw="text-white text-[22px] leading-6 text-center pt-11 font-normal 
        break-mobile:(text-[16px] leading-[20px] max-w-[245px] break-mobile:(text-[#8E8E8E]))"
      >
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

        <Right onSubmit={handleSubmit(onSubmit)}>
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
                tw`w-full  h-12 flex gap-2 justify-center cursor-pointer items-center p-4 bg-[#F4F4F4] mt-[15px] rounded-md border-0`,
                isValid && tw`bg-dark-blue-bg text-light-blue-bg`,
              ]}
            >
              Create account
              <BounceLoader size={23} color={"#01E4F0"} loading={isLoading} />
            </button>
            <div tw="text-[14px] leading-[16px] text-[#8E8E8E] mt-6">
              Already have an account?{" "}
              <Link href="/authentication/signin" passHref={true}>
                <span tw="text-light-blue-bg cursor-pointer">Log in</span>
              </Link>
            </div>
          </div>
        </Right>
      </SignUpContainer>

      <div tw="flex pb-6  pt-3.5 justify-center items-center text-white text-sm leading-4 break-mobile:(text-[#8E8E8E]) ">
        <span>© Copyright {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

export default Signup;
