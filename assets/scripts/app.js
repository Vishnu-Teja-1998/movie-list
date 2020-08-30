const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const toggleMovieModel = () => {
  addMovieModal.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
