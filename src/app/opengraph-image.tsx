import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Atelier d’Architecture Moderne — architecte à Dijon, Côte-d’Or";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17191d",
          color: "#f0efea",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="76" height="76" viewBox="0 0 64 64">
            <rect
              x="14.5"
              y="14.5"
              width="35"
              height="35"
              rx="2"
              transform="rotate(45 32 32)"
              fill="#c2932a"
            />
            <path
              d="M23 41.5 32 21.5 41 41.5"
              fill="none"
              stroke="#17191d"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 10,
              color: "#a9afb6",
            }}
          >
            DIJON — CÔTE-D’OR
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>ATELIER</div>
          <div style={{ display: "flex" }}>D’ARCHITECTURE</div>
          <div style={{ display: "flex", color: "#c2932a" }}>MODERNE</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a9afb6",
            letterSpacing: 4,
          }}
        >
          <div style={{ display: "flex" }}>
            RÉNOVATION · EXTENSION · CONSTRUCTION NEUVE
          </div>
          <div style={{ display: "flex" }}>PAULINE GARNIER — ARCHITECTE</div>
        </div>
      </div>
    ),
    size,
  );
}
