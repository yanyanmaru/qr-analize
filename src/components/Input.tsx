import styles from './Input.module.css'

type Input = {
  text: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//https://ja.react.dev/learn/sharing-state-between-components
export default function Input({text,handleChange}:Input) {
  return (
    <div className={styles.input}>
      <h2>①飛んでほしいURLを入力する</h2>
    <input className={styles.content} value={text} onChange={handleChange} type="text" />
    <p>{text}</p>
    </div>
  );
}
