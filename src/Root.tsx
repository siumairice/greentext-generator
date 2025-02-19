import { Composition } from "remotion";
import { GreentextMeme } from "./GreentextMeme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GreentextMeme"
        component={GreentextMeme}
        durationInFrames={200}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
