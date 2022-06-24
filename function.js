let redirect = document.querySelector(".covid-redirect");

function closePopUp() {
    redirect.classList.add("move-up");
}

function copyToClipboard(event) {
    navigator.clipboard.writeText(event.children[1].innerHTML);
    let copied = document.createElement("p");
    copied.innerHTML = "Copied";
    copied.classList.add("copied");
    event.appendChild(copied);
    setTimeout(() => {
        copied.remove();
      }, "1000")
      
}