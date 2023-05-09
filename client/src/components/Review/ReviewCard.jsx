import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ rating, idUser, comment, updatedAt }) => {
  const stars = [];

  const [data, setData] = useState("");
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} color={"#fdd835"} />);
    } else {
      stars.push(<FaRegStar key={i} color={"grey"} />);
    }
  }
  async function fetchData() {
    const { data } = await axios(`/user/${idUser}`);
    return setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  let timeAgo = "";
  const createdDate = moment(updatedAt);
  const currentDate = moment();
  const thresholds = [
    { unit: "second", threshold: 60, name: "second" },
    { unit: "minute", threshold: 60, name: "minute" },
    { unit: "hour", threshold: 24, name: "hour" },
    { unit: "day", threshold: 7, name: "day" },
    { unit: "week", threshold: 4, name: "week" },
    { unit: "month", threshold: 12, name: "month" },
    { unit: "year", threshold: Infinity, name: "year" },
  ];
  for (const { unit, threshold, name } of thresholds) {
    const diff = currentDate.diff(createdDate, unit);
    if (diff < threshold) {
      timeAgo = `${diff} ${name}${diff === 1 ? "" : "s"} ago`;
      break;
    }
  }
  return (
    <div className={styles.container}>
      <h1>#COMMENTS</h1>
      <div className={styles.commentContainer}>
        <div className={styles.userInfo}>
          <div className={styles.personal}>
            <img src={data?.photo} alt="#" />
            <h2>
              {data?.name} {data?.lastName}
            </h2>
          </div>
          <button>
            <SlOptionsVertical />
          </button>
        </div>
        <div className={styles.score}>
          <h2>{rating.toFixed(1)} </h2>
          <h2>{stars}</h2>
          <h5>{timeAgo}</h5>
        </div>
        <div className={styles.comment}>
          <h2>{comment}</h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
