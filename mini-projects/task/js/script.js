const changeBtn = document.getElementById("btn-change");
const resetBtn = document.getElementById("btn-reset");
const editText = document.getElementById("edit-text");
const loaderContainer = document.getElementById("loader");
const progress = document.getElementById("progress");

const waitTime = 1000;

function waitFunction(waitTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime);
  });
}

function changeFunction() {
  return new Promise(() => {
    editText.style.color = "#fff";
    editText.style.backgroundColor = "black";
    loaderContainer.classList.remove("loader-active");
  });
}

changeBtn.addEventListener("click", async (e) => {
  loaderContainer.classList.add("loader-active");
  //progress.style.animationDuration = waitTime;

  await waitFunction(waitTime);
  await changeFunction();

  //   setTimeout(() => {
  //     console.log("hold");
  //     editText.style.color = "#fff";
  //     editText.style.backgroundColor = "black";
  //     loaderContainer.classList.remove("loader-active");
  //   }, 2000);
});

resetBtn.addEventListener("click", (e) => {
  editText.style.color = "brown";
  editText.style.backgroundColor = "transparent";
});
