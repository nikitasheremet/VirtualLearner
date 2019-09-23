const myCategoriesList = $("#my-categories-list");

const ajaxCategories = () => {
return $.ajax({
    method: "GET",
    url: "/db/categories"
  });
}
const ajaxCategoryResources = (res) => {
return $.ajax({
    method: "GET",
    url: `/db/categories/${res}`
  });
}

const generateTemplateCategory = (categoryName) => {
  return `
  <article>
    <div>
      <a href="#">${categoryName}</a>
    </div>
  </article>
  `
}

const generateResourcesForCat = (resource) => {
return `
<div>
<p>${resource.title}<p>
</div>
`
}

ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.name);
  }
  myCategoriesList.append(output);
});

myCategoriesList.on("click", (data) => {
  ajaxCategoryResources(data.target.childNodes[0].data).then(res => {
    let output = "";
    for (resource of res) {
      output += generateResourcesForCat(resource)
    }
    myCategoriesList.html(output);
  })
})
