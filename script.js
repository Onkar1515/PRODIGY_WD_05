
function createPost() {
    const username = document.getElementById("username").value || "Anonymous";
    const content = document.getElementById("postContent").value;

    if(content.trim() === "") return;

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const postText = document.createElement("p");
    postText.innerHTML = "<strong>" + username + ":</strong> " + content;

    const likeBtn = document.createElement("button");
    likeBtn.innerText = "Like (0)";
    let likeCount = 0;

    likeBtn.onclick = function() {
        likeCount++;
        likeBtn.innerText = "Like (" + likeCount + ")";
    };

    const commentInput = document.createElement("input");
    commentInput.placeholder = "Write a comment";

    const commentBtn = document.createElement("button");
    commentBtn.innerText = "Comment";

    const commentList = document.createElement("ul");

    commentBtn.onclick = function() {
        if(commentInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerText = commentInput.value;
        commentList.appendChild(li);
        commentInput.value = "";
    };

    postDiv.appendChild(postText);
    postDiv.appendChild(likeBtn);
    postDiv.appendChild(document.createElement("br"));
    postDiv.appendChild(commentInput);
    postDiv.appendChild(commentBtn);
    postDiv.appendChild(commentList);

    document.getElementById("posts").prepend(postDiv);
    document.getElementById("postContent").value = "";
}
