// Example: Show an alert on poll submission
document.querySelector("form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for voting!");
  });
document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const commentText = document.getElementById("comment").value.trim();

  if (name && commentText) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment");
    commentBox.innerHTML = `<strong>${name}</strong><p>${commentText}</p>`;

    document.getElementById("comments-display").prepend(commentBox);

    // Clear input
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
});
  