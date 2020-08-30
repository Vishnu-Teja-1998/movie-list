const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = document.querySelector(".btn--passive");

const conformAddMovieButton = document.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

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

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
conformAddMovieButton.addEventListener("click", addMovieHandler);
