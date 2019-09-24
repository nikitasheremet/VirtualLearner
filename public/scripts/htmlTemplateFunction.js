const generateTemplateCategory = (categoryName) => {
  return `
  <div class="my-categories">
    <img src="/images/science_icon.jpg" class="card-img-top" alt="${categoryName} icon">
    <div class="card-body">
      <h5>${categoryName}</h5>
    </div>
  </div>`
}

const generateResources = (resource, color = "black") => {
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
        <img class=like-button data-cond=false src="/images/like.svg" alt="...">
        <span>${resource.likes}</span>
        <img src="/images/comment.svg" alt="...">
      </div>
        <span>rating</span>
    </div>
  </div>`
}
