import tw, { styled } from "twin.macro";
import Link from "next/link";
import { motion } from "framer-motion";

const BtnDefault = styled(motion.button)`
  font-size: 0.875rem;
  ${tw`cursor-pointer flex justify-center items-center bg-transparent  font-medium  h-12  p-4 text-white   rounded-md border-solid border-2 border-white `};
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
  ${tw`flex gap-4  items-center bg-transparent  font-medium hover:bg-blur-blue-bg h-12  focus:bg-borderBlue p-4 text-white rounded-md border-solid border-2 border-dark-blue-bg cursor-pointer`};
`;

const Btn = ({ link, type, children, click, disable = false }) => {
  switch (type) {
    case "transparent": {
      if (link === "#") {
        return (
          <BtnDefault disabled={disable} onClick={click}>
            {children}
          </BtnDefault>
        );
      }
      return (
        <Link href={link} passHref={true}>
          <BtnDefault
            disabled={disable}
            onClick={click}
            whileHover={{
              y: 5,
              transition: {
                ease: "linear",
                duration: 0.5,
              },
            }}
          >
            {children}
          </BtnDefault>
        </Link>
      );
    }

    case "primary": {
      if (link === "#") {
        return (
          <BtnPrimary
            disabled={disable}
            onClick={click}
            whileHover={{
              y: 5,
              transition: {
                y: { type: "spring", stiffness: 100 },
                duration: 0.5,
              },
            }}
          >
            {children}
          </BtnPrimary>
        );
      }
      return (
        <Link href={link} passHref={true}>
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
        <Link href={link} passHref={true}>
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
