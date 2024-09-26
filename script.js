const inputText = document.getElementById("inputText");
const todoBtn = document.getElementById("todoBtn");
const ul = document.getElementById("ul");

todoBtn.addEventListener("click", function () {
  if (!inputText.value.trim()) {
    return alert("Task can't be empty.");
  }

  // create li element
  const li = document.createElement("li");

  // creat span element
  const span = document.createElement("span");
  span.textContent = inputText.value;
  li.appendChild(span);
  li.classList.add("styledLi");

  // On text we add toggle button functionality now

  

  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removeBTN");
  li.appendChild(removeBtn);

  ul.appendChild(li);
  ul.classList.add("ulList");
});
