import { LayoutDashboard, Edit3, TrendingUp, Users, Settings, Globe, LogOut } from "lucide-react"; 
import { useEffect } from "react";
import useRouteChange from "@/components/Hooks/useRouteChange";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle"; // Ensure this path is correct

type DashboardSideBarTypes = {
  title: string;
  url: string;
  icon: JSX.Element;
  section?: 'main' | 'bottom'; // Added section to differentiate items
};

export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard />,
    section: 'main',
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: <Edit3 />,
    section: 'main',
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: <TrendingUp />,
    section: 'main',
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: <Users />,
    section: 'main',
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Settings />,
    section: 'bottom',
  },
  {
    title: "View Site",
    url: "/",
    icon: <Globe />,
    section: 'bottom',
  },
];

const DashboardItem = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
  const pathname = usePathname();
  const router = useRouter();

  const LogoutHandler = () => {
    signOut();
    router.push("/sign-in");
  };

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname, setActiveRoute]);

  const renderItems = (items: DashboardSideBarTypes[], section: 'main' | 'bottom') => {
    return items
      .filter(item => item.section === section)
      .map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className={`p-2 py-5 flex items-center ${
            item.url === activeRoute ? "text-[#463bbd]" : ""
          }`}
        >
          <span className="text-3xl mr-2">{item.icon}</span>
          <span className="text-xl mr-2">{item.title}</span>
        </Link>
      ));
  };

  return (
    <div>
      {renderItems(sideBarItems, bottomContent ? 'bottom' : 'main')}
      
      {bottomContent && (
        <>
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Sign out */}
          <div
            className="p-2 py-5 flex items-center cursor-pointer border-b"
            onClick={LogoutHandler}
          >
            <span className="text-3xl mr-2">
              <LogOut />
            </span>
            <span className="text-xl">Sign Out</span>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardItem;
