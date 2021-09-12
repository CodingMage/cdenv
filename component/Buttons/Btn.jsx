import tw, { styled } from "twin.macro";
import Link from "next/link";

const BtnDefault = styled.button`
  font-size: 0.875rem;
  ${tw`cursor-pointer flex justify-center items-center bg-transparent  font-medium w-20 h-12  p-4 text-white rounded-md border-solid border-2 border-white `};
`;

const BtnPrimary = tw(
  BtnDefault
)`bg-blue-600 border-solid border-0 hover:border-2 border-borderBlue border-opacity-100`;

const BtnInactive = tw(
  BtnDefault
)`bg-custom-inactive border-solid border-0 text-gray-500`;

const BtnAll = styled(BtnDefault)`
  ${({ disabled }) =>
    disabled
      ? tw`bg-custom-inactive border-solid border-0 text-gray-500`
      : tw`bg-blue-600 border-solid border-0 hover:border-2 border-borderBlue border-opacity-100 focus:bg-borderBlue active:bg-borderBlue`}
`;

const BtnDefaultFull = styled.button`
  font-size: 0.875rem;
  ${tw`flex gap-4  items-center bg-transparent  font-medium hover:bg-blur-blue-bg h-12  focus:bg-borderBlue p-4 text-white rounded-md border-solid border-2 border-blue-500 cursor-pointer`};
`;

const Btn = ({ link, type, children, click, disable = false }) => {
  switch (type) {
    case "primary": {
      if (link === "#") {
        return (
          <BtnPrimary disabled={disable} onClick={click}>
            {children}
          </BtnPrimary>
        );
      }
      return (
        <Link href={link}>
          <BtnPrimary disabled={disable} onClick={click}>
            {children}
          </BtnPrimary>
        </Link>
      );
    }

    case "0": {
      if (link === "#") {
        return <BtnDefaultFull>{children}</BtnDefaultFull>;
      }
      return (
        <Link href={link}>
          <BtnDefaultFull>{children}</BtnDefaultFull>
        </Link>
      );
    }

    default: {
      return (
        <BtnAll disabled={disable} onClick={click}>
          {children}
        </BtnAll>
      );
    }
  }
};

export default Btn;
