import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EstadisticasTorta() {
  const productos = useSelector((state) => state.products.products);
  // const brands = useSelector((state) => state.brand);
  // console.log(brands);

  // const brand = brands.length ? brands.map((prod) => prod.brands) : null;

  const name = productos.length ? productos.map((prod) => prod.name) : null;
  const stock = productos.length ? productos.map((prod) => prod.stock) : null;

  var midata = {
    responsive: true,
    // labels: brand,
    labels: name,
    datasets: [
      {
        label: "Stock",
        data: stock,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={midata}></Pie>
    </div>
  );
}
