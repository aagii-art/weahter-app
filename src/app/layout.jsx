import "./globals.css";

export const metadata = {
  title: "AXE",
  description: "PINECONY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
