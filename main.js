let urlLink = document.querySelector(".urlLink");
let errorValue = document.querySelector(".error-value");
const shortenSubmit = document.querySelector("#shortesubmit");
const urlInput = document.querySelector("#urlnIput");
const APILink = 'https://rel.ink';

// validate
let validateInput = () => {
    if (urlInput.value === "") {
        urlInput.classList.add("error");
        errorValue.classList.add("show");
    } else {
        urlInput.classList.remove("error");
        errorValue.classList.remove("show")
    }
}