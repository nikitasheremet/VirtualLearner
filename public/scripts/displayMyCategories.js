const userID = {
  user_id: 1
};
const myCategoriesList = $("#my-categories-list");

const ajaxCategories = () => {
return $.ajax({
    method: "POST",
    url: "/db/categories",
    data: userID
  });
}
const ajaxCategoryResources = (res) => {
return $.ajax({
    method: "POST",
    url: `/db/categories/results`,
    data: {user_id: userID.user_id,
    category: res}
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

ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.name);
  }
  myCategoriesList.append(output);
});

myCategoriesList.on("click", (data) => {
  ajaxCategoryResources(data.target.childNodes[0].data).then(res => {
    console.log(res);
  })
  // console.log(data.target.childNodes[0].data);
})
