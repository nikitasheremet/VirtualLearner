const renderResource = data => {
  const wall = $("#resources_found");
  $("#resources_found").empty()
  data.isLiked = usersLikes.responseJSON.map(users => {
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

//On comment-bubble click, append comments associated with resource to bottom of card.
$(".container").on("click", ".comment-bubble", function(data) {
  const commentSection = $(this).parent().parent().parent()
  const resourceId = data.originalEvent.path[3].classList[1]

  ajaxComments(resourceId).then(res => {
    for (let comment of res) {
      commentSection.append(createComment(comment))
    }
  })
})


$(".container").on("submit", ".post-comment", function(event) {
  event.preventDefault();
  const input = $(this).find("textarea").val();
  //! userId to be determined cookie session
  const userId = 1
  const resourceId = event.originalEvent.path[1].classList[1]
  $.ajax({
    url: "/db/new-comment",
    method: 'POST',
    data: {
      input,
      userId,
      resourceId
    }
  })
})
