/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //ここに記述
  const div = document.getElementById(elementId);
  if (div) {
    div.innerHTML = text;
  } else {
    const newDiv = document.createElement("div");
    newDiv.id = elementId;

    newDiv.innerHTML = text;
    document.body.appendChild(newDiv);
  }
};

{
  /* <body>
  <div id=elementId>innerHTML</div>
  </> */
}
