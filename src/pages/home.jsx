import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Selamat datang di course online Reactjs</h2>
      <Link to="/users">
        <a>Akses Data Users</a>
      </Link>
    </div>
  );
}

export default HomePage;
