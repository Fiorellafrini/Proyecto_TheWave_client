import React, { useState } from 'react'
import styles from './Estadisticas.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//import { useDispatch, useSelector } from "react-redux";
//import { useState, useEffect } from 'react';
//import { getUsers } from '../../redux/actions';
//import { listProducts, setCurrentPage } from "../../redux/actions.js";


const EstadisticasBar = ({ }) => {
  // const [userData, setUserData] = useState({
  //   labels: DataStats.map((data) => data.name),
  //   datasets: [
  //     {
  //       label: "Stocks",
  //       data: DataStats.map((data) => data.stock),
  //     },
  //   ],
  // });
	// console.log(userData);



	
	


  
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
//   };
  
  return (
    
    


 <Bar options={options} data={data} />

        // <BarChart
        //   width={1300}
        //   height={550}
        //   data={DataStats}
        //   margin={{
        //     top: 5,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        // >
        //   <CartesianGrid strokeDasharray="4 1 2" />
        //   <XAxis dataKey="type_id" />
        //   <YAxis />
        //   <Tooltip />
        //   <Legend />
        //   <Bar dataKey="stock" fill="#6b48ff" />
        // </BarChart>
    
  );
};

export default EstadisticasBar;

 

