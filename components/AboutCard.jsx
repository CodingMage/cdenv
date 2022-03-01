import tw, { styled } from "twin.macro";
import Image from "next/image";

const AboutCardContainer = styled.div`
  background: rgba(1, 228, 240, 0.03);
  border-radius: 5px;
  ${tw`flex flex-col pl-[50px] pr-[55.98px] max-w-[532px]`}
`;

const AboutCardTop = styled.div`
  ${tw`flex pt-[35.36px] pb-[22px] items-center gap-[22.02px]`}
`;

const AboutCard = ({ src, title, description }) => {
  return (
    <AboutCardContainer>
      <AboutCardTop>
        <Image src={src} width="24" height="24" alt={title} />
        {title}
      </AboutCardTop>
      <div tw="text-[#1A254A] text-[20px] font-light leading-[26px] pb-[35.64px]">
        {description}
      </div>
    </AboutCardContainer>
  );
};
export default AboutCard;
