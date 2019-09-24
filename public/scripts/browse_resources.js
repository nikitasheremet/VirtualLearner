
const ajaxResources = (res) => {
  return $.ajax({
      method: "GET",
      url: `/db/${res}`
    });
  }

const createResource = resource => {
  console.log(resource.url)
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
      <img src="/images/comment.svg" alt="...">
      <span>${resource.comments_count}</span>
    </div>
      <span>rating</span>
  </div>
</div>`
}

const renderResource = data => {
  const wall = $("#resources_found");
  $("#resources_found").empty()
  wall.append(createResource(data));
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
