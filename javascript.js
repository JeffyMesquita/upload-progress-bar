const dropArea = document.querySelector(".drag-files");

dropArea.addEventListener("dragover", (e) => {
  dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", (e) => {
  dropArea.classList.remove("dragover");
});
