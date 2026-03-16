import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import SplashScreen from "./SplashScreen";

export default function Root() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    const visited = sessionStorage.getItem(
      "hasVisitedNewGlamour",
    );
    if (visited) {
      setShowSplash(false);
      setHasVisited(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasVisited(true);
    sessionStorage.setItem("hasVisitedNewGlamour", "true");
  };

  if (showSplash && !hasVisited) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}