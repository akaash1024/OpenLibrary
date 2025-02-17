import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../AuthContextStore";

export const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken, api } = useAuth();

  const getAllUsersData = async () => {
    try {
      const { data } = await api.get(`/api/admin/users`, {
        headers: {
          Authorization: authorizationToken,
        },
      });

      setUsers(data.users);
      
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `${API}/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = response.data;
      console.log("Deleted user:", data);

      if (response.status === 200) {
        getAllUsersData(); // Reload user list after deletion
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  useEffect(() => {
    if (authorizationToken) {
      getAllUsersData();
    }
  }, [authorizationToken]);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
