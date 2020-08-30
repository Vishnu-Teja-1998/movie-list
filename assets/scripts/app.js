const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = document.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModel();
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
