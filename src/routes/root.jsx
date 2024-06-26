import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/topnavbar";
import BottomTabs from "../components/bottomnavbar";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();

  // Scroll to top whenever the location.pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const shouldHideTopNav = () => {
    // List the paths where BottomTabs should be hidden
    const pathsToHide = ["/updatecarddetails"];
    return pathsToHide.includes(location.pathname);
  };

  return (
    <>
      <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-white">
        {" "}
        {/* Think this is for the phone scroll */}
        {!shouldHideTopNav() && <NavBar />}
        <BottomTabs />
        <Outlet />
      </div>
    </>
  );
}
