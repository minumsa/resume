import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header}>
        <div>최유일</div>
        <div>프로젝트</div>
        <div>묻고 답하기</div>
      </h1>
    </header>
  );
};

export default Header;
