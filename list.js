let parentdiv = document.querySelector(".box");

function createtodo() {
    let input = document.querySelector("input");
    let val = input.value.trim(); // Trim the input value
    if (!val) return; // Prevent adding empty todos

    let list = document.createElement("li");
    list.style.listStyle = "none";

    list.addEventListener("click", () => {
        list.classList.toggle("done"); // Toggle the 'done' class
    });

    list.innerHTML = `${val}<i class="delete-icon fa-solid fa-trash-can"></i>`; // Closing backtick added

    parentdiv.appendChild(list);

    let deletebtn = list.querySelector(".delete-icon");
    deletebtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click event from triggering the 'done' class toggle
        list.remove(); // Remove the current list item
    });
}

let addbtn = document.querySelector(".addbtn");
addbtn.addEventListener('click', createtodo);
