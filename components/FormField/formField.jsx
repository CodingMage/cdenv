import tw, { styled } from "twin.macro";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
const FormFieldShell = styled.div`
  /* ${({ full }) => (full === true ? tw`w-full` : tw`w-[300px]`)} */
  ${tw`flex flex-col gap-[10px] w-full`}
`;

const FormFieldLabel = styled.label`
  ${({ required }) =>
    required === true
      ? tw`after:(content-[" *"] text-red-500 text-sm)`
      : tw`after:hidden`}

  ${tw`text-[#8E8E8E] text-sm font-normal  leading-4 `}
`;

const FormFieldInput = styled.input`
  font-family: inherit;
  outline: none !important;
  ${tw` text-sm appearance-none border-0 py-[11px] px-[16.53px] w-full h-10 leading-4   bg-transparent text-[#1A254A] placeholder-[#CDCDCD] `};
`;

const FormField = ({
  label,
  name,
  placeholder,
  type,
  title,
  full,
  viewPassword,
  value,
  action,
  minLength,
  register,
  required = false,
  errors,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div
      style={{
        width: full === true ? "100%" : full,
        // maxWidth: full,
      }}
    >
      <FormFieldShell full={full}>
        <FormFieldLabel htmlFor={label} required={required}>
          {title}
        </FormFieldLabel>
        <div tw="flex items-center gap-2  border border-[#8E8E8E] border-solid rounded-[6px] ">
          <FormFieldInput
            type={passwordShown && type === "password" ? "text" : type}
            id={label}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={action}
            minLength={minLength}
            {...register(name, { required: "This is required." })}
          />

          {name === "password" && (
            <div
              id="showPasswordButton"
              tw="cursor-pointer pr-2.5"
              onClick={() => togglePasswordVisibility()}
            >
              {passwordShown ? (
                <AiFillEyeInvisible color="#c6c2c2" />
              ) : (
                <AiFillEye color="#c6c2c2" />
              )}
            </div>
          )}
        </div>
      </FormFieldShell>
    </div>
  );
};
export default FormField;
