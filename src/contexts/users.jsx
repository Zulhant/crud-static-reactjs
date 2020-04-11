import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const UsersContext = createContext();

const users = [
  {
    id: 1,
    name: "Jhon",
    city: "Jakarta",
  },
  {
    id: 2,
    name: "Mamang",
    city: "Bandung",
  },
  {
    id: 3,
    name: "Zaenal",
    city: "Jogjakarta",
  },
];

const formData = {
  id: "",
  name: "",
  city: "",
};

const UserContextContainer = (props) => {
  const history = useHistory();

  const [list, setList] = useState(users);

  const [data, setData] = useState(formData);

  const [loading, setLoading] = useState(false);

  const handleFormChange = (name, event) => {
    let newData = data;
    newData[name] = event.currentTarget.value;
    setData(newData);
  };

  const handleSaveForm = () => {
    setLoading(true);
    setTimeout(() => {
      setList(list.concat({ ...data, id: list.length + 1 }));
      setData(formData);
      setLoading(false);
      clearForm();
      history.push("/users");
    }, 1000);
  };

  const handleSaveEditForm = () => {
    setLoading(true);
    setTimeout(() => {
      let newList = list.filter((item) => item.id != data.id);
      setList(newList.concat(data));
      setLoading(false);
      clearForm();
      history.push("/users");
    }, 1000);
  };

  const getUserById = (id) => {
    setLoading(true);
    let newData = list.filter((item) => item.id == id);
    setTimeout(() => {
      setData(newData[0]);
      setLoading(false);
    }, 1000);
  };

  const clearForm = () => {
    setData({
      id: "",
      name: "",
      city: "",
    });
  };

  return (
    <UsersContext.Provider
      value={{
        list,
        data,
        handleFormChange,
        handleSaveForm,
        handleSaveEditForm,
        getUserById,
        loading,
        clearForm,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UserContextContainer;
