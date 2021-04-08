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
    let scoreContainer = document.querySelector(".score-container");
    scoreContainer.addEventListener("click", async (e) => {
        if (e.target.id === "upvote" || e.target.id === "downvote") {
            const response = await fetch(`/kitten/${e.target.id}`, {
                method: "PATCH",
                header: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            if (response.ok) {
                score.innerHTML = json.score;
            } else {
               window.alert("Error Occurred. Please Try Again.")
            }

        }
    })
   const form = document.querySelector(".comment-form")

   form.addEventListener("submit", (e) => {
      e.preventDefault();

      const updateComments = async function (comment) {
         const comments = await fetch('/kitten/comments', {
            method: "POST",
            header: {
               "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               comment
            })
         })
         const json = await response.json();
         if (json.ok) {
            addComment(json.comments)
         }
      }
   })
})
