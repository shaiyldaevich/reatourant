import Layout from "@/components/layout/Layout";
import ReduxProvider from "@/provider/Reduxprovider";
import { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <Layout>{children}</Layout>
    </ReduxProvider>
  );
};

export default LayoutClient;
