import "@/assets/styles/global.css";

export const metatdata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
