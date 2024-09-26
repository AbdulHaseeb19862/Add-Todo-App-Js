const inputText = document.getElementById("inputText");
const todoBtn = document.getElementById("todoBtn");
const ul = document.getElementById("ul");

todoBtn.addEventListener("click", function () {
  if (!inputText.value.trim()) {
    return alert("Task can't be empty.");
  }

  // create li element
  const li = document.createElement("li");
  li.textContent = inputText.value;
  li.classList.add("styledLi");

  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  li.appendChild(removeBtn);

  ul.appendChild(li);
  ul.classList.add("ulList");
});
