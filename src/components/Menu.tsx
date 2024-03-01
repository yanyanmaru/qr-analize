
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
<<<<<<< HEAD
        <p className={styles.explain}>（例）https://qr-analize.vercel.app/</p>
        <li className={`${styles.content} ${active1 ? styles.active : ""}`}>②参照元(utm_source)を入力する</li>
        <p className={styles.explain}>（例）yahoo,google</p>
        <li className={`${styles.content} ${active2 ? styles.active : ""}`}>③メディア(utm_medium)を入力する</li>
        <p className={styles.explain}>（例）cpc,display</p>
        <li className={styles.content}>④QRコードを生成する</li>
        <p className={styles.explain}>ボタンを押して、QRコードを生成してください。</p>
=======
        <p className={styles.explain}>ありがとう</p>
        <li className={`${styles.content} ${active1 ? styles.active : ""}`}>②参照元(utm_source)を入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={`${styles.content} ${active2 ? styles.active : ""}`}>③メディア(utm_medium)を入力する</li>
        <p className={styles.explain}>ありがとう</p>
        <li className={styles.content}>④QRコードを生成する</li>
        <p className={styles.explain}>ありがとう</p>
>>>>>>> refs/remotes/origin/main
     </ul>
    </>
  );
}
