import { ReactNode } from "react";
import Header from "../components/Header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
