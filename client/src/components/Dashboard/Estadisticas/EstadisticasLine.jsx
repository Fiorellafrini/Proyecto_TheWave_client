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

  const name = productos.length ? productos.map((prod) => prod.name) : null;
  const price = productos.length ? productos.map((prod) => prod.price) : null;

  var midata = {
    labels: name,
    datasets: [
      {
        label: "Stock",
        data: price,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  return (
    <div>
      <Line data={midata} />
    </div>
  );
}
