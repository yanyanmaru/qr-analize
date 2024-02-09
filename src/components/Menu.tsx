
import styles from "./Menu.module.css"

type Props = {
  active: boolean,
  active1: boolean,
  active2: boolean
}

export default function Menu({active,active1,active2}:Props) {
  return (
    <>
     <ul className={styles.menu}>
       
        <li className={`${styles.content} ${active ? styles.active : ""}`}>①飛んでほしいURLを入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={`${styles.content} ${active1 ? styles.active : ""}`}>②参照元(utm_source)を入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={`${styles.content} ${active2 ? styles.active : ""}`}>③メディア(utm_medium)を入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>⑤QRコードを生成する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>結果</li>
        <p className={styles.explain}>ありがとう</p>
     </ul>
    </>
  );
}
