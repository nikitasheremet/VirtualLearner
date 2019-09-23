const myCategoriesList = $("#my-categories-list");
const myCategories = $(".my-categories");

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
  <article class=my-categories>
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
// const generateResourcesForLikes = (resource) => {
// return `
// <div>
// <p style="color:red">${resource.title}<p>
// </div>
// `
// }

ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.name);
  }
  myCategoriesList.html(output);
});

myCategoriesList.on("click", myCategories,  (data) => {
  console.log(data);
  console.log("clicked");
  myCategoriesList.off();
  ajaxCategoryResources(data.target.childNodes[0].data).then(res => {
    // console.log(res);
    let output = "";
    for (let resource of res.myResources) {
      output += generateResourcesForCat(resource)
    }
    // for (let resource of res.myLikes) {
    //   output += generateResourcesForLikes(resource)
    // }
    myCategoriesList.html(`
    <button class=back-button><a href="/home">BACK</a></button>${output}
    `);
  })
})
