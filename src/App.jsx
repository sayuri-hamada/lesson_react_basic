import React, { useEffect, useState } from "react";
//通常exportの場合は分割代入で取り出す
//export defaultの場合は分割代入なしで名前を任意につけて取り出すことが可能
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");

  //stateが変更されると再レンダリングされる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //引数にとった配列内の値の変更の場合にのみ実行される
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>o(｀ω´ )o</p>}
    </>
  );
};

export default App;
