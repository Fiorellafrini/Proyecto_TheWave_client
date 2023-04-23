import { useState, useEffect } from "react";
import bannerCourses from "../../assets/banerCourses.png";
import bannerCourses1 from "../../assets/banerCourses1.png";
import styles from "../CoursesBanner/CoursesBanner.module.css";

const CoursesBanner = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage === 1 ? 2 : 1);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <>
      <div
        className={styles.containerCoursesBanner}
        style={{ display: currentImage === 1 ? "block" : "none" }}
      >
        <img src={bannerCourses} alt="" />
        <button className={styles.buttonCourses}>COMING SOON...</button>
      </div>
      <div
        className={styles.containerCoursesBanner}
        style={{ display: currentImage === 2 ? "block" : "none" }}
      >
        <img src={bannerCourses1} alt="" />
        <button className={styles.buttonCourses}>COMING SOON...</button>
      </div>
    </>
  );
};

export default CoursesBanner;
