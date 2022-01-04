import React, { useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  useEffect(() => {
    document.title = "a startup-page";
  }, []);

  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <p>
        <h1>Hello</h1>
        <p>it&apos;s {date.toLocaleTimeString()}</p>
      </p>
      <p>
        <div className="link">
          <div className="border">
          <a href="https://github.com/adrz">
            <i><FontAwesomeIcon icon={faGithub} /></i>
          </a>

          <a href="https://www.linkedin.com/in/adrien-nouvellet-b86912116/">
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
          </a>
          </div>
        </div>
      </p>
    </div>
  );
}

export default App;
