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

const ajaxAddLike = (id) => {
  // console.log("in ajax add like")
  // console.log(id);
  return $.ajax({
    method: "GET",
    url: `/db/add-like/${id}`
  });
}


const ajaxDeleteLike = (id) => {
  // console.log("in ajax delete like")
  // console.log(id);
  return $.ajax({
    method: "GET",
    url: `/db/delete-like/${id}`
  });
}

const ajaxUsersLikes = () => {
// console.log("IN AJAX");
  return $.ajax({
    method: "GET",
    url: `/db/mylikes`
  });
}

const ajaxFetchLikes = (id) => {
// console.log("IN AJAX");
  return $.ajax({
    method: "GET",
    url: `/db/likes/${id}`
  });
}


const ajaxResources = title => {
  return $.ajax({
    method: "GET",
    url: `/db/${title}`
  });
}

const ajaxComments = id => {
  return $.ajax({
    method: "GET",
    url: `/db/${id}/comments`
  })
}

const ajaxGetResourceById = id => {
  return $.ajax({
    method: "GET",
    url: `/db/resource/${id}`
  })
}

const ajaxAddRating = (id, rating) => {
  console.log("IN AJAX ADD");
  return $.ajax({
    method: "POST",
    url: `/db/add-rating/${id}`,
    data: {rating}
  })
}
const ajaxDeleteRating = (id) => {
  console.log("IN AJAX DELETE");
  return $.ajax({
    method: "POST",
    url: `/db/delete-rating/${id}`
  })
}

const ajaxGetUsersRating = () => {
  // console.log("IN AJAX DELETE");
  return $.ajax({
    method: "GET",
    url: `/db/get-user-rating`
  })
}
const ajaxDeleteResource = id => {
  return $.ajax({
    method: "GET",
    url: `/db/delete/resource/${id}`
  })
}

const ajaxTopResources = () => {
  return $.ajax({
    method: "GET",
    url: `/db/top-resources`
  })
}

const ajaxGetProfilePic = () => {
  return $.ajax({
    method: "GET",
    url: `/db/get-profile-pic`
  })
}
