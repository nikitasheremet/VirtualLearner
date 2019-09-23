const generateTemplateCategory = (categoryName) => {
  return `
  <div class="my-categories">
    <img src="/images/science_icon.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5>${categoryName}</h5>
    </div>
  </div>`
}

const generateResources = (resource, color = "black") => {
return `
<div>
<p style=color:${color}>${resource.title}<p>
</div>
`
}
