import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>Google Analytics 4✖︎QRコード生成</h1>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} href="/">QR生成</Link>
            </li>
            <li>
              <Link className={styles.link} href="/storage">履歴</Link>
            </li>
            <li>
              <Link  className={styles.link} href="/">お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
