import styled from 'styled-components'
export const Popstyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 03);
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .Form {
    width: 500px;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    width: 275px;
    height: 30px;
    background-color: white;
    border: 0.5px solid #333;
    margin-bottom: 5px;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  /* Estilo del botón para abrir el popup */

  .btn-submit {
    border: none;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    width: 100px;
  }

  .btn-close {
    border: none;
    padding: 2px 2px;
    background-color: #333;
    color: red;
    border-radius: 50%;
    cursor: pointer;
  }
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 200px;
  }
  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
;
`