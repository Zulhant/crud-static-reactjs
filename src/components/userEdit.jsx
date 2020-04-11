import React, { useContext } from "react";
import { UsersContext } from "../contexts/users";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserEdit = ({ id }) => {
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
          <h2>Edit Users</h2>
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
          <span /> <button onClick={data.handleSaveEditForm}>Simpan</button>
          <br />
        </div>
      )}
    </div>
  );
};

export default UserEdit;
