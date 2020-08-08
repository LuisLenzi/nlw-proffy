document.querySelector("#add-time")
    .addEventListener("click", clonefield)

function clonefield() {
    const newfieldcontainer = document.querySelector(".schedule-item").cloneNode(true)
    const fields = newfieldcontainer.querySelectorAll("input")
    fields.forEach(function(field) {
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newfieldcontainer)
}