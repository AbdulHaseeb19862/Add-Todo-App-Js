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
  span.addEventListener("click", function () {
    span.classList.toggle("toggleText");
  });

  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removeBTN");
  ul.classList.add("ulList");
  removeBtn.addEventListener("click", function () {
    ul.removeChild(li);

    // Check if there are no more list items in the ul
    if (ul.children.length === 0) {
      ul.classList.remove("ulList");
    }
  });

  li.appendChild(removeBtn);

  ul.appendChild(li);
  inputText.value = "";
});
