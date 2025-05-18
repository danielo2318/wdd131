/* const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
li.textContent = input.value;
list.append(li);

const deleteBtnBtn = document.createElement("button");
deleteBtn.textContent = "❌";
li.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function () {
  list.removeChild(li);
});
 */

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    input.focus(); // siempre enfocar
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
    input.focus(); // enfocar al eliminar
  });

  list.appendChild(li);

  input.value = ""; // limpiar campo
  input.focus(); // enfocar campo
});
