
const form = document.querySelector("form");
const input = form.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feitas = document.querySelector("feitas");

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const text = document.createElement("span");
    text.innerText = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Deletar";

    tarefa.append(checkbox);
    tarefa.append(text);
    tarefa.append(deleteButton);

    aFazer.append(tarefa);

    input.value = "";
});