const generateTemplateCategory = (categoryName) => {
  return `
  <div class="my-categories">
    <img src="/images/${categoryName}.png" class="card-img-top" alt="${categoryName} icon">
    <div class="card-body">
      <h5>${categoryName}</h5>
    </div>
  </div>`
}

const generateResources = (resource, color = "black") => {
console.log(resource);

return `
  <div class="card" id=${resource.id}>
    <div class="card-header">
        <h5 class="card-title" style=color:${color}>${resource.title}</h5>
    </div>
      <a href="${resource.url}">
        <img src="${resource.thumbnail_photo}" class="card-img-top" alt="...">
      </a>
    <div class="card-body">
      <p class="card-text">${resource.description}</p>
    </div>
    <div class="card-footer">
      <div class="left-footer">
        <img class=like-button data-cond=${resource.isLiked} src="/images/like.svg" alt="...">
        <span class=like-count style=color:${resource.isLiked ? "red" : "black"}>${resource.likes}</span>
        <img class="comment-bubble" src="/images/comment.svg" alt="...">
        <span>${resource.comments_count}</span>
      </div>
    <form class="post-comment" action="/new-comment" method="POST">
    <span>${resource.rating}</span>
    </div>
    <form class="post-comment" action="/db/new-comment" method="POST">
      <textarea name="comment" placeholder="Write a comment."></textarea>
      <input class="btn btn-light" type="submit" value="Post">
    </form>
  </div>`
}

