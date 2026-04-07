import "./globals.css";

export const metadata = {
  title: "Fiber Link",
  description: "Fiber Link — Join the waitlist and get early access.",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png",  media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
