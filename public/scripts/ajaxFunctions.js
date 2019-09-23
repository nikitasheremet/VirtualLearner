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

const ajaxLikedResources = () => {
  return $.ajax({
    method: "GET",
    url: "/db/resources/liked"
  });
}

const ajaxAddLike = (user_id, resource_id) => {
  console.log("in ajax add like")
  return $.ajax({
    method: "POST",
    url: "/db/likes/add",
    data: {user_id,
    resource_id}
  });
}

