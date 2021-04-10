//key board events 

let input = document.getElementById("input");
console.log(input);

//addEventListener 
input.addEventListener("keyup", e => {
  if(e.key === "Enter"){
      console.log("i am a Enter ");
  }
})