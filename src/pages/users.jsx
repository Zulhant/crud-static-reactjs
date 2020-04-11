import React from "react";
import UserContextContainer from "../contexts/users";
import Users from "../components/users";
import UserAdd from "../components/usersadd";
import UserEdit from "../components/userEdit";
import UserDetail from "../components/userDetail";
import { Link, useHistory } from "react-router-dom";

import { parse } from "query-string";

function UserPage() {
  const history = useHistory();

  const pageRendered = () => {
    const url = parse(history.location.search);

    switch (url.action) {
      case "edit":
        return <UserEdit id={url.id} />;
      case "add":
        return <UserAdd />;
      case "detail":
        return <UserDetail id={url.id} />;
      default:
        return <Users />;
    }
  };

  return (
    <UserContextContainer>
      <div style={{ margin: 10 }}>{pageRendered()}</div>
    </UserContextContainer>
  );
}

export default UserPage;
