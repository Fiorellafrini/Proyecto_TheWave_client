import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listBrands } from "../../../redux/actions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EstadisticasTorta() {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.products.products);
  const brand = useSelector((state) => state.products.brands);
  
  useEffect(() => {
    dispatch(listBrands());
  }, [dispatch]);
  
  // console.log(brand);
  
  const brands = brand.length ? brand.map((prod) => prod.name) : null;
  console.log(brands);

  const name = productos.length ? productos.map((prod) => prod.id ) : null;

  var midata = {
    responsive: true,
    labels: brands,
    datasets: [
      {
        label: ["Price"],
        data: name,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
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
