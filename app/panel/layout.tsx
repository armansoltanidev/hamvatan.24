import toast, { Toaster } from "react-hot-toast";

import Navbar from "./_components/navbar";
import SideBar from "./_components/sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen grid md:grid-cols-[2fr_10fr]">
      <Toaster
        toastOptions={{
          style: {
            boxShadow: "none",
            border: "1px solid #0f172a28",
          },
        }}
      />
      <SideBar />
      <div>
        <Navbar />
        <div className="p-3 md:p-6">{children}</div>
      </div>
    </div>
  );
}
