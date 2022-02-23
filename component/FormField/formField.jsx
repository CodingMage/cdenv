import tw, { styled } from "twin.macro";
const FormFieldShell = styled.div`
  ${({ full }) => (full === true ? tw`w-full` : tw`w-[300px]`)}
  ${tw`flex flex-col gap-[6px]`}
`;

const FormFieldLabel = styled.label`
  ${tw`text-[#8E8E8E] text-sm font-normal  leading-4 `}
`;

const FormFieldInput = styled.input`
  font-family: inherit;
  ${tw` text-sm appearance-none border border-[#8E8E8E] border-solid rounded-xl py-[11px] px-[16.53px] w-full h-10 leading-4   bg-transparent text-[#1A254A] placeholder-[#CDCDCD] outline-none`};
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
  return (
    <FormFieldShell full={full}>
      <FormFieldLabel htmlFor={label}>{title}</FormFieldLabel>
      <div>
        <FormFieldInput
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={action}
          minLength={minLength}
          {...register(name, { required: "This is required." })}
        />
        {/* <p tw="text-red-400 text-sm">
          {
            //If error exists in the textField
            errors[name] && errors[name].message
          }
        </p> */}
        <div></div>
      </div>
    </FormFieldShell>
  );
};
export default FormField;
