const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById("book");

fontSize.forEach((element) => { 
  element.onclick = (event) => event.preventDefault();
  element.addEventListener("click", () => {
    fontSize.forEach((element) => element.classList.remove("font-size_active"));
    element.classList.add("font-size_active");

    const fontSizeActive = document.querySelector(".font-size_active");
    book.classList.remove("book_fs-small", "book_fs-big");
    if (fontSizeActive.dataset.size === "small") {
      book.classList.add("book_fs-small");
    } else if (fontSizeActive.dataset.size === "big") {
      book.classList.add("book_fs-big");
    };
  });
});