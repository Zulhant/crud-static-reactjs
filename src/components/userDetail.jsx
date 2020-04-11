import React, { useContext } from "react";
import { UsersContext } from "../contexts/users";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserDetail = ({ id }) => {
  const data = useContext(UsersContext);

  useEffect(() => {
    data.getUserById(id);
  }, []);

  return (
    <div>
      {data.loading ? (
        <p>Please wait...</p>
      ) : (
        <div>
          <h2>Detail Users</h2>
          <br />
          <label>Name :</label>
          <br />
          <p>{data.data.name}</p>
          <br />
          <br />
          <label>City : </label>
          <br />
          <p>{data.data.city}</p>
          <br />
          <br />
          <Link to="/users">
            <button>Kembali</button>
          </Link>
          <br />
        </div>
      )}
    </div>
  );
};

export default UserDetail;
