let search = ()=>{
let input = document.querySelector("input");
  let val = input.value;
  let keyWord = val.replaceAll(" ","+");
  console.log(keyWord);
let web = "https://www.google.com/search?q="+keyWord+"&rlz=1C1SQJL_enPK1000PK1000"
console.log(web);
location.href = web;
}


// let input = document.querySelector(".input") 
// let valu = input.value  
// let k = valu.replaceAll(" ","+")  
// console.log(k)
let input = document.querySelector("input");
input.addEventListener("keypress", (event)=> {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".right-icon").click();
    
  }
});
