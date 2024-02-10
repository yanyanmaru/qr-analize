import Head from "next/head";
import styles from "./../styles/Home.module.css";
import Header from "./../components/Header";
import Input from "./../components/Input";

import { useState } from "react";
import { useQRCode } from "next-qrcode";
import Menu from "@/components/Menu";
import Generate from "@/components/Generate";

export default function Home() {
  const [text1, setText1] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText1(() => e.target.value);
  };

  const [text2, setText2] = useState("");

  const handleChange2 = () => {
    setText2(() => e.target.value);
  };

  const [text3, setText3] = useState("");

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText3(() => e.target.value);
  };

  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const [generateOn, setGenerateOn] = useState(false);

  function UrlChecker(string:string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  const generateBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(text1 == "" || text2 == "" || text3 == ""){
      alert("①②③全て入力してください");
      return;
    }
    if(!UrlChecker(text1)){
      alert("①がURLの形になっていません。");
      return;
    }
    setGenerateOn(true);
  };

  const { Canvas } = useQRCode();

  const { Image } = useQRCode();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.progressbar}></div>
        <Header />
        <div className={styles.twice}>
          <Menu active={active} active1={active1} active2={active2} />
          <div className={styles.second}>
            <Input
              title="①飛んでほしいURLを入力する"
              text={text1}
              handleChange={handleChange}
              onFocusEvent={() => {
                setActive(true);
              }}
              onBlurEvent={() => {
                setActive(false);
              }}
            />
            <Input
              title="②参照元(utm_source)を入力する"
              text={text2}
              handleChange={handleChange2}
              onFocusEvent={() => {
                setActive1(true);
              }}
              onBlurEvent={() => {
                setActive1(false);
              }}
            />
            <Input
              title="③メディア(utm_medium)を入力する"
              text={text3}
              handleChange={handleChange3}
              onFocusEvent={() => {
                setActive2(true);
              }}
              onBlurEvent={() => {
                setActive2(false);
              }}
            />
            <Generate
              generateText={text1+'&utm_source='+text2+'&utm_medium='+text3}
              canClick={text1 != "" && text2 != "" && text3 != "" && UrlChecker(text1)}
              generateBtn={generateBtn}
            />
            {text1 != "" && text2 != "" && text3 != "" && generateOn && (
              <div className={styles.result}>
                <Image
                  text={text1 + text2 + text3}
                  options={{
                    type: "image/jpeg",
                    quality: 0.3,
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#010599FF",
                      light: "#FFF",
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
