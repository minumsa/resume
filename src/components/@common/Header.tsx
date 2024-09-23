import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToQuestions = () => {
    navigate("/qna");
  };

  return (
    <header className={styles.header}>
      <div onClick={goToHome}>최유일</div>
      <div onClick={goToProjects}>프로젝트</div>
      <div onClick={goToQuestions}>자주 묻는 질문</div>
    </header>
  );
};

export default Header;
