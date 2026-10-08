import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./MyComps/Header";
import Footer from "./MyComps/Footer";
import Body from "./MyComps/Body";
import BlogsPage from "./MyComps/BlogsPage";

// Hash-based routes (e.g. /#/blogs) — works on refresh anywhere, including
// GitHub Pages, without a router dependency. Bare hashes (#about, #projects,
// #skills) are plain homepage anchors and are not treated as routes.
const getRoute = () =>
  window.location.hash.startsWith("#/blogs") ? "blogs" : "home";

function App() {
  const [route, setRoute] = useState(getRoute);
  const prevRoute = useRef(route);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const changed = prevRoute.current !== route;
    prevRoute.current = route;

    if (route === "blogs") {
      if (changed) window.scrollTo({ top: 0, behavior: "instant" });
      document.title = "Blogs · Tanishq Saxena";
      return;
    }

    document.title = "Tanishq Saxena";

    // Coming back from Blogs with a section hash (e.g. #about): the target
    // only exists now that Body has mounted, so scroll to it. Use offsetTop
    // (layout position, ignoring the .fade-in translateY) minus the section's
    // scroll-margin-top, so the heading lands at the same spot as a normal
    // anchor click. The browser handles first load and homepage clicks.
    if (changed) {
      const anchor = window.location.hash.slice(1);
      if (anchor && !anchor.startsWith("/")) {
        const el = document.getElementById(anchor);
        if (el) {
          const margin =
            parseFloat(window.getComputedStyle(el).scrollMarginTop) || 0;
          window.scrollTo({
            top: el.offsetTop - margin,
            behavior: "smooth",
          });
        }
      }
    }
  }, [route]);

  return (
    <>
      <Header />
      {route === "blogs" ? <BlogsPage /> : <Body />}
      <Footer />
    </>
  );
}

export default App;
