import { Link } from "react-router-dom";
import "../styles/Button.scss";

export const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Link to="/" className="button">
        Home
      </Link>
      <Link to="/en" className="button">
        English
      </Link>
      <Link to="/ru" className="button">
        Russian
      </Link>
    </nav>
  );
};
