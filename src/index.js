// var val1 = "var変数";
// console.log(val1);

// //var変数の上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数に上書き";
// console.log(val2);

// const val3 ="const変数";
// console.log(val3)

// const val4={
//   name:"じゃけえ",
//   age: 28,
// };

// val4.name="jak"
// val4.addres="okinawa"

// console.log(val4)

// const val5 =['dog,','cat'];
// val5[0] ='bird';
// val5.push("monkey");
// console.log(val5)

//テンプレート文字列
// const name = "じゃけ";
// const age = 28;
//私の名前はじゃけです年齢は２８歳です

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

//テンプレート文字列を用いる
// const message2 = `私の名前は${name}です年齢は${age}です`;
// console.log(message2)

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
// return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("ファンク１です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("ファンク２です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です年齢は${age}です`;
// console.log(message2);

// const myProfile = ["じゃけ", 28];
// const message3 = `名前は${myProfile[0]}です年齢は${myProfile[1]}です`;
// console.log(message3);
// //配列は順番大事　［］でやる
// const[name,age]= myProfile
// const message4 = `名前は${name}です年齢は${age}です!`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name ="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("jake");

/**
 * スブレッド構文...
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0],arr1[1])
// sumFunc(...arr1);

//まとめる
//

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterをつかった配列の処理
 */

// const nameArr = ["田中", "山田", "じゃけ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 =nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const nameArr3 = ["田中", "山田", "じゃけ"];
// for (let index = 0; index < nameArr3.length; index++) {
//   console.log(`${index +1 }番目は${nameArr[index]}`);
// }
// nameArr3.map((name,index) => console.log(`${index + 1}は${name}`));

// const nameArr4 = ["田中", "山田", "じゃけ"];

// const newNameArr = nameArr4.map((name) => {
//   if (name === "じゃけ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　？　条件がtrueのとき　：　条件がfolsの時
// const val1 = 1 < 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 50));

/**
 * 論理演算しの本当の意味を知ろう  && ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||左側がfalseなら右側を返す
// const num =100;
// const fee = num || "金額未設定です"
// console.log(fee)

//　&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2)
