import tw, { styled } from "twin.macro";
import Image from "next/image";
import { MoreIcon, PersonIcon } from "../Icons";

const Nav = styled.nav`
  padding: 23.5px 50.49px 19.5px 49.51px;
  ${tw`flex justify-between items-center break-mobile:(py-5 pr-3.5 pl-4)`};
`;
const LinkContainer = tw.div`flex justify-center items-center max-w-[189px] h-6 gap-[30px]`;
const LinkSubContainer = tw.div`flex max-w-[76px] h-6 gap-2.5 text-[16px] text-[#8E8E8E]`;
const LinkSubContainerTitle = tw.span`break-mobile:(hidden)`;

const Navbar = () => {
  return (
    <section>
      <Nav>
        <Image
          src="/assets/img/Dashboard-logo.png"
          width="88"
          height="27"
          alt="cdenv logo"
        />
        <LinkContainer>
          <LinkSubContainer>
            <MoreIcon />
            <LinkSubContainerTitle>Menu</LinkSubContainerTitle>
          </LinkSubContainer>

          <LinkSubContainer>
            <PersonIcon />
            <LinkSubContainerTitle>Profile</LinkSubContainerTitle>
          </LinkSubContainer>
        </LinkContainer>
      </Nav>
    </section>
  );
};

export default Navbar;
