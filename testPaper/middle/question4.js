/* eslint-disable no-unused-vars */
// - 問題4: **配列内の特定の要素をトグルする関数を作ろう**
//    数値か文字列の要素を持つ配列と検索する要素(数値か文字列)を引数として受け取り、
//    配列内に指定された要素が存在するかどうかを判断して
//    要素があった場合はその要素を削除してください。なかった場合は配列の最後尾に追加してください。

//引数の例
// 1. array: [1,2,3,4,5], ele: 4
// 2. array: [1,2,"3",4,5], ele:3
//返り値の例
// 1. [1,2,3,5]
// 2. [1,2,"3",4,5,3]

/**
 * @param {(string|number)[]} array
 * @param {string|number} ele
 *  @return {(string|number)[]}
 */
export const toggleArrayElement = (array, ele) => {
  //ここに記述
  let isEle = false; //eleが[]にあるかないか true=ある false=ない
  const newArray1 = array.filter((num) => {
    //ある=true ない=false
    if (num === ele) {
      isEle = true; //eleが[]にある
      return false; //false=numを削除(保持しない) =>削除されたnumを除いたnum を返す
    }
    return true; //else省略 true=numを削除しない(保持する) =>☆シャーロットコピーの為空の[] が返る
  });
  //☆filter関数とは別で []にeleがなかったらpushする
  if (isEle === false) {
    //eleが[]にない場合
    newArray1.push(ele); //☆filterを通し終わった新しい配列にpush
  }
  return newArray1; //returnしないと引数が受け取れない
};

console.log(toggleArrayElement([1, 2, 3, 4, 5], "3"));

// return num !== ele; はif文の省略方法
// if (num === ele)
// {
//   return false; //
// } else {
//   return true;
// }

//indexofとspliceでもできる
