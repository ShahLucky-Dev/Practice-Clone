let btn = document.getElementById("btn");
let inp = document.querySelector("#inp");
btn.addEventListener("click", () => {
  console.log(inp.value);
});

let list = document.querySelector("#list");
btn.addEventListener("click", () => {
  let cb = document.createElement("input");
  cb.type = "checkbox";
  let ul = document.createElement("ul");
  let btn = document.createElement("button");

  btn.innerText = "Delete";
  ul.appendChild(cb);
  ul.innerHTML = inp.value;

  ul.appendChild(btn);
  list.appendChild(ul);
  btn.addEventListener("click", () => {
    ul.remove();
  });
});

localStorage.setItem(inp.value);
