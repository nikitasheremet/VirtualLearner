const generateTemplateCategory = (categoryName) => {
  return `
  <article class=my-categories>
    <div>
      <a href="#">${categoryName}</a>
    </div>
  </article>
  `
}

const generateResources = (resource) => {
return `
<div>
<p>${resource.title}<p>
</div>
`
}
