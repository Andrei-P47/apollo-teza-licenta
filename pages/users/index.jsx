import { useState, useEffect } from "react";

import { Spinner } from "components";

import { userService } from "services";

import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/account/Layout";

export default Index;

function Index() {
  const [users, setUsers] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  function deleteUser(id) {
    setUsers(
      users.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    userService.delete(id).then(() => {
      setUsers((users) => users.filter((x) => x.id !== id));
    });
  }

  if (userService.userValue.username === "admin") {
    return (
      <Layout custom="mt-20">
        <h1>Users</h1>
        <Link
          href="/users/add"
          legacyBehavior
          className="btn btn-sm btn-success mb-2"
        >
          Add User
        </Link>
        <table className="table table-striped text-white">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>First Name</th>
              <th style={{ width: "30%" }}>Last Name</th>
              <th style={{ width: "30%" }}>Username</th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                if (user.username !== "admin") {
                  return (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        <Link
                          href={`/users/edit/${user.id}`}
                          legacyBehavior
                          className="btn btn-sm btn-primary mr-1"
                        >
                          Edit
                        </Link>
                        <div
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-sm btn-danger btn-delete-user ml-4"
                          disabled={user.isDeleting}
                        >
                          {user.isDeleting ? (
                            <span className="spinner-border spinner-border-sm" />
                          ) : (
                            <span>Delete</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            {!users && (
              <tr>
                <td colSpan="4">
                  <Spinner />
                </td>
              </tr>
            )}
            {users && !users.length && (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="p-2">No Users To Display</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Layout>
    );
  } else {
    Router.replace("/");
    return null;
  }
}
