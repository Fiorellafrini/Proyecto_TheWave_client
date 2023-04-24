import styled from "styled-components";
export const Popstyled = styled.div`
  
  position: fixed;
  top: 145px;
  left: 990px;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 300px;
  
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .Form {
    background-color: rgba(255, 255, 255, 0.3);
    width: 300px;
    height: 300px;
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
  }
  .Form button {
    height: 30px;
    width: 90px;
    color : #00000;
    background-color: transparent ;
    border: 1px solid #181818;  
    border-radius: 15px;
  }
`;