import styles from './Block.module.css'

type Props = {
    text1: string,
    text2: string,
    text3: string
}

export default function Block({text1,text2,text3}:Props) {
  return (
    <>
    <div className={styles.content}>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
    </div>
    </>
  );
}
