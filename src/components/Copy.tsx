import { useState } from "react";

export default function Copy() {
  const [text,setText] = useState("")

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(text);
    alert(`${text}をコピーしました`)
  }
  return (
    <>
    <input type="text" value={text} onChange={(e) => (setText(e.target.value))} />
    <p>{text}</p>
    <button onClick={copyToClipboard}>クリップボードにコピーする</button>
    </>
  );
}
