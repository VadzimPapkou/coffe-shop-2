import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Кварта — свежая обжарка кофе в Минске";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bagBuf, oswald, neucha] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/coffee-bag-blank-hq.png")),
    readFile(join(process.cwd(), "src/app/fonts/Oswald-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Neucha-Regular.ttf")),
  ]);

  const bagSrc = `data:image/png;base64,${bagBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f0ede8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(224, 109, 45, 0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -160,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(28, 25, 22, 0.06)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 48px 64px 72px",
            width: "58%",
            height: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "Oswald",
              fontSize: 36,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              marginBottom: 32,
            }}
          >
            Кварта
          </div>
          <div
            style={{
              fontFamily: "Neucha",
              fontSize: 68,
              lineHeight: 1,
              color: "#e06d2d",
              marginBottom: 6,
            }}
          >
            Свежая обжарка
          </div>
          <div
            style={{
              fontFamily: "Oswald",
              fontSize: 56,
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: "#1a1a1a",
              marginBottom: 28,
            }}
          >
            из Минска
          </div>
          <div
            style={{
              fontFamily: "Oswald",
              fontSize: 24,
              color: "#5c574e",
              lineHeight: 1.45,
              maxWidth: 480,
            }}
          >
            Партии по 5 кг · зерно к вам на 1–3 день после обжарки
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            height: "100%",
            paddingRight: 40,
          }}
        >
          <img
            src={bagSrc}
            alt=""
            width={270}
            height={540}
            style={{
              width: 270,
              height: 540,
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Oswald", data: oswald, style: "normal", weight: 600 },
        { name: "Neucha", data: neucha, style: "normal", weight: 400 },
      ],
    },
  );
}
