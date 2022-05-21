import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //     fetch('https://radiant-temple-40996.herokuapp.com/user').then(res=>res.json()).then(data=>setUsers(data))
  // },[])
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("https://radiant-temple-40996.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (error) {
    console.log(error.message);
  }
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th></th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
