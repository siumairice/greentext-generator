import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

const greentextLines = [
  "> be me",
  "> try to make a bot",
  "> bot refuses to work",
  "> I am now its bot",
  "> mfw"
];

export const GreentextMeme: React.FC = () => {
  const frame = useCurrentFrame();
  const lineSpacing = 100;
  const textWidth = 900;
  const startX = 700;
  const totalDuration = 200;
  const fadeOutStart = totalDuration - 30;

  return (
    <AbsoluteFill style={{ backgroundColor: "#F6E9E1", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          backgroundColor: "#EAD6CB",
          width: "100%",
          height: "90px",
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: "60px",
        }}
      ></div>

      {/* Meme Image on the Left */}
      <Img 
        src={staticFile("pepe.png")} 
        style={{
          width: "500px",
          position: "absolute",
          left: "100px",
          top: "50%",
          transform: "translateY(-50%)"
        }} 
      />

      {/* Greentext on the Right */}
      <div style={{
        fontFamily: "Arial, monospace",
        color: "#979B33",
        fontSize: "50px",
        position: "absolute",
        left: `${startX}px`,
        top: "25%",
        width: `${textWidth}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start",
      }}>
        {greentextLines.map((line, index) => {
          const startFrame = index * 30; // Stagger each line's appearance
          const chars = line.split(""); 

          const fadeOut = interpolate(
            frame,
            [fadeOutStart, fadeOutStart + 15],
            [1, 0],
            { extrapolateRight: "clamp" }
          );

          return (
            <Sequence
              key={index}
              from={startFrame}
              durationInFrames={totalDuration}
              style={{ 
                position: "relative", 
                display: "block", 
                height: `${lineSpacing}px`, 
                lineHeight: "1.5em",
                opacity: fadeOut 
              }}
            >
              <div style={{ width: `${textWidth}px`, whiteSpace: "nowrap" }}>
                {chars.map((char, charIndex) => {
                  const charStart = startFrame + charIndex * 2;
                  const opacity = interpolate(
                    frame,
                    [charStart, charStart + 2],
                    [0, 1],
                    { extrapolateRight: "clamp" }
                  );

                  return (
                    <span key={charIndex} style={{ opacity }}>
                      {char}
                    </span>
                  );
                })}
              </div>
            </Sequence>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
