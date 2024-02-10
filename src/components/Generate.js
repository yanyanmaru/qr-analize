import styles from "./Generate.module.css";



export default function Generate({generateBtn,canClick,generateText}) {
  return (
    <>
    <div className={styles.content}>
        <h2 className={styles.title}>④QRコードを生成する</h2>
        <div className={styles.result}>
        <p className={styles.generate}>生成URL</p>
        <p className={styles.text}>{generateText}</p>
        </div>
       
        <button className={`${canClick ? styles.btn : styles.cant}`} onClick={generateBtn}>QR生成</button>
    </div>
    </>
  );
}
