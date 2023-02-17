import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import  ConfigCatLogo  from '../assets/configcat-logo.svg'
import  LaunchDarklyLogo  from '../assets/launchdarkly-logo.svg'

const Navbar = () => {
  const navigate = useNavigate();
  const [configcatActive, setConfigcatActive] = useState(true);
  const [launchdarklyActive, setLaunchdarklyActive] = useState(false);

  useEffect(() => {
    navigate("/configcat");
  }, []);

  return (
    <nav className="navbar">
      <p>Using feature flags with</p>
      <Link
        className={`${configcatActive ? "active-link" : ""}`}
        onClick={() => {
          setConfigcatActive(true);
          setLaunchdarklyActive(false);
        }}
        to="/configcat"
      >
        ConfigCat
         <img src={ConfigCatLogo} alt="configcat logo" width='30px' height='20px' />
      </Link>
      <p>or</p>
      <Link
        className={`${launchdarklyActive ? "active-link" : ""}`}
        onClick={() => {
          setConfigcatActive(false);
          setLaunchdarklyActive(true);
        }}
        to="/launchdarkly"
      >
        LaunchDarkly
        <img src={LaunchDarklyLogo} alt="launchdarkly logo" width='30px' height='20px' />
        <span>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
