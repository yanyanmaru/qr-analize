import styles from './Input.module.css'

type Input = {
  title: string,
  text: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocusEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlurEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

//https://ja.react.dev/learn/sharing-state-between-components
export default function Input({title,text,handleChange,onFocusEvent,onBlurEvent}:Input) {
  return (
    <div className={styles.input}>
      <h2 className={styles.title}>{title}<span className={styles.attention}>*</span></h2>
    <input onFocus={onFocusEvent} onBlur={onBlurEvent} className={styles.content} value={text} onChange={handleChange} type="text" required />
    </div>
  );
}
