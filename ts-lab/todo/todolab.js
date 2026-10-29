"use strict";
const input = document.getElementById("taskinput");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const list = document.getElementById("tasks");
function addTask() {
    const task = input.value.trim();
    if (task === "")
        return;
    const row = document.createElement("div");
    row.className = "item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", function () {
        row.remove();
    });
    row.appendChild(checkbox);
    row.appendChild(li);
    list.appendChild(row);
    input.value = "";
    input.focus();
}
function clearAll() {
    list.innerHTML = "";
}
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        addTask();
});
