import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./landingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">Sleep Tech</div>
        <div className="sub-title">PeeS</div>
        <div className="title-theme">PeeS be with you. Sleep with PeeS!</div>
      </header>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default LandingPage;
