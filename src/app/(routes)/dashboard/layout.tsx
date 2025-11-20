import { SideNav } from "./_components/side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex lg:justify-between w-[93%] lg:w-[97%] mx-auto">
      <div className="w-full lg:w-[25%] bg-white lg:rounded-xl hidden lg:block lg:sticky top-32 pt-8 h-fit">
        <SideNav />
      </div>
      <div className="w-full bg-white lg:w-[73%] rounded-xl mt-32 md:mt-40 lg:mt-32">{children}</div>
    </div>
  );
}
