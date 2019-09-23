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
  <div class="card">
    <div class="card-header">
        <h5 class="card-title" style=color:${color}>${resource.title}</h5>
    </div>
    <img src="${resource.thumbnail_photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${resource.description}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`
}
