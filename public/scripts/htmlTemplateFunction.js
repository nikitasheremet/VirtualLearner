const generateTemplateCategory = (categoryName) => {
  return `
  <article class=my-categories>
    <div>
      <a href="#">${categoryName}</a>
    </div>
  </article>
  `
}

const generateResources = (resource, color = "black") => {
return `
<div>
<p style=color:${color}>${resource.title}<p>
</div>
`
}
