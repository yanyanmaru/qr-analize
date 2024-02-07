
import styles from "./Menu.module.css"

export default function Menu() {
  return (
    <>
     <ul className={styles.menu}>
        <li className={styles.content}>①飛んでほしいURLを入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>②キーワードを入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>③キーワードを入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>④キーワードを入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>⑤QRコードを生成する</li>
        <p className={styles.explain}>ありがとう</p>
     </ul>
    </>
  );
}
