import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header}>
          <div>최유일</div>
          <div>프로젝트</div>
          <div>묻고 답하기</div>
        </h1>
      </header>
    </div>
  );
};

export default Home;
