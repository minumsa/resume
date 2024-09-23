import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentsContainer}>{children}</div>
      <Footer />
    </div>
  );
};
