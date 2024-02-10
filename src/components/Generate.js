import styles from "./Generate.module.css";



export default function Generate({generateBtn,canClick,generateText}) {
  return (
    <>
    <div className={styles.content}>
        <h2>④QRコードを生成する</h2>
        <p>{generateText}</p>
        <button className={`${canClick ? styles.btn : styles.cant}`} onClick={generateBtn}>QR生成</button>
    </div>
    </>
  );
}
