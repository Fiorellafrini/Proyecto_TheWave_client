import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../../redux/actions.js";

// import Error404 from "../Error404/Error404";

import styles from "./User.module.css";
import UserDashDelete from "./UserDashDelete.jsx";

function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.products.users);

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className={styles.containerDash}>
          <div className={styles.linkk}>
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <td>Photo</td>
                  <td>Name</td>
                  <td>Lastname</td>
                  <td>Email</td>
                  <td>Address</td>
                  <td colSpan={2}>Status</td>
                </tr>
              </thead>
              <tbody>
                {user.length
                  ? user.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <img src={user.photo} alt="" />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>
                        <UserDashDelete id={user.id}/>
                      </td>
                      </tr>
                    ))
                  : // <Error404 />
                    null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
export default Users;
