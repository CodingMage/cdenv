import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import FormField from "../../component/FormField/formField";
import Link from "next/link";

const SignInForm = tw.form`flex justify-center flex-col w-full max-w-[386px] bg-white rounded-xl`;
function SignIn() {
  return (
    <div tw="bg-[#283A8F] w-full min-h-screen ">
      <div tw="flex justify-center pt-[113px] mb-[80px]">
        <Image
          src="/assets/svg/cdEnv_big_logo.svg"
          width="120"
          height="36.82"
        />
      </div>
      <div tw="flex w-full justify-center">
        <SignInForm>
          <div tw="flex w-full pt-[20px] pt-[5px] pr-[25px] justify-end">
            <Image src="/assets/svg/close.svg" height="24" width="24" />
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
              // value={context.inputValue.email}
              // action={context.inputChange}
            />
            <div tw=" w-full max-w-[300px] flex justify-center cursor-pointer items-center p-4 bg-[#F4F4F4] mt-[15px] rounded-md">
              Log in
            </div>
          </div>
          <div tw=" w-full  flex justify-center items-center p-4 bg-[#F4F4F4] mt-[25px] text-sm text-[#8E8E8E] rounded-b-md">
            New to cdEnv?{"  "}
            <Link href="/authentication/signup">
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
