import tw, { styled } from "twin.macro";
import Image from "next/image";
import { MoreIcon, PersonIcon } from "../Icons";

const Nav = styled.nav`
  padding: 23.5px 50.49px 19.5px 49.51px
    ${tw`flex justify-between items-center`};
`;
const Navbar = () => {
  return (
    <Nav>
      <Image
        src="/assets/img/Dashboard-logo.png"
        width="88"
        height="27"
        alt="cdenv logo"
      />
      <div>
        <div>
          <MoreIcon />
          <span>Menu</span>
        </div>

        <div>
          <PersonIcon />
          <span>Profile</span>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
