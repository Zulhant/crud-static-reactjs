import React, { useContext } from "react";
import { UsersContext } from "../contexts/users";
import { Link } from "react-router-dom";

const UserAdd = () => {
  const data = useContext(UsersContext);

  return (
    <div>
      {data.loading ? (
        <p>Plase wait...</p>
      ) : (
        <div>
          <h2>Add Users</h2>
          <br />
          <label>Name</label>
          <br />
          <input
            type="text"
            defaultValue={data.data.name}
            onChange={data.handleFormChange.bind(this, "name")}
          />
          <br />
          <br />
          <label>City</label>
          <br />
          <input
            type="text"
            defaultValue={data.data.city}
            onChange={data.handleFormChange.bind(this, "city")}
          />
          <br />
          <br />
          <Link to="/users">
            <button>Kembali</button>
          </Link>
          <span /> <button onClick={data.handleSaveForm}>Simpan</button>
          <br />
        </div>
      )}
    </div>
  );
};

export default UserAdd;
