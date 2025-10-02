import { ReactNode } from "react";
import "react-bootstrap";
import "./styles.css";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex">
      <div>
        <KambazNavigation />
      </div>
      <div className="p-3 flex-fill" style={{ marginLeft: "120px" }}>
        {children}
      </div>
    </div>
  );
}
