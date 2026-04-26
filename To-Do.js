let btn = document.getElementById("btn");
let inp = document.querySelector("#inp");
btn.addEventListener("click", () => {
  console.log(inp.value);
});

let list = document.querySelector("#list");
btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = inp.value;
  list.appendChild(li);
});
