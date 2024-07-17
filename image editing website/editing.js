const containerediting = document.querySelectorAll(".container-editing input");
containerediting.forEach((containerediting) => containerediting.addEventListener("change", update));


// input.addEventListener('input', update());

function update(){
    const suffixdata = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffixdata
    );

}
const imageselect = document.getElementById("image");
const imageupload = document.getElementById("file");

imageupload.onchange = function(){
    imageselect.src = URL.createObjectURL(imageupload.files[0])
}