const renderResource = data => {
  const wall = $("#resources_found");
  data.isLiked = usersLikes.responseJSON.map(users => {
        if(users.resource_id === data.id) {
          return "true"
        } else {
          return "false"
        }
      }).includes("true");
  console.log(data);
  wall.prepend(generateResources(data));

}

$("#search-all-resources").submit( event => {
  event.preventDefault()
  const input = $("#search").val()
  ajaxResources(input).then(res => {
    $("#resources_found").empty()
    for (let resource of res) {
      renderResource(resource);
    }
  });
})

//On comment-bubble click:
//Hide card image and body
//Append comments associated with resource to card footer
//Show comment section that holds textarea and comments list
$("body").on("click", ".comment-bubble", function(data) {
  const commentSection = $(this).parents(".card-footer").find(".comment-section")
  const commentsList = $(this).parents(".card-footer").find(".comments-list")
  const resourceId = data.originalEvent.path[4].classList[1]

  console.log("CLICK", data)
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


$("body").on("submit", ".post-comment", function(event) {
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

//!LOAD TOP RESOURCES
// $( document ).ready(function() {
//   ajaxTopResources().then(res => {
//     console.log(res, "ajaxtopresources result")
//   $("#resources_found").empty()

//     for (let resource of res) {
//       renderResource(resource);
//     }
//   })

// });
