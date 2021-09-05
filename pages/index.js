import tw, { css } from "twin.macro";
import Btn from "../component/Buttons/Btn";

export default function Home() {
  return (
    <div>
      <Btn type="primary" link="#">
        Primary
      </Btn>

      <Btn inactive={true} link="#">
        Default
      </Btn>
    </div>
  );
}
