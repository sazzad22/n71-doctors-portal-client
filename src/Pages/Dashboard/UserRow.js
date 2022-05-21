import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { role, email } = user;

  const makeAdmin = () => {
    fetch(`https://radiant-temple-40996.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to make an admin`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully Made An Admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-sm">Remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
