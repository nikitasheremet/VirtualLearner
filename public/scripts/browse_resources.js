const createResource = resource => {
  return `
<div class="card" id=${resource.id}>
  <div class="card-header">
      <h5 class="card-title">${resource.title}</h5>
  </div>
  <a href="${resource.url}" alt="..."><img src="${resource.thumbnail_photo}" class="card-img-top" alt="..."></a>
  <div class="card-body">
    <p class="card-text">${resource.description}</p>
  </div>
  <div class="card-footer">
    <div class="left-footer">
      <img class=like-button data-cond=false src="/images/like.svg" alt="...">
      <span>${resource.likes}</span>
      <img class="comment-bubble" src="/images/comment.svg" alt="...">
      <span>${resource.comments_count}</span>
    </div>
      <span>rating</span>
  </div>
</div>`
}

const createComment = data => {
  return `
  <ul>
    <li>${data.comment}</li>
  </ul>`
}

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
$(".container").on("click", ".comment-bubble", function() {
  const commentSection = $(this).parent().parent().parent()
  const resourceId = $(this).parents(".card")[0].attributes.id.value

  ajaxComments(resourceId).then(res => {

    for (let comment of res) {
      commentSection.append(createComment(comment))
    }
  })
})


$(".post-comment").submit(function(event) {
  event.preventDefault();
  const input = $(this).val();

  console.log(input, req.body)
})
