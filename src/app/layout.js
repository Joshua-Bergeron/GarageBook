export const metadata = {
  title: "GarageBook",
  description: "Track your car's maintenance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
