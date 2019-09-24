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


$(".container").on("submit", ".post-comment", function(event) {
  event.preventDefault();
  const input = $(this).find("textarea").val();
  //! userId to be determined cookie session
  const userId = 1
  const resourceId = $(this).parents(".card")[0].attributes.id.value
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
