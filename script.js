const input = document.querySelector("input");
const todosContainer = document.querySelector(".todos-container");
const plusIcon = document.querySelector(".plus-icon");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".todo-filter-dropdown");
const filter = document.querySelector(".filter");
const completeBtn = document.querySelectorAll(".complete");
const deleteBtns = document.querySelectorAll(".delete");
const options = document.querySelectorAll(".option");
const todos = document.querySelectorAll(".todo");
const filterBtn = document.querySelector(".dropdown-btn")

setInterval(() => {
  const todos = document.querySelectorAll(".todo");
  if (filter.innerText == "Active") {
    for (todo of todos) {
      if (!todo.classList.contains("active")) {
        todo.style.display = "none"
      }else {
        todo.style.display = "flex"
      }
    }
  }else if (filter.innerText == "Completed") {
    for (todo of todos) {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "none"
      }else {
        todo.style.display = "flex"
      }
    }
  }else {
    for (todo of todos) {
      todo.style.display = "flex"
    }
  }
}, 100)

const todosArr = [];

plusIcon.addEventListener("click", () => {
  if (input.value.trim() != "") {
    let inputValue = input.value;
    let html = `
                  <div class="todo all active">
                  <p>${inputValue}</p>
                  <button class="complete"><i class="fa-solid fa-check"></i></button>
                  <button class="delete"><i class="fa-solid fa-trash"></i></button>
              </div>
          `;
    todosContainer.insertAdjacentHTML("beforeend", html);
    input.value = "";

  }
});

todosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("complete")) {
    e.target.previousElementSibling.style.textDecoration = "line-through";
    e.target.previousElementSibling.classList.add("done")
    e.target.disabled = true
    e.target.parentElement.classList.remove("active")
    e.target.parentElement.classList.add("completed")
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
    e.target.parentElement.previousElementSibling.classList.add("done")
    e.target.disabled = true
    e.target.parentElement.parentElement.classList.remove("active")
    e.target.parentElement.parentElement.classList.add("completed")
  }
});

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show")
})

options.forEach(option => {
  option.addEventListener("click", (e) => {
    filter.innerText = e.target.innerText
    dropdown.classList.remove("show")
  })
})
