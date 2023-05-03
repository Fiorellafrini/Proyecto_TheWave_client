import { React, useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./StartRating.module.css";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className={style.star}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              key={star}
              color={ratingValue <= (hover || rating) ? "#fdd835" : "#d9d9d9"}
              size={27}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
