import Navbar from "./_components/navbar";
import SideBar from "./_components/sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen grid md:grid-cols-[2fr_8fr] ">
      <SideBar />
      <div>
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
