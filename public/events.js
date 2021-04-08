window.addEventListener("DOMContentLoaded", () => {
    const getKitties = async function () {
        const response = await fetch("/kitten/image");
        const json = await response.json();
        if (response.ok) {
            let catPic = document.querySelector(".cat-pic");
            catPic.setAttribute("src", json.src);
        } else {
            addError(json);
        }
    }
    getKitties();

    let newPic = document.getElementById("new-pic");
    let loading = document.querySelector(".loader");
    newPic.addEventListener("click", (event) => {
        loading.innerHTML = "Loading...";
        getKitties();
    })
})
