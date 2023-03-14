import React from "react";
import styles from "../styles/Blogs.module.css";
import BlogImg from "../assets/images/blog.jpg";
const Blogs = () => {
  return (
    <div className={styles.blogs_container}>
      <div>
        <h1 className={styles.blog_heading}>Recent Blogs</h1>
      </div>
      <div className={styles.blogs}>
        <div className={styles.blog}>
          <img src={BlogImg} alt="" height={"250px"} width={"100%"} />
          <div className={styles.blog_data}>
            <h1>Easy on the budget</h1>
            <p>
              Give a detailed description of the service being provided here.
            </p>
          </div>
        </div>
        <div className={styles.blog}>
          <img src={BlogImg} alt="" height={"250px"} width={"100%"} />
          <div className={styles.blog_data}>
            <h1>Easy on the budget</h1>
            <p>
              Give a detailed description of the service being provided here.
            </p>
          </div>
        </div>
        <div className={styles.blog}>
          <img src={BlogImg} alt="" height={"250px"} width={"100%"} />
          <div className={styles.blog_data}>
            <h1>Easy on the budget</h1>
            <p>
              Give a detailed description of the service being provided here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
