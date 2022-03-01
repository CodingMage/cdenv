import tw from "twin.macro";
import Image from "next/image";
import FormField from "../../components/FormField/formField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLoginUser } from "../../queries/queryHooks/signinUser";

import { BounceLoader } from "react-spinners";
import { getCookie } from "cookies-next";

const SignInForm = tw.form`flex justify-center flex-col w-full max-w-[386px] bg-white rounded-xl`;
function SignIn() {
  const [enableBtn, setEnableBtn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({ mode: "onChange" });
  const { mutate, isLoading } = useLoginUser();

  const onSubmit = (data) => {
    let user = {
      user: data,
    };
    mutate(user);
  };
  return (
    <div tw="bg-[#283A8F] w-full min-h-screen ">
      <Link href="/" passHref={true}>
        <div tw="flex justify-center pt-[113px] mb-[80px] cursor-pointer">
          <Image
            src="/assets/svg/cdEnv_big_logo.svg"
            width="120"
            height="36.82"
            alt="cdenv logo"
          />
        </div>
      </Link>
      <div tw="flex w-full justify-center">
        <SignInForm onSubmit={handleSubmit(onSubmit)}>
          <div
            onClick={() => console.log(getCookie("token"))}
            tw="flex w-full pt-[20px]  pr-[25px] justify-end"
          >
            <Image alt="" src="/assets/svg/close.svg" height="24" width="24" />
          </div>

          <div tw="flex justify-center text-[#1A254A] text-[22px] leading-[25px] font-normal pb-10">
            Log in to your account
          </div>
          <div tw="flex justify-center gap-[15px] flex-col items-center">
            <FormField
              label="Email address"
              title="Email address"
              type="email"
              name="email"
              placeholder="Email address"
              full="300px"
              required={true}
              register={register}
              errors={errors}
              // value={context.inputValue.email}
              // action={context.inputChange}
            />
            <FormField
              label="Password"
              title="Password"
              type="password"
              name="password"
              placeholder="Password"
              full="300px"
              required={true}
              register={register}
              errors={errors}
              minLength={8}

              // value={context.inputValue.email}
              // action={context.inputChange}
            />
            <button
              // disabled={enableBtn}
              disabled={!isValid}
              css={[
                tw`w-full max-w-[300px] gap-2 flex justify-center cursor-pointer items-center p-4 bg-[#F4F4F4] mt-[15px] rounded-md border-0`,
                isValid && tw`bg-dark-blue-bg text-light-blue-bg`,
              ]}
            >
              Log in
              <BounceLoader size={23} color={"#01E4F0"} loading={isLoading} />
            </button>
          </div>
          <div tw="w-full  flex justify-center items-center p-4 bg-[#F4F4F4] mt-[25px] text-sm text-[#8E8E8E] rounded-b-md">
            New to cdEnv?{"  "}
            <Link href="/authentication/signup" passHref={true}>
              <span tw="text-[#1A254A] pl-[5px] cursor-pointer">Sign up</span>
            </Link>
          </div>
        </SignInForm>
      </div>

      <div tw="flex pt-[30px] pb-[167.18px]  justify-center items-center text-white text-sm leading-4 ">
        <span tw="underline cursor-pointer">Forget your password?</span>
      </div>

      <div tw="flex pb-[30px]  justify-center items-center text-white text-sm leading-4 ">
        <span>© Copyright {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

export default SignIn;
