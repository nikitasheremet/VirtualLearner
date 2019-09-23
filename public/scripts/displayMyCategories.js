const myCategoriesList = $("#my-categories-list");

const ajaxCategories = () => {
return $.ajax({
    method: "GET",
    url: "/db/categories"
  });
}
const ajaxCategoryResources = (res) => {
  console.log("in AJAX");
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

}

ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.name);
  }
  myCategoriesList.append(output);
});

myCategoriesList.on("click", (data) => {
  console.log("heard a click");
  ajaxCategoryResources(data.target.childNodes[0].data).then(res => {
    console.log(res);
  })
})
