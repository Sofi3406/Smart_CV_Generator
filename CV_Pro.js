
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      //  CONFIGURATION
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      const COLORS = [
        {
          id: "blue",
          name: "Royal Blue",
          c1: "#1d4ed8",
          c2: "#eff6ff",
          c3: "#1e3a5f",
          ct: "#fff",
          clt: "#1e3a5f",
        },
        {
          id: "sky",
          name: "Sky Blue",
          c1: "#0284c7",
          c2: "#e0f2fe",
          c3: "#0c4a6e",
          ct: "#fff",
          clt: "#0c4a6e",
        },
        {
          id: "teal",
          name: "Teal",
          c1: "#0f766e",
          c2: "#ccfbf1",
          c3: "#134e4a",
          ct: "#fff",
          clt: "#134e4a",
        },
        {
          id: "emerald",
          name: "Emerald",
          c1: "#059669",
          c2: "#d1fae5",
          c3: "#064e3b",
          ct: "#fff",
          clt: "#064e3b",
        },
        {
          id: "lime",
          name: "Lime",
          c1: "#4d7c0f",
          c2: "#ecfccb",
          c3: "#1a2e05",
          ct: "#fff",
          clt: "#1a2e05",
        },
        {
          id: "violet",
          name: "Violet",
          c1: "#7c3aed",
          c2: "#ede9fe",
          c3: "#4c1d95",
          ct: "#fff",
          clt: "#4c1d95",
        },
        {
          id: "purple",
          name: "Purple",
          c1: "#9333ea",
          c2: "#fae8ff",
          c3: "#581c87",
          ct: "#fff",
          clt: "#581c87",
        },
        {
          id: "rose",
          name: "Rose",
          c1: "#be185d",
          c2: "#fce7f3",
          c3: "#831843",
          ct: "#fff",
          clt: "#831843",
        },
        {
          id: "red",
          name: "Crimson",
          c1: "#dc2626",
          c2: "#fee2e2",
          c3: "#7f1d1d",
          ct: "#fff",
          clt: "#7f1d1d",
        },
        {
          id: "orange",
          name: "Orange",
          c1: "#ea580c",
          c2: "#ffedd5",
          c3: "#7c2d12",
          ct: "#fff",
          clt: "#7c2d12",
        },
        {
          id: "amber",
          name: "Amber",
          c1: "#b45309",
          c2: "#fef3c7",
          c3: "#78350f",
          ct: "#fff",
          clt: "#78350f",
        },
        {
          id: "gold",
          name: "Gold",
          c1: "#ca8a04",
          c2: "#fefce8",
          c3: "#713f12",
          ct: "#fff",
          clt: "#713f12",
        },
        {
          id: "charcoal",
          name: "Charcoal",
          c1: "#334155",
          c2: "#f1f5f9",
          c3: "#0f172a",
          ct: "#fff",
          clt: "#0f172a",
        },
        {
          id: "slate",
          name: "Slate",
          c1: "#475569",
          c2: "#f8fafc",
          c3: "#1e293b",
          ct: "#fff",
          clt: "#1e293b",
        },
        {
          id: "indigo",
          name: "Indigo",
          c1: "#4338ca",
          c2: "#e0e7ff",
          c3: "#1e1b4b",
          ct: "#fff",
          clt: "#1e1b4b",
        },
        {
          id: "cyan",
          name: "Cyan",
          c1: "#0891b2",
          c2: "#cffafe",
          c3: "#164e63",
          ct: "#fff",
          clt: "#164e63",
        },
        {
          id: "fuchsia",
          name: "Fuchsia",
          c1: "#a21caf",
          c2: "#fdf4ff",
          c3: "#4a044e",
          ct: "#fff",
          clt: "#4a044e",
        },
        {
          id: "forest",
          name: "Forest",
          c1: "#166534",
          c2: "#dcfce7",
          c3: "#14532d",
          ct: "#fff",
          clt: "#14532d",
        },
        {
          id: "steel",
          name: "Steel Blue",
          c1: "#1e40af",
          c2: "#dbeafe",
          c3: "#172554",
          ct: "#fff",
          clt: "#172554",
        },
        {
          id: "zinc",
          name: "Zinc",
          c1: "#52525b",
          c2: "#fafafa",
          c3: "#18181b",
          ct: "#fff",
          clt: "#18181b",
        },
      ];

      // ── TEMPLATE SYSTEM ──────────────────────────────────────
      // Each template defines:
      //   hBg/hFg/hBB: header bg, text color, border-bottom
      //   lBg/lFg: left column bg / text color
      //   lSHBg/lSHFg: left section header bg / text
      //   lSHStyle: extra CSS for left section head (shape/border overrides)
      //   mBg/mFg: main column bg / text color
      //   mSHBg/mSHFg: main section header bg / text
      //   mSHStyle: extra CSS for main section head
      //   font: default font
      //   sr: section head border-radius
      //   hL: default photo position
      //   hGrad: header has gradient
      //   leftBorder: optional right-border on left column
      //   leftStyle: extra CSS on left column
      //   mainStyle: extra CSS on main column
      //   secHeadShape: 'box'|'line'|'pill'|'underline'|'tag' — visual style of section titles
      //   lSecHeadShape: override shape for left column headers

      const TEMPLATES = [
        // ──────────────────── ATS-CLEAN SUITE (1–8) ────────────────────
        // These use white/light left columns — fully ATS-readable, high contrast
        {
          id: "t1",
          name: "Classic Pro",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#fff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Lato",
          sr: "0",
          hL: "left",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t2",
          name: "Executive White",
          hBg: "$c3",
          hFg: "$c2",
          hBB: "4px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#fff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Inter",
          sr: "1px",
          hL: "right",
          hGrad: false,
          leftBorder: "2px solid $c2",
          secHeadShape: "box",
        },

        {
          id: "t3",
          name: "Minimal Clean",
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "2px solid $c1",
          lBg: "$c2",
          lFg: "$c1",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "DM Sans",
          sr: "2px",
          hL: "left",
          hGrad: false,
          leftBorder: "1px solid #e2e8f0",
          secHeadShape: "underline",
        },

        {
          id: "t4",
          name: "Stripe Classic",
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "none",
          lBg: "#ffffff",
          lFg: "$c1",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Inter",
          sr: "3px",
          hL: "left",
          hGrad: false,
          leftBorder: "5px solid $c1",
          secHeadShape: "underline",
          lSecHeadShape: "line",
        },

        {
          id: "t5",
          name: "Teal Sidebar",
          hBg: "linear-gradient(135deg,$c1,#0d9488)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#f0fdfa",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "DM Sans",
          sr: "4px",
          hL: "right",
          hGrad: true,
          secHeadShape: "pill",
        },

        {
          id: "t6",
          name: "Teal Pro",
          hBg: "linear-gradient(90deg,$c1,#0d9488)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#e6fffa",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#f8fffe",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Source Sans 3",
          sr: "5px",
          hL: "left",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t7",
          name: "Teal Accent",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "4px solid $c1",
          lBg: "#f0fdfa",
          lFg: "#0d4f47",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "#f0fdfa",
          mSHFg: "#0d4f47",
          font: "Nunito",
          sr: "6px",
          hL: "center",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t8",
          name: "Sidebar Classic",
          // Left sidebar profile layout: photo + socials pinned at top of sidebar,
          // name & title sit at the top of the main column instead of a full-width header.
          sidebarProfile: true,
          hBg: "transparent",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Inter",
          sr: "7px",
          hL: "left",
          hGrad: false,
          secHeadShape: "box",
        },

        // ──────────────────── STRIPE/LINE SUITE (9–13) ────────────────────
        // All-white, uses accent color only as borders/lines — very ATS-safe
        {
          id: "t9",
          name: "Stripe Blue",
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "4px solid $c1",
          lBg: "#ffffff",
          lFg: "$c1",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Inter",
          sr: "8px",
          hL: "left",
          hGrad: false,
          leftBorder: "4px solid $c1",
          secHeadShape: "underline",
        },

        {
          id: "t10",
          name: "Stripe Pill",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "9px",
          hL: "right",
          hGrad: false,
          leftBorder: "1px solid $c2",
          secHeadShape: "pill",
        },

        {
          id: "t11",
          name: "Stripe Minimal",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "2px solid $c1",
          lBg: "#ffffff",
          lFg: "$c1",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Source Sans 3",
          sr: "10px",
          hL: "left",
          hGrad: false,
          leftBorder: "3px solid $c1",
          secHeadShape: "line",
        },

        {
          id: "t12",
          name: "Stripe Tag",
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "5px solid $c1",
          lBg: "$c2",
          lFg: "$c1",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Raleway",
          sr: "11px",
          hL: "left",
          hGrad: false,
          leftBorder: "1px solid #e2e8f0",
          secHeadShape: "tag",
        },

        {
          id: "t13",
          name: "Stripe Dot",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "4px dotted $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c3",
          lSHFg: "#ffffff",
          mBg: "$c2",
          mFg: "$c3",
          mSHBg: "$c3",
          mSHFg: "#ffffff",
          font: "Montserrat",
          sr: "12px",
          hL: "right",
          hGrad: false,
          leftBorder: "1px solid $c2",
          secHeadShape: "pill",
        },

        // ──────────────────── GRADIENT SUITE (14–18) ────────────────────
        {
          id: "t14",
          name: "Gradient Bold",
          hBg: "linear-gradient(135deg,$c1,$c3)",
          hFg: "#ffffff",
          hBB: "3px solid rgba(255,255,255,.3)",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c2",
          lSHFg: "$c3",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c1",
          mSHFg: "#ffffff",
          font: "Montserrat",
          sr: "13px",
          hL: "left",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t15",
          name: "Gradient Side",
          hBg: "$c1",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "linear-gradient(180deg,$c1 0%,$c3 100%)",
          lFg: "#e2f7ff",
          lSHBg: "rgba(255,255,255,.18)",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Poppins",
          sr: "14px",
          hL: "right",
          hGrad: false,
          secHeadShape: "pill",
        },

        {
          id: "t16",
          name: "Vivid Pop",
          hBg: "linear-gradient(120deg,$c1 0%,$c1 100%)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#f8f9ff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Poppins",
          sr: "15px",
          hL: "center",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t17",
          name: "Sidebar Bold",
          // Solid saturated sidebar in the accent color, white main column.
          sidebarProfile: true,
          hBg: "transparent",
          hFg: "$c3",
          hBB: "2px solid $c2",
          lBg: "$c1",
          lFg: "#ffffff",
          lSHBg: "rgba(255,255,255,.16)",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Poppins",
          sr: "16px",
          hL: "left",
          hGrad: false,
          secHeadShape: "pill",
        },

        {
          id: "t18",
          name: "Sidebar Frame",
          // Clean white sidebar with a strong accent rule, minimalist & fully ATS-safe.
          sidebarProfile: true,
          hBg: "transparent",
          hFg: "$c3",
          hBB: "2px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Lato",
          sr: "17px",
          hL: "left",
          hGrad: false,
          leftBorder: "4px solid $c1",
          secHeadShape: "line",
          lSecHeadShape: "underline",
        },

        // ──────────────────── PROFESSIONAL LIGHT (19–24) ────────────────────
        {
          id: "t19",
          name: "Pastel Pro",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "$c2",
          mFg: "$c3",
          mSHBg: "$c1",
          mSHFg: "#ffffff",
          font: "Inter",
          sr: "18px",
          hL: "right",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t20",
          name: "Corporate",
          hBg: "linear-gradient(135deg,$c2,#f0f9ff)",
          hFg: "$c3",
          hBB: "4px solid $c1",
          lBg: "#f0f9ff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "19px",
          hL: "right",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t21",
          name: "Heritage",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px double $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c3",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Playfair Display",
          sr: "20px",
          hL: "left",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t22",
          name: "Academic",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#fffbeb",
          mFg: "#1c1917",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Merriweather",
          sr: "21px",
          hL: "right",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t23",
          name: "Scholar",
          hBg: "$c2",
          hFg: "$c3",
          hBB: "4px solid $c3",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c3",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c3",
          mSHFg: "#ffffff",
          font: "Merriweather",
          sr: "22px",
          hL: "left",
          hGrad: false,
          secHeadShape: "box",
        },

        {
          id: "t24",
          name: "Nature",
          hBg: "#f0fdf4",
          hFg: "$c3",
          hBB: "4px solid $c1",
          lBg: "#f0fdf4",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "23px",
          hL: "left",
          hGrad: false,
          secHeadShape: "pill",
        },

        // ──────────────────── LIGHT STRUCTURED (25–27) ────────────────────
        // Formerly dark templates — rebuilt with light, ATS-safe, high-contrast palettes.
        // Each keeps a distinct structural identity (centered photo+underline / boxed
        // stripe header / serif "luxury" feel) while staying fully light-on-dark-text.
        {
          id: "t25",
          name: "Pearl Center",
          // Centered header on soft pearl-grey, underline section heads, two-tone sidebar accent
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c2",
          lSHFg: "$c3",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c3",
          font: "Raleway",
          sr: "24px",
          hL: "center",
          hGrad: false,
          leftBorder: "1px solid #e2e8f0",
          secHeadShape: "underline",
          lSecHeadShape: "box",
        },

        {
          id: "t26",
          name: "Quartz Stripe",
          // Crisp white header with bold left rule, light slate sidebar, boxed main heads
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "2px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Montserrat",
          sr: "25px",
          hL: "left",
          hGrad: false,
          leftBorder: "4px solid $c1",
          secHeadShape: "box",
        },

        {
          id: "t27",
          name: "Luxury Ivory",
          // Warm ivory "premium" feel with serif type — same elegant DNA as before, fully light
          hBg: "linear-gradient(135deg,#fdf6e3,#f7ecd0)",
          hFg: "#5b4a1a",
          hBB: "3px solid #c9a227",
          lBg: "#fdf6e3",
          lFg: "#5b4a1a",
          lSHBg: "#c9a227",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "#2d2410",
          mSHBg: "#fdf6e3",
          mSHFg: "#5b4a1a",
          font: "Playfair Display",
          sr: "26px",
          hL: "right",
          hGrad: true,
          leftBorder: "1px solid #e9d9a0",
          secHeadShape: "box",
        },

        // ──────────────────── EDITORIAL / CREATIVE (28–30) ────────────────────
        {
          id: "t28",
          name: "Editorial",
          hBg: "#f8f8f4",
          hFg: "#3f3a33",
          hBB: "5px solid #6b6256",
          lBg: "#f8f8f4",
          lFg: "#3f3a33",
          lSHBg: "#6b6256",
          lSHFg: "#f8f8f4",
          mBg: "#f8f8f4",
          mFg: "#3f3a33",
          mSHBg: "#54493a",
          mSHFg: "#f8f8f4",
          font: "Playfair Display",
          sr: "27px",
          hL: "left",
          hGrad: false,
          leftBorder: "2px solid #6b6256",
          secHeadShape: "box",
        },

        {
          id: "t29",
          name: "Timber Warm",
          hBg: "linear-gradient(135deg,#3d2b1f,#6b4226)",
          hFg: "#fde68a",
          hBB: "3px solid #fde68a",
          lBg: "#fdf6ec",
          lFg: "#3d2b1f",
          lSHBg: "#3d2b1f",
          lSHFg: "#fde68a",
          mBg: "#ffffff",
          mFg: "#2d1b0e",
          mSHBg: "#fdf6ec",
          mSHFg: "#3d2b1f",
          font: "Merriweather",
          sr: "28px",
          hL: "left",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t30",
          name: "Fashion",
          hBg: "linear-gradient(135deg,$c1,#f43f5e)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#fff0f5",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Raleway",
          sr: "29px",
          hL: "right",
          hGrad: true,
          secHeadShape: "pill",
        },

        // ──────────────────── 5 NEW PREMIUM UNIQUE TEMPLATES (31–35) ────────────────────
        {
          id: "t31",
          name: "Aqua Blade",
          // Clean white left with a bold teal accent blade on right — ATS safe, modern
          hBg: "linear-gradient(90deg,$c1 0%,#0d9488 60%,#f0fdfa 60%)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "DM Sans",
          sr: "30px",
          hL: "left",
          hGrad: true,
          leftBorder: "4px solid $c1",
          secHeadShape: "line",
          mSecHeadShape: "underline",
        },

        {
          id: "t32",
          name: "Sage Arch",
          // Soft sage green with arched rounded section heads in main column
          hBg: "#ecfdf5",
          hFg: "$c3",
          hBB: "3px solid #10b981",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "#10b981",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "#ecfdf5",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "31px",
          hL: "right",
          hGrad: false,
          leftBorder: "1px solid #a7f3d0",
          secHeadShape: "pill",
        },

        {
          id: "t33",
          name: "Indigo Edge",
          // Deep indigo sidebar, pure white main — high contrast, ATS-excellent
          hBg: "linear-gradient(135deg,$c3,#312e81)",
          hFg: "$c2",
          hBB: "4px solid #6366f1",
          lBg: "#eef2ff",
          lFg: "$c3",
          lSHBg: "#312e81",
          lSHFg: "$c2",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "#eef2ff",
          mSHFg: "$c3",
          font: "Inter",
          sr: "32px",
          hL: "left",
          hGrad: true,
          leftBorder: "1px solid #c7d2fe",
          secHeadShape: "box",
        },

        {
          id: "t34",
          name: "Copper Serif",
          // Warm copper tones with serif font — premium executive feel, light sidebar
          hBg: "linear-gradient(135deg,$c3,#c2410c)",
          hFg: "$c2",
          hBB: "3px solid #f59e0b",
          lBg: "#fff7ed",
          lFg: "$c3",
          lSHBg: "#c2410c",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "#1c1917",
          mSHBg: "#fff7ed",
          mSHFg: "$c3",
          font: "Playfair Display",
          sr: "33px",
          hL: "right",
          hGrad: true,
          leftBorder: "2px solid #fed7aa",
          secHeadShape: "box",
        },

        {
          id: "t35",
          name: "Glacier",
          // Icy blue gradient header, snow-white columns, crisp pill badges — clean & corporate
          hBg: "linear-gradient(135deg,#0369a1,#0ea5e9,#7dd3fc)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#f0f9ff",
          lFg: "$c3",
          lSHBg: "#0369a1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Source Sans 3",
          sr: "34px",
          hL: "center",
          hGrad: true,
          leftBorder: "1px solid #bae6fd",
          secHeadShape: "pill",
        },

        // ──────────────────── 10 NEW LIGHT SIGNATURE TEMPLATES (36–45) ────────────────────
        // Each built on a previously-unused accent hue from the 20-color palette,
        // with its own unique header / sidebar / main-column structure.
        {
          id: "t36",
          name: "Sidebar Duotone",
          // Vertical duotone gradient sidebar running light-to-dark accent, white main.
          sidebarProfile: true,
          hBg: "transparent",
          hFg: "$c3",
          hBB: "none",
          lBg: "linear-gradient(180deg,$c1 0%,$c3 100%)",
          lFg: "#ffffff",
          lSHBg: "rgba(255,255,255,.16)",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "DM Sans",
          sr: "35px",
          hL: "left",
          hGrad: true,
          secHeadShape: "box",
        },

        {
          id: "t37",
          name: "Purple Ledger",
          // Top-aligned ledger style: thin rule header, tag-shaped section heads, wide sidebar
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "#faf5ff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "#1e1033",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Lato",
          sr: "36px",
          hL: "left",
          hGrad: false,
          leftBorder: "1px solid #f3e8ff",
          secHeadShape: "tag",
          lSecHeadShape: "box",
        },

        {
          id: "t38",
          name: "Lime Fresh",
          // Bright energetic header band, line-style section heads, crisp two-column balance
          hBg: "$c2",
          hFg: "$c3",
          hBB: "4px solid $c1",
          lBg: "#f7fee7",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "#14210a",
          mSHBg: "transparent",
          mSHFg: "#3f6212",
          font: "Nunito",
          sr: "37px",
          hL: "left",
          hGrad: false,
          leftBorder: "1px solid #d9f99d",
          secHeadShape: "line",
          mSecHeadShape: "underline",
        },

        {
          id: "t39",
          name: "Crimson Edge",
          // Bold full-bleed gradient header, underline main heads, narrow accent sidebar
          hBg: "linear-gradient(135deg,$c1,$c3)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#fef2f2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "#b91c1c",
          font: "Montserrat",
          sr: "38px",
          hL: "center",
          hGrad: true,
          leftBorder: "3px solid #fecaca",
          secHeadShape: "box",
          mSecHeadShape: "underline",
        },

        {
          id: "t40",
          name: "Charcoal Frame",
          // Boxed-border header (frame motif), boxed section heads both columns — sharp & formal
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "#e2e8f0",
          mSHFg: "$c3",
          font: "Source Sans 3",
          sr: "39px",
          hL: "left",
          hGrad: false,
          leftBorder: "2px solid $c1",
          secHeadShape: "box",
        },

        {
          id: "t41",
          name: "Slate Column",
          // Right-aligned photo, dotted header rule, pill main heads — calm corporate feel
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "4px dotted $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "$c2",
          mFg: "$c3",
          mSHBg: "$c1",
          mSHFg: "#ffffff",
          font: "DM Sans",
          sr: "40px",
          hL: "right",
          hGrad: false,
          leftBorder: "1px solid #cbd5e1",
          secHeadShape: "line",
          mSecHeadShape: "pill",
        },

        {
          id: "t42",
          name: "Cyan Wave",
          // Wide gradient wave header, pill sidebar heads, clean white main with line heads
          hBg: "linear-gradient(100deg,$c1,#22d3ee)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "#ecfeff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Inter",
          sr: "41px",
          hL: "left",
          hGrad: true,
          leftBorder: "1px solid #a5f3fc",
          secHeadShape: "pill",
          mSecHeadShape: "line",
        },

        {
          id: "t43",
          name: "Sidebar Compact",
          // Deep, dark accent sidebar with light-tint text — compact and high-contrast.
          sidebarProfile: true,
          hBg: "transparent",
          hFg: "$c3",
          hBB: "1px solid $c2",
          lBg: "$c3",
          lFg: "$c2",
          lSHBg: "rgba(255,255,255,.1)",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "42px",
          hL: "left",
          hGrad: false,
          secHeadShape: "underline",
          lSecHeadShape: "underline",
        },

        {
          id: "t44",
          name: "Steel Horizon",
          // Center photo, thick top rule like a masthead, boxed heads, wide left column
          hBg: "$c2",
          hFg: "$c3",
          hBB: "5px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Inter",
          sr: "43px",
          hL: "center",
          hGrad: false,
          leftBorder: "1px solid #bfdbfe",
          secHeadShape: "box",
        },

        {
          id: "t45",
          name: "Zinc Studio",
          // Minimalist studio look: no header border, hairline underlines throughout, narrow sidebar
          hBg: "$c2",
          hFg: "$c3",
          hBB: "1px solid #d4d4d8",
          lBg: "$c2",
          lFg: "#27272a",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "DM Sans",
          sr: "44px",
          hL: "left",
          hGrad: false,
          leftBorder: "1px solid #e4e4e7",
          secHeadShape: "underline",
          lSecHeadShape: "underline",
        },

        // ──────────────────── 5 NEW PRO TEMPLATES (46–50) ────────────────────
        // Fresh, organic feel in the spirit of Lime Fresh / Sage Arch — generous
        // rounded "arch" shapes and airy panels — fully dynamic across all 20 colors.
        {
          id: "t46",
          name: "Botanical Arch",
          // Large arched pill section heads both columns, soft tinted sidebar
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Nunito",
          sr: "45px",
          hL: "right",
          hGrad: false,
          leftBorder: "1px solid $c2",
          secHeadShape: "pill",
        },

        {
          id: "t47",
          name: "Meadow Line",
          // Solid confident header band, crisp underline heads — clean & ATS-forward
          hBg: "$c1",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "transparent",
          lSHFg: "$c1",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "DM Sans",
          sr: "46px",
          hL: "left",
          hGrad: false,
          secHeadShape: "underline",
          lSecHeadShape: "line",
        },

        {
          id: "t48",
          name: "Citrus Edge",
          // Heavy left-edge accent stripe, tag-shaped section heads
          hBg: "#ffffff",
          hFg: "$c3",
          hBB: "5px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Raleway",
          sr: "47px",
          hL: "left",
          hGrad: false,
          leftBorder: "5px solid $c1",
          secHeadShape: "tag",
        },

        {
          id: "t49",
          name: "Verdant Split",
          // Diagonal split header, pill sidebar heads, underline main heads
          hBg: "linear-gradient(70deg,$c1 38%,$c2 38%)",
          hFg: "#ffffff",
          hBB: "none",
          lBg: "$c2",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "transparent",
          mSHFg: "$c1",
          font: "Poppins",
          sr: "48px",
          hL: "left",
          hGrad: true,
          secHeadShape: "pill",
          mSecHeadShape: "underline",
        },

        {
          id: "t50",
          name: "Herbal Frame",
          // Framed header rule with matching boxed heads, structured & ATS-safe
          hBg: "$c2",
          hFg: "$c3",
          hBB: "3px solid $c1",
          lBg: "#ffffff",
          lFg: "$c3",
          lSHBg: "$c1",
          lSHFg: "#ffffff",
          mBg: "#ffffff",
          mFg: "$c3",
          mSHBg: "$c2",
          mSHFg: "$c3",
          font: "Lato",
          sr: "49px",
          hL: "center",
          hGrad: false,
          leftBorder: "3px solid $c1",
          secHeadShape: "box",
        },
      ];

      const DSEC = [
        {
          id: "summary",
          label: "Professional Summary",
          col: "main",
          visible: true,
        },
        { id: "xp", label: "Work Experience", col: "main", visible: true },
        { id: "edu", label: "Education", col: "main", visible: true },
        { id: "projects", label: "Projects", col: "main", visible: true },
        { id: "contact", label: "Contact", col: "left", visible: true },
        {
          id: "techSkills",
          label: "Technical Skills",
          col: "left",
          visible: true,
        },
        { id: "softSkills", label: "Soft Skills", col: "left", visible: true },
        { id: "certs", label: "Certifications", col: "left", visible: true },
        { id: "langs", label: "Languages", col: "left", visible: true },
        {
          id: "hobbies",
          label: "Hobbies & Interests",
          col: "left",
          visible: true,
        },
        { id: "references", label: "References", col: "left", visible: true },
      ];

      const IC = {
        mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z"/><path d="M22 6l-10 7L2 6"/></svg>`,
        phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.9v3a2 2 0 01-2.2 2A20 20 0 012 4.7a2 2 0 012-2.2H7a2 2 0 012 1.7c.1.9.3 1.8.7 2.7a2 2 0 01-.5 2.1L7.9 10a16 16 0 006.6 6.6l1.3-1.3a2 2 0 012-.5c.9.4 1.8.6 2.7.7A2 2 0 0122 17z"/></svg>`,
        pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.2 1.5-2.2 3v5.6H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm1.8 13H3.5V9h3.6v11.4z"/></svg>`,
        github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.2 21.4 23.5 17 23.5 12 23.5 5.7 18.3.5 12 .5z"/></svg>`,
        globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>`,
        telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.3L2.6 11.7c-1.3.5-1.3 1.2-.2 1.6l4.9 1.5 1.9 5.8c.2.6.5.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8L22.9 5c.3-1.3-.4-1.8-1.6-1.3-.1.1-.2.2-.3.3z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
        tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
        twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        summary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
        xp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
        edu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 2.5 6 2.5s6-1 6-2.5v-5"/></svg>`,
        skills: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        certs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/></svg>`,
        langs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>`,
        hobbies: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.6z"/></svg>`,
        proj: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`,
        contact: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        custom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
        ref: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M17 11h6"/></svg>`,
      };

      const SOC_COLORS = {
        linkedin: "#0A66C2",
        github: "#181717",
        website: "#6366f1",
        telegram: "#26A5E4",
        facebook: "#1877F2",
        youtube: "#FF0000",
        instagram: "#E4405F",
        tiktok: "#010101",
        twitter: "#1DA1F2",
      };

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      //  STATE
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      const S = {
        template: "t1",
        color: "blue",
        font: "",
        photoShape: "circle",
        photoSz: 88,
        colW: "215px",
        nameSz: 24,
        nameWt: "800",
        titleSz: 11,
        bodySz: 10,
        secSz: 9.5,
        secGap: 8,
        showHR: true,
        photo: null,
        fname: "",
        lname: "",
        title: "",
        email: "",
        phone: "",
        location: "",
        gender: "",
        nationality: "",
        birthplace: "",
        dob: "",
        primary: "",
        secondary: "",
        preparatory: "",
        linkedin: "",
        github: "",
        website: "",
        telegram: "",
        facebook: "",
        youtube: "",
        instagram: "",
        tiktok: "",
        twitter: "",
        summary: "",
        hobbies: "",
        sections: JSON.parse(JSON.stringify(DSEC)),
        xp: [],
        edu: [],
        certs: [],
        langs: [],
        techSkills: [],
        softSkills: [],
        projects: [],
        customSecs: [],
        references: [],
        photoPos: "center",
        optPersonal: true,
        optEduLevels: true,
        optReferences: true,
        showPhoto: true,
      };

      let zl = 0.72,
        dragSrc = null,
        _renderTimer = null;

      const esc = (s) =>
        s ? DOMPurify.sanitize(String(s), { ALLOWED_TAGS: [] }) : "";
      const uid = () => "u" + Math.random().toString(36).slice(2, 8);
      const gC = () => COLORS.find((c) => c.id === S.color) || COLORS[0];
      const gT = () =>
        TEMPLATES.find((t) => t.id === S.template) || TEMPLATES[0];
      const rv = (v, c) =>
        v
          ? v
              .replace(/\$c1/g, c.c1)
              .replace(/\$c2/g, c.c2)
              .replace(/\$c3/g, c.c3)
          : "";

      function toast(msg) {
        const t = document.getElementById("toast");
        document.getElementById("toastMsg").textContent = msg;
        t.classList.add("show");
        clearTimeout(t._to);
        t._to = setTimeout(() => t.classList.remove("show"), 2500);
      }

      function scheduleRender() {
        syncFields();
        updateComp();
        saveState();
        clearTimeout(_renderTimer);
        _renderTimer = setTimeout(() => {
          document.getElementById("cvDoc").innerHTML = renderCV();
          applyZoom();
          _renderTimer = null;
        }, 60);
      }

      function syncFields() {
        const F = [
          "fname",
          "lname",
          "title",
          "email",
          "phone",
          "location",
          "linkedin",
          "github",
          "website",
          "telegram",
          "summary",
          "hobbies",
          "facebook",
          "youtube",
          "instagram",
          "tiktok",
          "twitter",
          "gender",
          "nationality",
          "birthplace",
          "dob",
          "primary",
          "secondary",
          "preparatory",
        ];
        F.forEach((k) => {
          const el = document.getElementById("f_" + k);
          if (el) S[k] = el.value;
        });
        const op = document.getElementById("optShowPersonal");
        if (op) S.optPersonal = op.checked;
        const oe = document.getElementById("optShowEduLevels");
        if (oe) S.optEduLevels = oe.checked;
        const or = document.getElementById("optShowReferences");
        if (or) S.optReferences = or.checked;
      }

      function updateComp() {
        const sc =
          [
            S.fname,
            S.lname,
            S.title,
            S.email,
            S.phone,
            S.location,
            S.summary,
            S.photo,
          ].filter(Boolean).length +
          (S.xp.length ? 2 : 0) +
          (S.edu.length ? 1 : 0) +
          (S.techSkills.length >= 3 ? 1 : 0);
        const pct = Math.min(100, Math.round((sc / 13) * 100));
        const el = document.getElementById("compPct");
        const fl = document.getElementById("compFill");
        if (el) el.textContent = pct + "%";
        if (fl) fl.style.width = pct + "%";
      }

      function saveState() {
        try {
          localStorage.setItem("hamidcv_pro", JSON.stringify(S));
        } catch (e) {}
      }

      // ── PHOTO ────────────────────────────────────────────────
      function setPhotoPos(pos) {
        S.photoPos = pos;
        S._photoPosManuallySet = true;
        ["left", "center", "right"].forEach((p) => {
          const btn = document.getElementById(
            "pp" + p.charAt(0).toUpperCase() + p.slice(1),
          );
          if (!btn) return;
          if (p === pos) {
            btn.style.borderColor = "#2563eb";
            btn.style.background = "#eff6ff";
            btn.style.color = "#2563eb";
          } else {
            btn.style.borderColor = "#e2e8f0";
            btn.style.background = "#f8fafc";
            btn.style.color = "#64748b";
          }
        });
        scheduleRender();
      }

      function handlePhoto(e) {
        const f = e.target.files[0];
        if (!f) return;
        if (f.size > 5 * 1024 * 1024) {
          toast("Image too large — max 5MB");
          return;
        }
        const r = new FileReader();
        r.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const c = document.createElement("canvas"),
              sz = 300;
            c.width = c.height = sz;
            const ctx = c.getContext("2d");
            const sc = Math.min(sz / img.width, sz / img.height);
            ctx.drawImage(
              img,
              (sz - img.width * sc) / 2,
              (sz - img.height * sc) / 2,
              img.width * sc,
              img.height * sc,
            );
            S.photo = c.toDataURL("image/jpeg", 0.92);
            const thumb = document.getElementById("photoThumb");
            thumb.src = S.photo;
            thumb.style.display = "block";
            document.getElementById("pzonePh").style.display = "none";
            scheduleRender();
            saveState();
            toast("Photo added!");
          };
          img.src = ev.target.result;
        };
        r.readAsDataURL(f);
        e.target.value = "";
      }

      // ── TABS ─────────────────────────────────────────────────
      document.querySelectorAll(".stab").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".stab")
            .forEach((b) => b.classList.remove("active"));
          document
            .querySelectorAll(".spanel")
            .forEach((p) => p.classList.remove("active"));
          btn.classList.add("active");
          document
            .getElementById("tab-" + btn.dataset.tab)
            .classList.add("active");
          if (btn.dataset.tab === "ats") runATS();
          if (btn.dataset.tab === "design") buildDesignTab();
        });
      });

      // ── SECTIONS TAB ─────────────────────────────────────────
      function buildSectionTab() {
        const el = document.getElementById("secList");
        if (!el) return;
        el.innerHTML = S.sections
          .map(
            (sec, i) =>
              `<div class="sec-item" draggable="true" data-i="${i}" ondragstart="dragSec(event)" ondragover="dragSecOver(event)" ondrop="dropSec(event)">
          <span class="sec-drag"><svg width="9" height="13" viewBox="0 0 9 13" fill="currentColor"><circle cx="2.5" cy="2" r="1.3"/><circle cx="6.5" cy="2" r="1.3"/><circle cx="2.5" cy="6.5" r="1.3"/><circle cx="6.5" cy="6.5" r="1.3"/><circle cx="2.5" cy="11" r="1.3"/><circle cx="6.5" cy="11" r="1.3"/></svg></span>
          <span class="sec-lbl">${esc(sec.label)}</span>
          <select class="sec-col" onchange="S.sections[${i}].col=this.value;scheduleRender()">
            <option value="left"${sec.col === "left" ? " selected" : ""}>Left</option>
            <option value="main"${sec.col === "main" ? " selected" : ""}>Main</option>
          </select>
          <button class="sec-toggle ${sec.visible ? "on" : ""}" onclick="S.sections[${i}].visible=!S.sections[${i}].visible;buildSectionTab();scheduleRender()">${sec.visible ? "ON" : "OFF"}</button>
        </div>`,
          )
          .join("");
      }

      function dragSec(e) {
        dragSrc = +e.currentTarget.dataset.i;
      }
      function dragSecOver(e) {
        e.preventDefault();
      }
      function dropSec(e) {
        e.preventDefault();
        const to = +e.currentTarget.dataset.i;
        if (dragSrc === null || dragSrc === to) return;
        const moved = S.sections.splice(dragSrc, 1)[0];
        S.sections.splice(to, 0, moved);
        buildSectionTab();
        scheduleRender();
      }

      // ── ITEM CARD TABS ────────────────────────────────────────
      function buildXPTab() {
        document.getElementById("xpList").innerHTML = S.xp
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.role) || "New Position"}</span>
          <button class="iremove" onclick="S.xp.splice(${i},1);buildXPTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Job Title</label><input value="${esc(x.role)}" oninput="S.xp[${i}].role=this.value;scheduleRender()"></div>
          <div class="frow">
            <div class="fgroup"><label>Company</label><input value="${esc(x.company)}" oninput="S.xp[${i}].company=this.value;scheduleRender()"></div>
            <div class="fgroup"><label>Period</label><input value="${esc(x.period)}" oninput="S.xp[${i}].period=this.value;scheduleRender()" placeholder="01/2023–Present"></div>
          </div>
          <div class="fgroup"><label>Description (• for bullets)</label><textarea rows="5" oninput="S.xp[${i}].desc=this.value;scheduleRender()">${esc(x.desc)}</textarea></div>
        </div></div>`,
          )
          .join("");
      }

      function buildEduTab() {
        document.getElementById("eduList").innerHTML = S.edu
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.degree) || "Degree"}</span>
          <button class="iremove" onclick="S.edu.splice(${i},1);buildEduTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Qualification</label><input value="${esc(x.degree)}" oninput="S.edu[${i}].degree=this.value;scheduleRender()"></div>
          <div class="frow">
            <div class="fgroup"><label>Institution</label><input value="${esc(x.school)}" oninput="S.edu[${i}].school=this.value;scheduleRender()"></div>
            <div class="fgroup"><label>Dates</label><input value="${esc(x.year)}" oninput="S.edu[${i}].year=this.value;scheduleRender()"></div>
          </div>
          <div class="frow">
            <div class="fgroup"><label>CGPA</label><input value="${esc(x.cgpa || "")}" oninput="S.edu[${i}].cgpa=this.value;scheduleRender()" placeholder="3.75"></div>
            <div class="fgroup"><label>Exit Exam</label><input value="${esc(x.exitexam || "")}" oninput="S.edu[${i}].exitexam=this.value;scheduleRender()" placeholder="75%"></div>
          </div>
          <div class="fgroup"><label>Honors / Notes</label><input value="${esc(x.notes || "")}" oninput="S.edu[${i}].notes=this.value;scheduleRender()"></div>
        </div></div>`,
          )
          .join("");

        document.getElementById("certList").innerHTML = S.certs
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.name) || "Certification"}</span>
          <button class="iremove" onclick="S.certs.splice(${i},1);buildEduTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Certification Name</label><input value="${esc(x.name)}" oninput="S.certs[${i}].name=this.value;scheduleRender()"></div>
          <div class="frow">
            <div class="fgroup"><label>Issuer</label><input value="${esc(x.issuer || "")}" oninput="S.certs[${i}].issuer=this.value;scheduleRender()"></div>
            <div class="fgroup"><label>Year</label><input value="${esc(x.year || "")}" oninput="S.certs[${i}].year=this.value;scheduleRender()"></div>
          </div>
        </div></div>`,
          )
          .join("");

        document.getElementById("langList").innerHTML = S.langs
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.lang) || "Language"}</span>
          <button class="iremove" onclick="S.langs.splice(${i},1);buildEduTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="frow">
            <div class="fgroup"><label>Language</label><input value="${esc(x.lang)}" oninput="S.langs[${i}].lang=this.value;scheduleRender()"></div>
            <div class="fgroup"><label>Level</label>
              <select onchange="S.langs[${i}].level=this.value;scheduleRender()">
                ${["Native", "Fluent", "Professional", "Intermediate", "Basic"].map((l) => `<option${l === x.level ? " selected" : ""}>${l}</option>`).join("")}
              </select>
            </div>
          </div>
        </div></div>`,
          )
          .join("");
      }

      function buildSkillsTab() {
        ["tech", "soft"].forEach((tp) => {
          const arr = tp === "tech" ? S.techSkills : S.softSkills;
          const sk = tp === "tech" ? "S.techSkills" : "S.softSkills";
          document.getElementById(tp + "List").innerHTML = arr
            .map(
              (x, i) =>
                `<div class="icard"><div class="ihead" onclick="togCard(this)">
              <span class="ihead-title">${esc(x.name) || "Skill"}</span>
              <button class="iremove" onclick="${sk}.splice(${i},1);buildSkillsTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
            </div><div class="ibody ${i === 0 ? "open" : ""}">
              <div class="fgroup"><label>Skill Name</label><input value="${esc(x.name)}" oninput="${sk}[${i}].name=this.value;scheduleRender()"></div>
              <div class="fgroup"><label>Proficiency</label>
                <div class="sdots">${[1, 2, 3, 4, 5].map((n) => `<div class="sdot${x.level >= n ? " on" : ""}" onclick="${sk}[${i}].level=${n};buildSkillsTab();scheduleRender()"></div>`).join("")}</div>
              </div>
            </div></div>`,
            )
            .join("");
        });
      }

      function buildProjTab() {
        document.getElementById("projList").innerHTML = S.projects
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.name) || "Project"}</span>
          <button class="iremove" onclick="S.projects.splice(${i},1);buildProjTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Project Name</label><input value="${esc(x.name)}" oninput="S.projects[${i}].name=this.value;scheduleRender()"></div>
          <div class="fgroup"><label>Description</label><textarea rows="3" oninput="S.projects[${i}].desc=this.value;scheduleRender()">${esc(x.desc)}</textarea></div>
          <div class="fgroup"><label>Technologies / Tools</label><input value="${esc(x.tech || "")}" oninput="S.projects[${i}].tech=this.value;scheduleRender()" placeholder="Excel, SPSS, SAP"></div>
          <div class="fgroup"><label>URL (optional)</label><input value="${esc(x.url || "")}" oninput="S.projects[${i}].url=this.value;scheduleRender()"></div>
        </div></div>`,
          )
          .join("");
      }

      function buildRefTab() {
        document.getElementById("refList").innerHTML = S.references
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.name) || "Reference"}</span>
          <button class="iremove" onclick="S.references.splice(${i},1);buildRefTab();scheduleRender();event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Full Name</label><input value="${esc(x.name)}" oninput="S.references[${i}].name=this.value;scheduleRender()"></div>
          <div class="fgroup"><label>Title / Position</label><input value="${esc(x.title || "")}" oninput="S.references[${i}].title=this.value;scheduleRender()"></div>
          <div class="frow">
            <div class="fgroup"><label>Phone</label><input value="${esc(x.phone || "")}" oninput="S.references[${i}].phone=this.value;scheduleRender()"></div>
            <div class="fgroup"><label>Email</label><input value="${esc(x.email || "")}" oninput="S.references[${i}].email=this.value;scheduleRender()"></div>
          </div>
        </div></div>`,
          )
          .join("");
      }

      function buildCustomTab() {
        document.getElementById("customList").innerHTML = S.customSecs
          .map(
            (x, i) =>
              `<div class="icard"><div class="ihead" onclick="togCard(this)">
          <span class="ihead-title">${esc(x.title) || "Custom Section"}</span>
          <button class="iremove" onclick="removeCustom(${i});event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        </div><div class="ibody ${i === 0 ? "open" : ""}">
          <div class="fgroup"><label>Section Title</label><input value="${esc(x.title)}" oninput="S.customSecs[${i}].title=this.value;updateCustomSecLabel('${x.id}',this.value);scheduleRender()"></div>
          <div class="fgroup"><label>Content (one line per item)</label><textarea rows="4" oninput="S.customSecs[${i}].content=this.value;scheduleRender()">${esc(x.content || "")}</textarea></div>
          <div class="fgroup"><label>Column</label>
            <select onchange="S.customSecs[${i}].col=this.value;scheduleRender()">
              <option value="main"${(x.col || "main") === "main" ? " selected" : ""}>Main</option>
              <option value="left"${(x.col || "main") === "left" ? " selected" : ""}>Left</option>
            </select>
          </div>
        </div></div>`,
          )
          .join("");
      }

      function updateCustomSecLabel(id, val) {
        const sec = S.sections.find((s) => s.id === "custom_" + id);
        if (sec) {
          sec.label = val || "Custom Section";
          buildSectionTab();
        }
      }

      function removeCustom(i) {
        const id = S.customSecs[i].id;
        S.customSecs.splice(i, 1);
        S.sections = S.sections.filter((s) => s.id !== "custom_" + id);
        buildCustomTab();
        buildSectionTab();
        scheduleRender();
      }

      function togCard(head) {
        head.nextElementSibling.classList.toggle("open");
      }

      // ── ADDERS ───────────────────────────────────────────────
      function addXP() {
        S.xp.unshift({
          id: uid(),
          role: "",
          company: "",
          period: "",
          desc: "",
        });
        buildXPTab();
        scheduleRender();
      }
      function addEdu() {
        S.edu.unshift({
          id: uid(),
          degree: "",
          school: "",
          year: "",
          cgpa: "",
          exitexam: "",
          notes: "",
        });
        buildEduTab();
        scheduleRender();
      }
      function addCert() {
        S.certs.unshift({ id: uid(), name: "", issuer: "", year: "" });
        buildEduTab();
        scheduleRender();
      }
      function addLang() {
        S.langs.push({ id: uid(), lang: "", level: "Intermediate" });
        buildEduTab();
        scheduleRender();
      }
      function addSkill(t) {
        if (t === "tech") S.techSkills.push({ id: uid(), name: "", level: 3 });
        else S.softSkills.push({ id: uid(), name: "", level: 3 });
        buildSkillsTab();
        scheduleRender();
      }
      function addProj() {
        S.projects.unshift({
          id: uid(),
          name: "",
          desc: "",
          tech: "",
          url: "",
        });
        buildProjTab();
        scheduleRender();
      }
      function addRef() {
        S.references.push({
          id: uid(),
          name: "",
          title: "",
          phone: "",
          email: "",
        });
        buildRefTab();
        scheduleRender();
      }
      function addCustom() {
        const id = uid();
        S.customSecs.unshift({
          id,
          title: "Custom Section",
          content: "",
          col: "main",
        });
        S.sections.push({
          id: "custom_" + id,
          label: "Custom Section",
          col: "main",
          visible: true,
        });
        buildCustomTab();
        buildSectionTab();
        scheduleRender();
      }

      // ── DESIGN TAB ───────────────────────────────────────────
      function buildDesignTab() {
        const c = gC();
        const cntEl = document.getElementById("tplCountLabel");
        if (cntEl) cntEl.textContent = `Template (${TEMPLATES.length} Layouts)`;
        document.getElementById("cswatches").innerHTML = COLORS.map(
          (cl, idx) =>
            `<div class="csw${S.color === cl.id ? " sel" : ""}" style="background:${cl.c1}" title="${cl.name}" onclick="setColor('${cl.id}')">${idx + 1}</div>`,
        ).join("");

        document.getElementById("tgrid").innerHTML = TEMPLATES.map((t, idx) => {
          const hBg = rv(t.hBg, c);
          const lBg = rv(t.lBg, c);
          const mBg = rv(t.mBg, c);
          const hFg = rv(t.hFg, c);
          const lFg = rv(t.lFg, c);
          return `<div class="tcard${S.template === t.id ? " sel" : ""}" onclick="setTpl('${t.id}')" title="${t.name}">
          <div class="tnum">${idx + 1}</div>
          <div class="tpreview-header" style="background:${hBg};color:${hFg};${t.hBB ? "border-bottom:" + rv(t.hBB, c) : ""}">
            <div class="tpreview-name" style="background:${hFg || "rgba(255,255,255,.5)"}"></div>
          </div>
          <div class="tpreview-body">
            <div class="tpreview-left" style="background:${lBg};${t.leftBorder ? "border-right:" + rv(t.leftBorder, c) : ""}">
              <div class="tpreview-line" style="background:${lFg || "rgba(0,0,0,.08)"}"></div>
              <div class="tpreview-line" style="background:${lFg || "rgba(0,0,0,.08)"}"></div>
              <div class="tpreview-line" style="background:${lFg || "rgba(0,0,0,.08)"}"></div>
            </div>
            <div class="tpreview-right" style="background:${mBg}">
              <div class="tpreview-line" style="background:#e2e8f0;width:90%"></div>
              <div class="tpreview-line" style="background:#f1f5f9;width:70%"></div>
              <div class="tpreview-line" style="background:#e2e8f0;width:80%"></div>
              <div class="tpreview-line" style="background:#f1f5f9;width:60%"></div>
            </div>
          </div>
          <div class="tlabel">${t.name}</div>
        </div>`;
        }).join("");

        const setRng = (id, val, vId, sfx) => {
          const el = document.getElementById(id);
          if (el) {
            el.value = val;
            document.getElementById(vId).textContent = val + sfx;
          }
        };
        setRng("nameSzSel", S.nameSz || 24, "nameSzVal", "px");
        setRng("titleSzSel", S.titleSz || 11, "titleSzVal", "px");
        setRng("bodySzSel", S.bodySz || 10, "bodySzVal", "px");
        setRng("secSzSel", S.secSz || 9.5, "secSzVal", "px");
        setRng("secGapSel", S.secGap || 8, "secGapVal", "px");
        setRng("photoSzSel", S.photoSz || 88, "photoSzVal", "px");
        const hr = document.getElementById("hrSel");
        if (hr) hr.value = S.showHR !== false ? "yes" : "no";
        const fs = document.getElementById("fontSel");
        if (fs) fs.value = S.font || "";
        const nw = document.getElementById("nameWtSel");
        if (nw) nw.value = S.nameWt || "800";
        const cw = document.getElementById("colWSel");
        if (cw) cw.value = S.colW || "215px";
        const ps = document.getElementById("photoShapeSel");
        if (ps) ps.value = S.photoShape || "circle";
      }

      function setColor(id) {
        S.color = id;
        buildDesignTab();
        scheduleRender();
      }
      function setTpl(id) {
        S.template = id;
        const tpl = TEMPLATES.find((t) => t.id === id);
        if (tpl && tpl.hL && !S._photoPosManuallySet) {
          S.photoPos = tpl.hL;
          setPhotoPos(tpl.hL);
        }
        buildDesignTab();
        scheduleRender();
        toast("Template: " + (tpl ? tpl.name : id));
      }

      // ── HELPERS ──────────────────────────────────────────────
      function toURL(raw) {
        if (!raw) return "";
        const s = raw.trim();
        if (!s) return "";
        if (/^https?:\/\//i.test(s)) return s;
        return "https://" + s;
      }

      function fmtDesc(text) {
        if (!text) return "";
        const items = text
          .split(/\r?\n/)
          .filter((l) => l.trim())
          .map((l) => {
            const clean = esc(l.replace(/^[•\-\*]\s*/, "").trim());
            return clean ? `<li>${clean}` : "";
          })
          .filter(Boolean)
          .join("");
        return items ? `<ul>${items}</ul>` : "";
      }

      // ── SECTION HEAD RENDERER ─────────────────────────────────
      // secHeadShape: 'box'|'underline'|'line'|'pill'|'tag'
      function secHead(icon, label, headBg, headFg, secSz, radius, shape) {
        const s = shape || "box";
        let style = "";
        let wrapStyle = "";
        if (s === "box") {
          style = `background:${headBg};color:${headFg};border-radius:${radius};font-size:${secSz}px;`;
        } else if (s === "underline") {
          style = `background:transparent;color:${headFg};border-bottom:2px solid ${headBg || headFg};border-radius:0;font-size:${secSz}px;padding-left:0;`;
        } else if (s === "line") {
          style = `background:transparent;color:${headFg};border-left:3px solid ${headBg || headFg};border-radius:0;font-size:${secSz}px;padding-left:8px;`;
        } else if (s === "pill") {
          style = `background:${headBg};color:${headFg};border-radius:50px;font-size:${secSz}px;`;
        } else if (s === "tag") {
          style = `background:${headBg};color:${headFg};border-radius:0 ${radius} ${radius} 0;font-size:${secSz}px;margin-left:-10px;padding-left:10px;`;
        } else {
          style = `background:${headBg};color:${headFg};border-radius:${radius};font-size:${secSz}px;`;
        }
        return `<div class="cv-sec-head" style="${style}">${icon}<span>${label}</span></div>`;
      }

      // ── CONTACT SECTION ──────────────────────────────────────
      function buildContactSection(c, lFg) {
        const items = [];
        if (S.email)
          items.push({ icon: IC.mail, text: esc(S.email), color: "#dc2626" });
        if (S.phone)
          items.push({ icon: IC.phone, text: esc(S.phone), color: "#0284c7" });
        if (S.location)
          items.push({ icon: IC.pin, text: esc(S.location), color: "#059669" });
        if (!items.length)
          return `<div class="cv-contact-block" style="opacity:.4;font-size:9.5px;padding:8px">Add contact details in Personal tab</div>`;
        return `<div class="cv-contact-block">${items
          .map(
            (it) => `
      <div class="cv-contact-item">
        <div class="cv-contact-icon" style="background:${it.color};color:#fff">${it.icon}</div>
        <span class="cv-contact-text" style="color:${lFg}">${it.text}</span>
      </div>`,
          )
          .join("")}</div>`;
      }

      function buildOptionalPersonal() {
        if (!S.optPersonal) return "";
        const parts = [];
        if (S.gender)
          parts.push(
            `<span class="cv-optional-item"><strong>Gender:</strong> ${esc(S.gender)}</span>`,
          );
        if (S.nationality)
          parts.push(
            `<span class="cv-optional-item"><strong>Nationality:</strong> ${esc(S.nationality)}</span>`,
          );
        if (S.birthplace)
          parts.push(
            `<span class="cv-optional-item"><strong>Place of Birth:</strong> ${esc(S.birthplace)}</span>`,
          );
        if (S.dob) {
          const d = new Date(S.dob);
          if (!isNaN(d.getTime()))
            parts.push(
              `<span class="cv-optional-item"><strong>Date of Birth:</strong> ${d.toLocaleDateString("en-GB")}</span>`,
            );
        }
        if (!parts.length) return "";
        return `<div class="cv-optional-block">${parts.join("")}</div>`;
      }

      function buildEduLevels() {
        if (!S.optEduLevels) return "";
        const levels = [
          { label: "Primary", val: S.primary },
          { label: "Secondary", val: S.secondary },
          { label: "Preparatory", val: S.preparatory },
        ];
        const parts = levels.filter((l) => l.val && l.val.trim());
        if (!parts.length) return "";
        return `<div class="cv-edu-levels-container">${parts
          .map(
            (l) => `
        <div class="cv-edu-level" style="border-left-color:${gC().c1}">
          <span class="cv-edu-label">${l.label}:</span>
          <span class="cv-edu-value">${esc(l.val)}</span>
        </div>`,
          )
          .join("")}</div>`;
      }

      const SECICONS = {
        summary: IC.summary,
        xp: IC.xp,
        edu: IC.edu,
        techSkills: IC.skills,
        softSkills: IC.skills,
        certs: IC.certs,
        langs: IC.langs,
        hobbies: IC.hobbies,
        projects: IC.proj,
        contact: IC.contact,
        references: IC.ref,
      };

      // ── RENDER SECTION ────────────────────────────────────────
      function renderSec(sec, tpl, c, bodySz, secSz, showHR, secGap) {
        const isLeft = sec.col === "left";
        const headBg = rv(isLeft ? tpl.lSHBg : tpl.mSHBg, c) || "transparent";
        const headFg = rv(isLeft ? tpl.lSHFg : tpl.mSHFg, c) || "#0f172a";
        const lFg = rv(tpl.lFg, c) || "#334155";
        const mFg = rv(tpl.mFg, c) || "#0f172a";
        const contentColor = isLeft ? lFg : mFg;
        const accentColor = c.c1;
        const icon = sec.id.startsWith("custom_")
          ? IC.custom
          : SECICONS[sec.id] || IC.custom;
        const radius = tpl.sr || "4px";

        // Determine shape for this column
        let shape = tpl.secHeadShape || "box";
        if (isLeft && tpl.lSecHeadShape) shape = tpl.lSecHeadShape;
        if (!isLeft && tpl.mSecHeadShape) shape = tpl.mSecHeadShape;

        let content = "";
        switch (sec.id) {
          case "contact":
            content = `<div class="cv-sec-body">${buildContactSection(c, contentColor)}${buildOptionalPersonal()}</div>`;
            break;
          case "summary":
            content = `<div class="cv-sec-body"><div class="cv-summary" style="font-size:${bodySz}px">${esc(S.summary) || "Add professional summary in Personal tab."}</div></div>`;
            break;
          case "xp":
            content = `<div class="cv-sec-body">${buildXPContent(bodySz, c)}</div>`;
            break;
          case "edu":
            content = `<div class="cv-sec-body">${buildEduContent(bodySz, c)}</div>`;
            break;
          case "techSkills":
            content = `<div class="cv-sec-body">${buildTechSkillsContent(bodySz, accentColor, contentColor)}</div>`;
            break;
          case "softSkills":
            content = `<div class="cv-sec-body">${buildSoftSkillsContent(bodySz, accentColor, contentColor)}</div>`;
            break;
          case "certs":
            content = `<div class="cv-sec-body">${buildCertsContent(bodySz, c)}</div>`;
            break;
          case "langs":
            content = `<div class="cv-sec-body">${buildLangsContent(bodySz, c, contentColor)}</div>`;
            break;
          case "hobbies":
            content = `<div class="cv-sec-body">${buildHobbiesContent(bodySz, accentColor, contentColor)}</div>`;
            break;
          case "projects":
            content = `<div class="cv-sec-body">${buildProjContent(bodySz, c)}</div>`;
            break;
          case "references":
            if (!S.optReferences) return "";
            content = `<div class="cv-sec-body">${buildRefContent(bodySz, c, contentColor)}</div>`;
            break;
          default:
            if (sec.id.startsWith("custom_")) {
              const cid = sec.id.replace("custom_", "");
              const item = S.customSecs.find((x) => x.id === cid);
              if (item)
                content = `<div class="cv-sec-body"><div style="font-size:${bodySz}px;line-height:1.7">${(
                  item.content || ""
                )
                  .split("\n")
                  .map((l) => esc(l.trim()))
                  .filter(Boolean)
                  .join("<br>")}</div></div>`;
            }
        }
        if (!content) return "";
        const gap = `<div style="height:${secGap}px"></div>`;
        const hr = showHR
          ? `<div style="height:1px;background:rgba(0,0,0,.07);margin:0 10px"></div>`
          : "";
        return `${gap}<div class="cv-sec">${secHead(icon, sec.label, headBg, headFg, secSz, radius, shape)}${content}</div>${hr}`;
      }

      // ── CONTENT BUILDERS ─────────────────────────────────────
      function buildXPContent(bodySz, c) {
        if (!S.xp.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add experience entries in Experience tab.</div>`;
        return S.xp
          .map(
            (x) => `<div class="cv-entry">
      <div class="cv-entry-role" style="font-size:${bodySz + 0.5}px;color:${c.c1}">${esc(x.role) || "Job Title"}</div>
      <div class="cv-entry-org" style="font-size:${bodySz}px">${esc(x.company) || "Company"}</div>
      <div class="cv-entry-period" style="font-size:${bodySz - 0.5}px">${esc(x.period) || "Dates"}</div>
      <div class="cv-entry-desc" style="font-size:${bodySz - 0.5}px">${fmtDesc(x.desc)}</div>
    </div>`,
          )
          .join("");
      }

      function buildEduContent(bodySz, c) {
        if (!S.edu.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add education in Education tab.</div>`;
        const eduLevels = buildEduLevels();
        return S.edu
          .map((e, i) => {
            const meta = [];
            if (e.cgpa) meta.push(`<b>CGPA:</b> ${esc(e.cgpa)}`);
            if (e.exitexam) meta.push(`<b>Exit Exam:</b> ${esc(e.exitexam)}`);
            if (e.notes) meta.push(esc(e.notes));
            return `<div class="cv-entry">
          <div class="cv-entry-role" style="font-size:${bodySz + 0.5}px;color:${c.c1}">${esc(e.degree) || "Degree"}</div>
          <div class="cv-entry-org" style="font-size:${bodySz}px">${esc(e.school) || "Institution"}</div>
          <div class="cv-entry-period" style="font-size:${bodySz - 0.5}px">${esc(e.year) || "Dates"}</div>
          ${meta.length ? `<div class="cv-entry-meta" style="font-size:${bodySz - 0.5}px">${meta.join(" · ")}</div>` : ""}
          ${i === 0 ? eduLevels : ""}
        </div>`;
          })
          .join("");
      }

      function buildTechSkillsContent(bodySz, fillColor, lFg) {
        if (!S.techSkills.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add skills in Skills tab.</div>`;
        return S.techSkills
          .map(
            (s) => `<div class="cv-skill">
      <div class="cv-skill-name" style="font-size:${bodySz}px;color:${lFg}">${esc(s.name)}</div>
      <div class="cv-skill-track"><div class="cv-skill-fill" style="width:${s.level * 20}%;background:${fillColor}"></div></div>
    </div>`,
          )
          .join("");
      }

      function buildSoftSkillsContent(bodySz, accentColor, contentColor) {
        if (!S.softSkills.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add soft skills in Skills tab.</div>`;
        return `<div class="cv-soft-list">${S.softSkills
          .map(
            (s) => `<div class="cv-soft-item" style="color:${contentColor}">
      <div class="cv-soft-dot" style="background:${accentColor}"></div>
      <span style="font-size:${bodySz}px">${esc(s.name)}</span>
    </div>`,
          )
          .join("")}</div>`;
      }

      function buildCertsContent(bodySz, c) {
        if (!S.certs.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add certifications in Education tab.</div>`;
        return S.certs
          .map(
            (
              cert,
            ) => `<div class="cv-cert" style="font-size:${bodySz}px;border-left-color:${c.c1}">
      <span style="font-weight:700">${esc(cert.name)}</span>${cert.issuer ? `<span style="opacity:.7"> · ${esc(cert.issuer)}</span>` : ""}${cert.year ? `<span style="opacity:.6"> (${esc(cert.year)})</span>` : ""}
    </div>`,
          )
          .join("");
      }

      function buildLangsContent(bodySz, c, lFg) {
        if (!S.langs.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add languages in Education tab.</div>`;
        return S.langs
          .map(
            (l) => `<div class="cv-lang" style="font-size:${bodySz}px">
      <span style="font-weight:700;color:${lFg}">${esc(l.lang)}</span>
      <span class="cv-lang-lv">${esc(l.level)}</span>
    </div>`,
          )
          .join("");
      }

      function buildHobbiesContent(bodySz, accentColor, contentColor) {
        const items = (S.hobbies || "")
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean);
        if (!items.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add hobbies in Skills tab.</div>`;
        return `<div class="cv-hobby-list">${items
          .map(
            (h) => `<div class="cv-hobby-item" style="color:${contentColor}">
      <div class="cv-hobby-bullet" style="background:${accentColor}"></div>
      <span style="font-size:${bodySz}px">${esc(h)}</span>
    </div>`,
          )
          .join("")}</div>`;
      }

      function buildProjContent(bodySz, c) {
        if (!S.projects.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add projects in Projects tab.</div>`;
        return S.projects
          .map(
            (p) => `<div class="cv-proj">
      <div class="cv-proj-name" style="font-size:${bodySz + 0.5}px;color:${c.c1};border-left-color:${c.c1}">${esc(p.name) || "Project Name"}</div>
      <div class="cv-proj-desc" style="font-size:${bodySz - 0.5}px">${esc(p.desc) || "Description"}</div>
      ${p.tech ? `<div class="cv-proj-tech" style="font-size:${bodySz - 1}px">Stack: ${esc(p.tech)}</div>` : ""}
      ${p.url ? `<div class="cv-proj-tech" style="font-size:${bodySz - 1}px;opacity:.5"><a href="${esc(toURL(p.url))}" target="_blank" style="color:${c.c1};text-decoration:none">${esc(p.url)}</a></div>` : ""}
    </div>`,
          )
          .join("");
      }

      function buildRefContent(bodySz, c, lFg) {
        if (!S.references.length)
          return `<div style="font-size:${bodySz}px;opacity:.4;padding:4px">Add references in Extra tab.</div>`;
        return S.references
          .map(
            (
              r,
            ) => `<div class="cv-entry" style="padding:3px 0;border-bottom:1px dashed rgba(0,0,0,.06)">
      <div style="font-weight:700;font-size:${bodySz}px;color:${c.c1}">${esc(r.name)}</div>
      <div style="font-size:${bodySz - 0.5}px;opacity:.8">${esc(r.title || "")}</div>
      <div style="font-size:${bodySz - 1}px;opacity:.6">${r.phone ? esc(r.phone) : ""}${r.phone && r.email ? " · " : ""}${r.email ? esc(r.email) : ""}</div>
    </div>`,
          )
          .join("");
      }

      function headerSocials(hFg) {
        const pairs = [
          ["linkedin", S.linkedin],
          ["github", S.github],
          ["website", S.website],
          ["telegram", S.telegram],
          ["facebook", S.facebook],
          ["youtube", S.youtube],
          ["instagram", S.instagram],
          ["tiktok", S.tiktok],
          ["twitter", S.twitter],
        ];
        const links = pairs.filter(([k, v]) => v && v.trim());
        if (!links.length) return "";
        return `<div class="cv-socials-h">${links
          .map(([k, v]) => {
            const url = toURL(v);
            const icon = k === "website" ? IC.globe : IC[k] || IC.globe;
            const bg = SOC_COLORS[k] || "#555";
            return `<a class="cv-soc-icon" href="${esc(url)}" target="_blank" style="background:${bg};color:#fff">${icon}</a>`;
          })
          .join("")}</div>`;
      }

      function photoEl() {
        if (!S.photo || S.showPhoto === false) return "";
        const sz = S.photoSz || 88;
        const shape = S.photoShape || "circle";
        // Universal border/shadow treatment — reads cleanly on any header, sidebar,
        // light, dark or gradient background without needing per-template contrast logic.
        return `<img src="${S.photo}" class="cv-photo sh-${shape}" style="width:${sz}px;height:${sz}px;border:3px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.08),0 2px 10px rgba(0,0,0,.18)" alt="Profile Photo">`;
      }

      // ── MAIN RENDER ───────────────────────────────────────────
      function renderCV() {
        const tpl = gT(),
          c = gC();
        const font = S.font || tpl.font || "Inter";
        const colW = S.colW || "215px";
        const nameSz = S.nameSz || 24;
        const nameWt = S.nameWt || "800";
        const titleSz = S.titleSz || 11;
        const bodySz = S.bodySz || 10;
        const secSz = S.secSz || 9.5;
        const secGap = S.secGap !== undefined ? S.secGap : 8;
        const showHR = S.showHR !== false;

        const hBg = rv(tpl.hBg, c);
        const hFg = rv(tpl.hFg, c);
        const hBB = rv(tpl.hBB || "", c);
        const lBg = rv(tpl.lBg, c);
        const lFg = rv(tpl.lFg, c);
        const mBg = rv(tpl.mBg, c);
        const mFg = rv(tpl.mFg, c);
        const leftBorder = tpl.leftBorder ? rv(tpl.leftBorder, c) : "none";
        const leftStyle = tpl.leftStyle ? rv(tpl.leftStyle, c) : "";
        const mainStyle = tpl.mainStyle ? rv(tpl.mainStyle, c) : "";

        const pos = S.photoPos || tpl.hL || "left";
        const photo = photoEl();
        const socials = headerSocials(hFg);
        const photoBlock =
          photo || socials
            ? `<div class="cv-photo-wrap">${photo}${socials}</div>`
            : "";
        const fullName =
          `${esc(S.fname) || ""} ${esc(S.lname) || ""}`.trim() ||
          "Your Full Name";
        const nameColor = hFg || "#0f172a";

        // Title color — pick readable contrast vs header bg
        const hBgLow = (hBg || "").toLowerCase();
        const isDarkHeader =
          hBg &&
          (hBgLow.includes("#0") ||
            (hBgLow.includes("gradient") &&
              (hBgLow.includes("#0f") ||
                hBgLow.includes("#1") ||
                hBgLow.includes("#3d") ||
                hBgLow.includes("#7c"))));
        const titleColor =
          hFg === "#ffffff" || hFg === "#fff" || isDarkHeader
            ? "rgba(255,255,255,.85)"
            : c.c1;

        const nameBlock = `<div class="cv-name-block">
      <div class="cv-name" style="font-size:${nameSz}px;font-weight:${nameWt};color:${nameColor}">${fullName}</div>
      <div class="cv-title" style="font-size:${titleSz}px;color:${titleColor}">${esc(S.title) || "Job Title / Professional Headline"}</div>
    </div>`;

        let headerInnerContent = "";
        if (pos === "right") headerInnerContent = `${nameBlock}${photoBlock}`;
        else if (pos === "center")
          headerInnerContent = `<div style="display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;gap:7px">
        ${photoBlock}
        <div style="text-align:center">
          <div class="cv-name" style="font-size:${nameSz}px;font-weight:${nameWt};color:${nameColor}">${fullName}</div>
          <div class="cv-title" style="font-size:${titleSz}px;color:${titleColor}">${esc(S.title) || "Job Title / Professional Headline"}</div>
        </div>
      </div>`;
        else headerInnerContent = `${photoBlock}${nameBlock}`;

        const allSections = [...S.sections];
        const leftSecs = allSections.filter(
          (s) => s.visible && s.col === "left",
        );
        const mainSecs = allSections.filter(
          (s) => s.visible && s.col === "main",
        );
        const leftHTML = leftSecs
          .map((s) => renderSec(s, tpl, c, bodySz, secSz, showHR, secGap))
          .join("");
        const mainHTML = mainSecs
          .map((s) => renderSec(s, tpl, c, bodySz, secSz, showHR, secGap))
          .join("");

        // ── LAYOUT A: Sidebar Profile — photo + socials pinned at the top of the
        // left sidebar; name & title sit at the top of the main column instead of
        // a full-width header bar. Used by templates flagged tpl.sidebarProfile.
        if (tpl.sidebarProfile) {
          const sidebarTop =
            photo || socials
              ? `<div class="cv-sidebar-profile" style="border-bottom:1px solid rgba(0,0,0,.08)">${photo}${socials}</div>`
              : "";
          const mainNameBlock = `<div class="cv-main-nameblock" style="${hBB ? "border-bottom:" + hBB : ""}">
          <div class="cv-name" style="font-size:${nameSz}px;font-weight:${nameWt};color:${mFg || "#0f172a"}">${fullName}</div>
          <div class="cv-title" style="font-size:${titleSz}px;color:${c.c1}">${esc(S.title) || "Job Title / Professional Headline"}</div>
        </div>`;
          return `<div class="cv-root" style="font-family:'${font}',sans-serif">
          <div class="cv-body">
            <div class="cv-left" style="width:${colW};background:${lBg};color:${lFg};${leftBorder !== "none" ? "border-right:" + leftBorder : ""};${leftStyle}">
              ${sidebarTop}
              ${leftHTML || `<div style="padding:10px;font-size:9.5px;opacity:.35">Configure sections using the Sections tab</div>`}
            </div>
            <div class="cv-main" style="background:${mBg};color:${mFg};flex:1;border-left:${leftBorder === "none" ? "1px solid rgba(0,0,0,.07)" : "none"};${mainStyle}">
              ${mainNameBlock}
              ${mainHTML || `<div style="padding:10px;font-size:9.5px;opacity:.35">Configure sections using the Sections tab</div>`}
            </div>
          </div>
        </div>`;
        }

        // ── LAYOUT B: Classic full-width header (all other templates) ──
        return `<div class="cv-root" style="font-family:'${font}',sans-serif">
      <div class="cv-header" style="background:${hBg};${hBB ? "border-bottom:" + hBB : ""}">
        <div class="cv-header-inner" style="align-items:center;gap:16px;padding:20px 24px">${headerInnerContent}</div>
      </div>
      <div class="cv-body">
        <div class="cv-left" style="width:${colW};background:${lBg};color:${lFg};${leftBorder !== "none" ? "border-right:" + leftBorder : ""};${leftStyle}">
          ${leftHTML || `<div style="padding:10px;font-size:9.5px;opacity:.35">Configure sections using the Sections tab</div>`}
        </div>
        <div class="cv-main" style="background:${mBg};color:${mFg};flex:1;border-left:${leftBorder === "none" ? "1px solid rgba(0,0,0,.07)" : "none"};${mainStyle}">
          ${mainHTML || `<div style="padding:10px;font-size:9.5px;opacity:.35">Configure sections using the Sections tab</div>`}
        </div>
      </div>
    </div>`;
      }

      // ── ZOOM ─────────────────────────────────────────────────
      function applyZoom() {
        const wrap = document.getElementById("cvWrap");
        if (!wrap) return;
        const scroll = document.getElementById("pvScroll");
        if (zl === 0) {
          const aw = scroll ? scroll.clientWidth - 48 : 746;
          zl = Math.min(1.0, aw / 794);
        }
        wrap.style.transform = `scale(${zl})`;
        wrap.style.transformOrigin = "top center";
        document.getElementById("zval").textContent =
          Math.round(zl * 100) + "%";
        const doc = document.getElementById("cvDoc");
        if (doc) {
          const extra = doc.offsetHeight * (zl - 1);
          wrap.style.marginBottom = (extra > 0 ? extra : 0) + "px";
        }
      }

      function zoom(d) {
        if (d === 0) {
          zl = 0;
          applyZoom();
          return;
        }
        zl = Math.min(1.5, Math.max(0.25, (zl || 0.72) + d));
        applyZoom();
      }

      // ── PRINT ────────────────────────────────────────────────
      function doPrint() {
        syncFields();
        const fn = `${S.fname || "CV"}_${S.lname || ""}`
          .trim()
          .replace(/\s+/g, "_");
        document.title = fn + "_CV";
        window.print();
        setTimeout(() => {
          document.title = "HAMIDCV — Professional CV Builder";
        }, 1500);
      }

      // ── ATS ──────────────────────────────────────────────────
      function runATS() {
        syncFields();
        const checks = [];
        const chk = (label, pass, crit = false) =>
          checks.push({ label, pass, crit });

        chk("Full name present", !!(S.fname && S.lname), true);
        chk(
          "Email address included",
          !!(S.email && S.email.includes("@")),
          true,
        );
        chk(
          "Phone number listed",
          !!(S.phone && S.phone.trim().length >= 7),
          true,
        );
        chk("Location / address present", !!(S.location && S.location.trim()));
        chk("Professional photo", !!(S.photo && S.showPhoto !== false));
        chk(
          "Job title / headline",
          !!(S.title && S.title.trim().length >= 3),
          true,
        );
        const sw = (S.summary || "").trim().split(/\s+/).filter(Boolean).length;
        chk("Professional summary present", sw >= 10, true);
        chk(`Summary ≥50 words (${sw} found)`, sw >= 50);
        chk("Work experience added", S.xp.length >= 1, true);
        chk("Multiple roles (career growth)", S.xp.length >= 2);
        const allDesc = S.xp.map((x) => x.desc || "").join(" ");
        const verbs = [
          "led",
          "managed",
          "developed",
          "implemented",
          "achieved",
          "increased",
          "reduced",
          "built",
          "analyzed",
          "improved",
          "delivered",
          "optimized",
          "launched",
          "trained",
          "resolved",
          "coordinated",
          "designed",
          "created",
          "supported",
          "executed",
        ];
        const vHits = verbs.filter((v) =>
          new RegExp("\\b" + v, "i").test(allDesc),
        );
        chk(
          `Action verbs (${vHits.length}/${verbs.length})`,
          vHits.length >= 4,
        );
        chk(
          "Quantified results (% or numbers)",
          /\d+\s*%|\d+\+?\s*(team|staff|project|year|month|million|clients|users|revenue|budget|k\b)/i.test(
            allDesc,
          ),
        );
        chk("Education section present", S.edu.length >= 1, true);
        chk(
          "CGPA listed",
          S.edu.some((e) => e.cgpa && parseFloat(e.cgpa) > 0),
        );
        chk(
          `Technical skills ≥5 (${S.techSkills.length})`,
          S.techSkills.length >= 5,
          true,
        );
        chk(
          `Soft skills ≥3 (${S.softSkills.length})`,
          S.softSkills.length >= 3,
        );
        chk("Languages listed", S.langs.length >= 1);
        chk("Certifications present", S.certs.length >= 1);
        chk(
          "Online presence (LinkedIn/GitHub)",
          !!(S.linkedin || S.github || S.website),
        );
        chk("Projects / portfolio work", S.projects.length >= 1);
        chk("References present", S.references.length >= 1);
        chk("No graphics-only header (ATS-safe)", true); // all our templates use text headers

        const crit = checks.filter((c) => c.crit);
        const noncrit = checks.filter((c) => !c.crit);
        const score = Math.round(
          (crit.filter((c) => c.pass).length / Math.max(1, crit.length)) * 60 +
            (noncrit.filter((c) => c.pass).length /
              Math.max(1, noncrit.length)) *
              40,
        );

        const numEl = document.getElementById("atsNum");
        const fgEl = document.getElementById("atsFg");
        const lblEl = document.getElementById("atsLabel");
        const chkEl = document.getElementById("atsChecks");
        if (numEl) numEl.textContent = score;
        const circ = 138.23;
        if (fgEl) {
          fgEl.setAttribute("stroke-dasharray", circ);
          fgEl.setAttribute("stroke-dashoffset", circ - (score / 100) * circ);
          fgEl.style.stroke =
            score >= 80 ? "#059669" : score >= 55 ? "#d97706" : "#dc2626";
        }
        if (lblEl) {
          lblEl.textContent =
            score >= 80
              ? "🎉 Excellent ATS Score"
              : score >= 60
                ? "👍 Good — Minor Gaps"
                : score >= 40
                  ? "⚠️ Needs Improvement"
                  : "❌ Critical Issues";
          lblEl.style.color =
            score >= 80
              ? "#059669"
              : score >= 60
                ? "#16a34a"
                : score >= 40
                  ? "#d97706"
                  : "#dc2626";
        }
        if (chkEl) {
          chkEl.innerHTML =
            checks
              .map(
                (ch) => `
          <div class="ats-chk ${ch.pass ? "ats-ok" : ch.crit ? "ats-fail" : "ats-warn"}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              ${ch.pass ? '<path d="M20 6L9 17l-5-5"/>' : ch.crit ? '<path d="M18 6L6 18M6 6l12 12"/>' : '<circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>'}
            </svg>
            <span>${esc(ch.label)}</span>
          </div>`,
              )
              .join("") +
            `<div style="text-align:center;font-size:10px;color:#64748b;padding:6px;border-top:1px solid #f1f5f9;margin-top:3px">${checks.filter((c) => c.pass).length}/${checks.length} checks passed</div>`;
        }
      }

      // ── SAMPLE DATA ──────────────────────────────────────────
      function loadSampleData() {
        Object.assign(S, {
          fname: "Selam",
          lname: "Tesfaye",
          title:
            "Business Management Graduate | Organizational Analyst | Strategic Planner",
          email: "selam.tesfaye@email.com",
          phone: "+251 911 234 567",
          location: "Addis Ababa, Ethiopia",
          gender: "Female",
          nationality: "Ethiopian",
          birthplace: "Hawassa, Ethiopia",
          dob: "2000-03-15",
          primary: "Hawassa Primary School, 2006–2011",
          secondary: "Hawassa General Secondary School, 2011–2015",
          preparatory: "Hawassa Preparatory School, 2015–2017",
          summary:
            "Results-driven BSc graduate in Arts in Management with a strong foundation in organizational behavior, human resource management, and business strategy. Demonstrated ability to analyze operational inefficiencies and implement process improvements that increase productivity by up to 20%. Proficient in project coordination, stakeholder management, and data-driven decision-making. Seeking a challenging management or analyst role to leverage my academic training and internship experience in a dynamic organization committed to sustainable growth.",
          linkedin: "linkedin.com/in/selamtesfaye",
          github: "",
          website: "",
          telegram: "t.me/selamtesfaye",
          hobbies:
            "Strategic Board Games, Public Speaking, Reading Business Books, Community Volunteering, Hiking",
        });
        S.xp = [
          {
            id: uid(),
            role: "Management Intern",
            company: "Awash Bank S.C. — Hawassa Branch",
            period: "Jun 2023 – Sep 2023",
            desc: `• Analyzed customer service workflows and identified 3 key bottlenecks reducing processing time by 18%\n• Assisted the branch manager in coordinating daily operations and staff scheduling for a team of 12\n• Prepared weekly performance reports and presented findings to senior management\n• Supported the HR department in onboarding 5 new employees, developing orientation materials\n• Conducted customer satisfaction surveys and compiled actionable insights for branch leadership`,
          },
          {
            id: uid(),
            role: "Project Coordinator (Volunteer)",
            company: "BEZA Youth Center — Hawassa",
            period: "Jan 2023 – May 2023",
            desc: `• Coordinated a community entrepreneurship training program for 45 youth beneficiaries\n• Managed program budget of ETB 80,000 and ensured 98% utilization with full documentation\n• Liaised between NGO stakeholders, local government offices, and program participants\n• Developed monitoring and evaluation tools to track participant progress and program outcomes`,
          },
        ];
        S.edu = [
          {
            id: uid(),
            degree: "Bachelor of Science (BSc) in Arts in Management",
            school: "Hawassa University — College of Business & Economics",
            year: "Sep 2019 – Jul 2023",
            cgpa: "3.72",
            exitexam: "78",
            notes: "Graduated with Distinction · Dean's List 2021 & 2022",
          },
        ];
        S.certs = [
          {
            id: uid(),
            name: "Project Management Fundamentals (PMF)",
            issuer: "Ethiopian Management Institute (EMI)",
            year: "2023",
          },
          {
            id: uid(),
            name: "Microsoft Office Specialist — Excel",
            issuer: "Microsoft / Certiport",
            year: "2022",
          },
          {
            id: uid(),
            name: "Human Resource Management Essentials",
            issuer: "Coursera (University of Minnesota)",
            year: "2023",
          },
          {
            id: uid(),
            name: "Data Analysis with Excel",
            issuer: "Udemy",
            year: "2022",
          },
        ];
        S.langs = [
          { id: uid(), lang: "Amharic", level: "Native" },
          { id: uid(), lang: "English", level: "Fluent" },
          { id: uid(), lang: "Sidamigna", level: "Native" },
          { id: uid(), lang: "French", level: "Basic" },
        ];
        S.techSkills = [
          { id: uid(), name: "Microsoft Excel & Data Analysis", level: 5 },
          { id: uid(), name: "Business Report Writing", level: 5 },
          { id: uid(), name: "Project Management (PMF)", level: 4 },
          { id: uid(), name: "SPSS Statistical Analysis", level: 3 },
          { id: uid(), name: "Human Resource Management", level: 4 },
          { id: uid(), name: "PowerPoint & Presentations", level: 5 },
          { id: uid(), name: "SAP Business Basics", level: 3 },
          { id: uid(), name: "Financial Statement Analysis", level: 4 },
        ];
        S.softSkills = [
          { id: uid(), name: "Leadership & Team Management", level: 5 },
          { id: uid(), name: "Strategic Thinking", level: 5 },
          { id: uid(), name: "Communication & Negotiation", level: 5 },
          { id: uid(), name: "Problem Solving", level: 4 },
          { id: uid(), name: "Time Management", level: 5 },
          { id: uid(), name: "Critical Thinking", level: 4 },
          { id: uid(), name: "Adaptability", level: 5 },
          { id: uid(), name: "Attention to Detail", level: 4 },
        ];
        S.projects = [
          {
            id: uid(),
            name: "Organizational Efficiency Analysis — Senior Thesis",
            desc: "Conducted a comprehensive management audit of a mid-sized Ethiopian manufacturing firm. Developed a 40-page strategic recommendations report identifying 6 operational gaps. Proposed restructuring plan estimated to reduce overhead costs by 15% and improve cross-departmental communication.",
            tech: "SPSS, Microsoft Excel, Qualitative Interviews, Fishbone Diagrams",
            url: "",
          },
          {
            id: uid(),
            name: "HR Performance Management System Design",
            desc: "Designed a competency-based performance appraisal framework for a 50-employee retail organization. Included KPI templates, evaluation rubrics, and a biannual review schedule.",
            tech: "Microsoft Word, Excel, HR Best Practice Frameworks",
            url: "",
          },
          {
            id: uid(),
            name: "Market Entry Feasibility Study — Group Project",
            desc: "Led a 4-person team to analyze market entry opportunities for an Ethiopian SME in the agro-processing sector. Delivered SWOT analysis, Porter's Five Forces assessment, and a 3-year financial projection model.",
            tech: "Excel, PowerPoint, SWOT/PESTLE Frameworks",
            url: "",
          },
        ];
        S.references = [
          {
            id: uid(),
            name: "Dr. Yonas Girma",
            title: "Associate Professor, Management Dept. — Hawassa University",
            phone: "+251 912 345 678",
            email: "yonas.girma@hu.edu.et",
          },
          {
            id: uid(),
            name: "Ato Bekele Worku",
            title: "Branch Manager — Awash Bank S.C. Hawassa",
            phone: "+251 920 111 222",
            email: "bekele.worku@awashbank.com",
          },
        ];
        S.optPersonal = true;
        S.optEduLevels = true;
        S.optReferences = true;
        populateFields();
        buildAllTabs();
        scheduleRender();
        toast("Sample Management Graduate CV loaded!");
      }

      // ── IMPORT / EXPORT ──────────────────────────────────────
      function exportJSON() {
        syncFields();
        const b = new Blob([JSON.stringify(S, null, 2)], {
          type: "application/json",
        });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.download = `${S.fname || "CV"}_${S.lname || "cv"}_data.json`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        toast("Data exported!");
      }

      function importJSON() {
        document.getElementById("importFile").click();
      }

      function handleImport(e) {
        const f = e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = (ev) => {
          try {
            const d = JSON.parse(ev.target.result);
            Object.assign(S, d);
            if (!S.sections || !S.sections.length)
              S.sections = JSON.parse(JSON.stringify(DSEC));
            if (!S.customSecs) S.customSecs = [];
            if (!S.references) S.references = [];
            populateFields();
            buildAllTabs();
            buildDesignTab();
            scheduleRender();
            toast("Data imported!");
          } catch (ex) {
            toast("Invalid JSON file");
          }
        };
        r.readAsText(f);
        e.target.value = "";
      }

      function populateFields() {
        const F = [
          "fname",
          "lname",
          "title",
          "email",
          "phone",
          "location",
          "linkedin",
          "github",
          "website",
          "telegram",
          "summary",
          "hobbies",
          "facebook",
          "youtube",
          "instagram",
          "tiktok",
          "twitter",
          "gender",
          "nationality",
          "birthplace",
          "dob",
          "primary",
          "secondary",
          "preparatory",
        ];
        F.forEach((k) => {
          const el = document.getElementById("f_" + k);
          if (el) el.value = S[k] || "";
        });
        if (S.photo) {
          const thumb = document.getElementById("photoThumb");
          thumb.src = S.photo;
          thumb.style.display = "block";
          document.getElementById("pzonePh").style.display = "none";
        }
        if (S.photoPos) setPhotoPos(S.photoPos);
        const op = document.getElementById("optShowPersonal");
        if (op) op.checked = S.optPersonal !== false;
        const oe = document.getElementById("optShowEduLevels");
        if (oe) oe.checked = S.optEduLevels !== false;
        const or = document.getElementById("optShowReferences");
        if (or) or.checked = S.optReferences !== false;
        const osp = document.getElementById("optShowPhoto");
        if (osp) osp.checked = S.showPhoto !== false;
        document
          .getElementById("pzone")
          .classList.toggle("ph-disabled", S.showPhoto === false);
        document
          .getElementById("optPersonalGroup")
          .classList.toggle("hidden", S.optPersonal === false);
        document
          .getElementById("optEduGroup")
          .classList.toggle("hidden", S.optEduLevels === false);
      }

      function buildAllTabs() {
        buildXPTab();
        buildEduTab();
        buildSkillsTab();
        buildProjTab();
        buildRefTab();
        buildCustomTab();
        buildSectionTab();
      }

      // ── INIT ─────────────────────────────────────────────────
      (function init() {
        try {
          const d = localStorage.getItem("hamidcv_pro");
          if (d) {
            const p = JSON.parse(d);
            Object.assign(S, p);
          }
        } catch (e) {}
        // Defaults
        if (!S.sections || S.sections.length === 0)
          S.sections = JSON.parse(JSON.stringify(DSEC));
        if (!S.customSecs) S.customSecs = [];
        if (!S.references) S.references = [];
        if (!S.photoShape) S.photoShape = "circle";
        if (!S.photoSz) S.photoSz = 88;
        if (!S.colW) S.colW = "215px";
        if (!S.projects) S.projects = [];
        if (S.nameSz === undefined) S.nameSz = 24;
        if (!S.nameWt) S.nameWt = "800";
        if (S.titleSz === undefined) S.titleSz = 11;
        if (S.bodySz === undefined) S.bodySz = 10;
        if (S.secSz === undefined) S.secSz = 9.5;
        if (S.secGap === undefined) S.secGap = 8;
        if (S.showHR === undefined) S.showHR = true;
        if (S.showPhoto === undefined) S.showPhoto = true;
        if (!S.photoPos) S.photoPos = "center";
        if (S.optPersonal === undefined) S.optPersonal = true;
        if (S.optEduLevels === undefined) S.optEduLevels = true;
        if (S.optReferences === undefined) S.optReferences = true;
        if (!S.preparatory) S.preparatory = "";
        if (!S.template) S.template = "t1";
        if (!S.color) S.color = "blue";

        populateFields();
        buildAllTabs();
        buildDesignTab();
        scheduleRender();
        setTimeout(runATS, 800);
        window.addEventListener("resize", applyZoom);
        setInterval(() => {
          syncFields();
          saveState();
        }, 30000);
      })();
    