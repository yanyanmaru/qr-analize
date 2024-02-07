
import styles from "./subheader.module.css"

export default function SubHeader() {
  return (
    <>
     <ul className={styles.sub}>
        <li>QR生成</li>
        <li>GA4✖︎QRコードって？</li>
        <li>使い方</li>
     </ul>
    </>
  );
}
