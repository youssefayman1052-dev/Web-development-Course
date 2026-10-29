const input = document.getElementById("taskinput") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const clearBtn = document.getElementById("clear") as HTMLButtonElement;
const list = document.getElementById("tasks") as HTMLUListElement;

function addTask(): void {
    const task: string = input.value.trim();
    if (task === "") return;

    const row: HTMLDivElement = document.createElement("div");
    row.className = "item";

    const checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";

    const li: HTMLLIElement = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", function (): void {
        row.remove();
    });

    row.appendChild(checkbox);
    row.appendChild(li);
    list.appendChild(row);

    input.value = "";
    input.focus();
}

function clearAll(): void {
    list.innerHTML = "";
}

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);


input.addEventListener("keydown", function (e: KeyboardEvent): void {
    if (e.key === "Enter") addTask();
});