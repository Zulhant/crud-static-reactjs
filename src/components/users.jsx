import React, { useContext } from "react";
import { UsersContext } from "../contexts/users";
import { Link } from "react-router-dom";

const Users = () => {
  const data = useContext(UsersContext);

  return (
    <div>
      <h2>List Users</h2>
      <br />
      <Link to="/users?action=add">
        <a>Tambah</a>
      </Link>
      <table border={1} cellPadding={4} cellSpacing={4}>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>City</td>
          <td>Aksi</td>
        </tr>
        {data.list.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>
                <Link to={`/users?action=edit&id=${item.id}`}>
                  <a>Edit</a>
                </Link>
                <span />
                {""}
                <span />|
                <Link to={`/users?action=detail&id=${item.id}`}>
                  <a>Detail</a>
                </Link>
              </td>
            </tr>
          );
        })}
      </table>{" "}
      <br />
      <Link to="/">
        <a>Kembali Ke Beranda</a>
      </Link>
    </div>
  );
};

export default Users;
