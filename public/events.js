window.addEventListener("DOMContentLoaded", () => {
   let upVote = document.getElementById("upvote")
   let downVote = document.getElementById("downvote")
   let score = document.querySelector(".score")
   let loading = document.querySelector(".loader");

   const getKitties = async function () {
      const response = await fetch("/kitten/image");
      const json = await response.json();

      if (response.ok) {
         let catPic = document.querySelector(".cat-pic");
         catPic.setAttribute("src", json.src);
         loading.innerHTML = ""
      } else {
         window.alert("Something Went Wrong. Please Try Again.")
      }
   }
   getKitties();

   let newPic = document.getElementById("new-pic");
   newPic.addEventListener("click", (event) => {
      loading.innerHTML = "Loading...";
      getKitties();
   })
   upVote.addEventListener("click", (e) => {
      score.val
   })
})
