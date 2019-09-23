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
const ajaxAllResources = () => {
  // console.log("in ajax");
  return $.ajax({
    method: "GET",
    url: "/db/resources/all"
  });
}
