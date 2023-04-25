import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";




const Navbar2 = () => {
  const location = useLocation();
  const isHome = location.pathname !== "/profile";
  return (
    <>
      <Nav2>
        {/* <Searchbar/> */}
        <Elements>
          <Link to="/home">
            <Brand>
              {/* <Img src={} alt="imagen" /> */}
              <Title>Admin</Title>
            </Brand>
          </Link>
        </Elements>
      </Nav2>
      <hr />
    </>
  );
};

const Nav2 = styled.nav`
width:-70px;
  border-botom: 1px solid white;
  background-color: rgb(115, 115, 115);
  padding: 2rem 3rem;
  margin: 0;
  padding: 0;

`;

const Elements = styled.div`
  display: flex;
  justify-content: flex-left;
  align-items: center;
 
`;

const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Img = styled.img`
  width: 30px;
`;

const Title = styled.div`
  font-family: "Work Sans";
  font-size: 30px;
  color: rgb(45, 51, 91);
`;


export default Navbar2;