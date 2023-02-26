// const CryptoJS = require("crypto-js");

const inputText=document.querySelector("#inputText");
const outText=document.querySelector("#outputText");
const key=document.querySelector("#key");
const encryptBtn=document.querySelector("#encryptBtn");
const decryptBtn=document.querySelector("#decryptBtn");
const dropDownForm=document.querySelector("#algorithm");

dropDownForm.addEventListener("change",()=>{
  console.log(dropDownForm.value);
  if(dropDownForm.value=="Additive"){
    encryptBtn.addEventListener("click",()=>{
        AdditiveEncrypt(inputText.value,10);
    });
    decryptBtn.addEventListener("click",()=>{
      AdditiveDecrypt(inputText.value,10);
    });}
    if(dropDownForm.value=="des"){
      encryptBtn.addEventListener("click",()=>{
        console.log("Des")
      }
)}
})
// if(dropDownForm.value=="Additive"){
//     encryptBtn.addEventListener("click",()=>{
//         AdditiveEncrypt(inputText.value,10);
//     });
//     decryptBtn.addEventListener("click",()=>{
//       AdditiveDecrypt(inputText.value,10);
//     });
// }else{
//     console.log("please select a value");
// }


function AdditiveEncrypt(plaintext,key){
  let result="";
  for(let i=0;i<plaintext.length;i++){
    const ascii=plaintext[i].charCodeAt(0);
    // console.log(ascii);
    if (ascii >= 65 && ascii <= 90) {
      result += String.fromCharCode((((ascii - 65) + key) % 25) + 65);
    }
    else if(ascii >= 97 && ascii <= 122) {
      result += String.fromCharCode((((ascii - 97) + key) % 25) + 97);
      }
      else {
                result += plaintext[i];
      }
  }
  outText.value=result;
}    


function AdditiveDecrypt(plaintext,key){
let result="";
for(let i=0;i<plaintext.length;i++){
  const ascii=plaintext[i].charCodeAt(0);
  // console.log(ascii);
  if (ascii >= 65 && ascii <= 90) {
    result += String.fromCharCode((((ascii - 65) -key) % 25) +65);
  }
  else if(ascii >= 97 && ascii <= 122) {
    result += String.fromCharCode((((ascii - 97 )- key) % 25) +97);
    }
    else {
      result += plaintext[i];
    }
}
outText.value=result;
}

console.log("Page");