import { useState, useEffect } from "react";

const getRoute = () =>
  window.location.pathname.replace(/^\//, "").split("/")[0] || "home";

export function useRoute(): [string, (r: string) => void] {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (r: string) => {
    history.pushState(null, "", "/" + r);
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "smooth" as ScrollBehavior });
  };

  return [route, navigate];
}
