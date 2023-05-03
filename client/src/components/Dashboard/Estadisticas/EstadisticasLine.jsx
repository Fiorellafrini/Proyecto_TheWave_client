import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function EstadisticasLine() {
  const productos = useSelector((state) => state.products.products);
  // const user = useSelector((state) => state.products.users);

  const name = productos.length ? productos.map((prod) => prod.name) : null;
  const price = productos.length ? productos.map((prod) => prod.price) : null;

  // const users = user.length ? user.map((user) => user.name) : null;
  // const active = user.length ? user.map((user) => user.active) : null;

  const fechaActual = new Date();
  

  var midata = {
    labels: price,
    datasets: [
      {
        label: "Ventas",
        data: fechaActual,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["rgba(255, 99, 132, 0.5)"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="header">
      <h1 className="title">Line Chart</h1>
      <div>
        <Line data={midata} options={options} />
      </div>
    </div>
  );
}
