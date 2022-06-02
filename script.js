const input = document.querySelector("input");
const todosContainer = document.querySelector(".todos-container");
const plusIcon = document.querySelector(".plus-icon");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".todo-filter-dropdown");
const filter = document.querySelector(".filter");
const completeBtn = document.querySelectorAll(".complete");
const deleteBtns = document.querySelectorAll(".delete");
const options = document.querySelectorAll(".option");

const todos = [];

plusIcon.addEventListener("click", () => {
  if (input.value != "") {
    let inputValue = input.value;
    console.log(inputValue);
    let html = `
                  <div class="todo">
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
    console.log(e.target.previousElementSibling);
    e.target.previousElementSibling.style.textDecoration = "line-through";
    e.target.previousElementSibling.classList.add("completed")
    e.target.disabled = true
    
    
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
    e.target.parentElement.previousElementSibling.classList.add("completed")
    e.target.disabled = true
    
  }
});

dropdownBtn.addEventListener("click", ()=>{
  dropdown.classList.toggle("show")
})

options.forEach(option => {
  option.addEventListener("click", (e) => {
    console.log(e.target.innerText)
    filter.innerText = e.target.innerText
  dropdown.classList.remove("show")
    
  })
})
