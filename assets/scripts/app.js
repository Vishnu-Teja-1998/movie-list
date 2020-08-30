const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = document.querySelector(".btn--passive");

const conformAddMovieButton = document.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 ★</p>
    </div>
    `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModel();
  clearMovieInput();
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

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModel();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
conformAddMovieButton.addEventListener("click", addMovieHandler);
