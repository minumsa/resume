import Header from "./Header";
import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
