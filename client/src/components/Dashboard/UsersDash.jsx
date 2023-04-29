

import React, { useEffect } from "react";
import { users, setCurrentPage } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import Error404 from "../Error404/Error404";
import styles from "./User.module.css";



function Users() {


    const  dispatch = useDispatch()
    const user =useSelector((state)=>state.products.users)

  console.log(user)
  
    useEffect(()=>{
        dispatch(users())
    }, [dispatch])
  
  return (
    <>
      <section>
        <div className={styles.user}>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Lastname</td>
                <td>Email</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {user.length ? (user.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>${user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                </tr>
              ))) 
            : (
                 <Error404 />
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.products.users);
//   const setPage = useSelector((state) => state.products.setPage);
//   const lastIndex = setPage * 8;
//   const firstIndex = lastIndex - 8;

//   console.log(user);
//   useEffect(() => {
//     dispatch(users());
//     dispatch(setCurrentPage(1));

//   }, [dispatch]);
//   return (
//     <>
//       <section>
//         <div>
//           <table>
            
//             <tbody>
//               {user.length ? (
//                 user
//                   .map((user) => (
                    // <tr key={user.id}>
                    //   <td>{user.id}</td>
                    //   <td>{user.name}</td>
                    //   <td>${user.lastName}</td>
                    //   <td>{user.email}</td>
                    //   <td>{user.address}</td>
                    //   <td>
                    //     <CardDash />
                    //   </td>
                    // </tr>
//                   ))
//                   .slice(firstIndex, lastIndex)
//               ) : (
//                 <Error404 />
//               )}
//             </tbody>
//           </table>
//           <Paginado total={user.length} />
//         </div>
//       </section>
//     </>
//   );
// }

export default Users;

/*


  return (
    <>
     
     
      <section className={styles.linkk}>
        <div>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
                <td>Size</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {productos.length ? (
                productos
                  .map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>{product.size}</td>
                      <td><CardDash/></td>
                    </tr>
                  ))
                  .slice(firstIndex, lastIndex)
              ) : (
                <Error404 />
              )}
            </tbody>
          </table>
          <Paginado total={productos.length} />
        </div>
      </section>
    </>
  );
};
export default CardsDash;







function UsersDash() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  //   const setPage = useSelector((state) => state.products.setPage);
  //   const lastIndex = setPage * 8;
  //   const firstIndex = lastIndex - 8;

  // const total = users.length()
  console.log(users);
  //console.log(total);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <section>
        <div>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Lastname</td>
                <td>Email</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>${user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                </tr>
))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default UsersDash;
*/




    
 
