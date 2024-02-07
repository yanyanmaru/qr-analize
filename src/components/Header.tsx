import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Google Analytics 4✖︎QRコード生成</h1>
      </div>
    </>
  );
}
