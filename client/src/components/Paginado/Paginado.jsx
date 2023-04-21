import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions.js";
import "./paginado.css";
function Paginado({total }) {
  const setPage = useSelector((state) => state.products.setPage);
  const dispatch = useDispatch();
  const numeroPagina = [];
  for (let i = 1; i <= Math.ceil(total / 8); i++) {
    numeroPagina.push(i);
  }

  const nextPage = () => {
    dispatch(setCurrentPage(setPage + 1));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(setPage - 1));
  };

  const specifPage = (e) => {
    dispatch(setCurrentPage(e));
  };

  return (
    <>
      <nav className="contenedor">
        <div className="paginas">
          <ul>
            <div>
              <button
                disabled={setPage === 1 ? true : false}
                onClick={prevPage}
              >
                ◀
              </button>
            </div>
            {numeroPagina.map((Pag) => (
              <li key={Pag}>
                <button
                  onClick={() => specifPage(Pag)}
                  className={setPage === Pag ? "pagin" : ""}
                >
                  {Pag}
                </button>
              </li>
            ))}
            <div>
              <button
                disabled={setPage >= numeroPagina.length ? true : false}
                onClick={nextPage}
              >
                ▶
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Paginado;
