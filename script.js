const input = document.querySelector("input");
const todosContainer = document.querySelector(".todos-container");
const plusIcon = document.querySelector(".plus-icon");
const completeBtn = document.querySelectorAll(".complete");
const deleteBtns = document.querySelectorAll(".delete");

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
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
  }
});
