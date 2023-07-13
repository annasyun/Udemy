import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/style.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
          {/* a태그는 새로고침이 되어서 상태관리가 다 휘발됨! -> Link 사용해야 하는 이유 */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
