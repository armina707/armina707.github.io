import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import FooterOne from "./FooterOne";
import HeaderOne from "./HeaderOne";

interface LayoutProps {
  children: ReactNode;
}
const LayoutOne = ({ children }: LayoutProps) => {
  return (
    <>
      <HelmetProvider>
        <HeaderOne />
        {children}
        <FooterOne />
      </HelmetProvider>
    </>
  );
};

export default LayoutOne;
