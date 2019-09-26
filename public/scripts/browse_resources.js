const renderResource = data => {
  const wall = $("#resources_found");
  $("#resources_found").empty()
  data.isLiked = usersLikes.responseJSON.map(users => {
    filteredRating = userRatings.responseJSON.filter(obj => {
      return obj.resource_id === data.id
    })
    console.log(filteredRating);
    if (filteredRating.length > 0) {
      data.userRating = filteredRating[0].rating
    } else {
      data.userRating = null
    }
        if(users.resource_id === data.id) {
          return "true"
        } else {
          return "false"
        }
      }).includes("true");
    if (data.url.match(/www\.youtube\./)) {
      data.thumbnail_photo = `https://img.youtube.com/vi/${data.url.split('=')[1]}/hqdefault.jpg`
    } else {
        // data.thumbnail_photo = `http://api.screenshotlayer.com/api/capture?access_key=3f06297d1eae1c79319ab9edd2faeb56&url=${data.url}&placeholer=1`
    }
    // https://img.youtube.com/vi/BuebC0CfD8E/hqdefault.jpg
  console.log(data);
  wall.append(generateResources(data));

}

$("#search-all-resources").submit( event => {
  event.preventDefault()
  const input = $("#search").val()

  ajaxResources(input).then(res => {
    for (let resource of res) {
      renderResource(resource);
    }
  });
})

//On comment-bubble click:
//Hide card image and body
//Append comments associated with resource to card footer
//Show comment section that holds textarea and comments list
$(".container").on("click", ".comment-bubble", function(data) {
  const commentSection = $(this).parents(".card-footer").find(".comment-section")
  const commentsList = $(this).parents(".card-footer").find(".comments-list")
  const resourceId = data.originalEvent.path[4].classList[1]

  $(this).parents(".card").find(".card-img-top").slideToggle()
  $(this).parents(".card").find(".card-body").slideToggle()
  commentsList.empty()

  ajaxComments(resourceId).then(res => {
    for (let comment of res) {
      commentsList.prepend(createComment(comment))
    }
  })

  commentSection.toggle()
  commentSection.find("textarea").focus()
})


$(".container").on("submit", ".post-comment", function(event) {
  event.preventDefault();

  const commentTextarea = $(this).find("textarea")
  const commentsList = $(".comments-list")

  let input = commentTextarea.val();
  //! userId to be determined cookie session
  const userId = 1
  const resourceId = event.originalEvent.path[3].classList[1]

  $.ajax({
    url: "/db/new-comment",
    method: 'POST',
    data: {
      input,
      userId,
      resourceId
    }
  })

  commentsList.empty()
  commentTextarea.val("")
  ajaxComments(resourceId).then(res => {
    for (let comment of res) {
      commentsList.prepend(createComment(comment))
    }
  })

  //Get this resource info from db to update comment count
  ajaxGetResourceById(resourceId).then(res => {
    $(this).parents(".card-footer").find(".comment-bubble").next().html(res.comments_count)
  })

})

// $(".container").on("click", ".btn", function(data) {
//   const resourceId = data.originalEvent.path[3].classList[1]
//   ajaxDeleteResource(resourceId).then(() => {
//     location.reload()
//   })
// })
