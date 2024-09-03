const addTaskBtn = document.querySelector("button");
const taskContainer = document.getElementById("task-container");
const userInput = document.getElementById("addtask");
const task = document.querySelector(".task");
const ul = document.querySelector("ul");
const addTask = () => {
  if (userInput.value === "" || userInput.value > ul.style.width) {
    alert("Invalid input or the task is too long");
    return;
  }

  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";

  removeBtn.addEventListener("click", () => {
    li.remove();
  });
  li.textContent = userInput.value;
  li.appendChild(removeBtn);

  ul.appendChild(li);
  ul.style.width = "100%";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  userInput.value = "";
};

addTaskBtn.addEventListener("click", addTask);
