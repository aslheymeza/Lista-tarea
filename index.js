
const txtDisplay = document.getElementById("display");
const btmAdd = document.getElementById("agregar");
const taskList = document.getElementById("tarealist");


btmAdd.addEventListener("click", function () {
    const txtvalor = txtDisplay.value.trim();

    if (txtvalor !== '') {
        const el = document.createElement("li");
        el.innerHTML = ` <span>${txtvalor}</span>
      <button class="delete">Eliminar</button>`;
        taskList.appendChild(el);
        txtDisplay.value = "";

        const deletebtm = el.querySelector(".delete");
        deletebtm.addEventListener("click", function () {
            taskList.removeChild(el);
        });

    }
});

txtDisplay.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        btmAdd.click();
    }
});