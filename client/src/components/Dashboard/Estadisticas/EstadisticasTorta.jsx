import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listBrands, listTypes } from "../../../redux/actions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EstadisticasTorta() {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.products.products);
  const brand = useSelector((state) => state.products.brands);
  const type = useSelector((state) => state.products.types)

  useEffect(() => {
    dispatch(listBrands())
    dispatch(listTypes())
  }, [dispatch]);

 // const brands = brand.length ? brand.map((prod) => prod.name) : null;

  const types = type.length ? type.map((prod) => prod.name.length) : null

  const types2 = type.length ? type.map((prod) => prod.name) : null

  //const stock = productos.length ? productos.map((prod) => prod.stock) : null;

  var midata = {
    responsive: true,
    labels: types2,
    datasets: [
      {
        // label: types,
        data: types,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(102, 255, 178, 0.2)",
          "rgba(238, 130, 238, 0.2)",
          "rgba(0, 128, 128, 0.2)",
          "rgba(255, 69, 0, 0.2)",
          "rgba(218, 165, 32, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(139, 0, 139, 0.2)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        //   "rgba(201, 203, 207, 1)",
        //   "rgba(102, 255, 178, 1)",
        //   "rgba(238, 130, 238, 1)",
        //   "rgba(0, 128, 128, 1)",
        //   "rgba(255, 69, 0, 1)",
        //   "rgba(218, 165, 32, 1)",
        //   "rgba(0, 255, 255, 1)",
        //   "rgba(139, 0, 139, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="header">
      <h1 className="title">Pie Chart</h1>
      <div>
        <Pie data={midata} options={options}></Pie>
      </div>
    </div>
  );
}
