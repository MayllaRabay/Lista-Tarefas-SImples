
const form = document.querySelector("form");
const input = form.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feitas = document.querySelector(".feitas");

function deletarTarefa(event) {
    const deleteButton = event.target;
    const tarefa = deleteButton.closest("li");

    tarefa.remove();
}

function marcarComoFeita(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if(checkbox.checked) {
        feitas.append(tarefa);
    } else {
        aFazer.append(tarefa);
    };
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", marcarComoFeita);

    const text = document.createElement("span");
    text.innerText = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Deletar";
    deleteButton.addEventListener("click", deletarTarefa);

    tarefa.append(checkbox);
    tarefa.append(text);
    tarefa.append(deleteButton);

    aFazer.append(tarefa);

    input.value = "";
})