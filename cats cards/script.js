const controls = document.querySelector(".controls");

controls.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }

  const preActivePane = document.querySelector(".pane.is-active");
  if (preActivePane) {
    preActivePane.classList.remove("is-active");
  }
  const paneId = e.target.dataset.id;
  document.querySelector(`#${paneId}`).classList.add("is-active");
});
