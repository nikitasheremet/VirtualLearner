
const ajaxResources = (res) => {
  return $.ajax({
      method: "GET",
      url: `/db/${res}`
    });
  }

const createResource = resource => {
  console.log(resource.url)
  return (
  `<div class="card">
  <div class="card-header">
      <h5 class="card-title">${resource.title}</h5>
  </div>
  <a href="${resource.url}" alt="..."><img src="${resource.url}" class="card-img-top" alt="..."></a
  <div class="card-body">
    <p class="card-text">${resource.description}</p>
  </div>
  <div class="card-footer">
  <img src="/images/like.svg" alt="...">
  <img src="/images/comment.svg" alt="...">
  </div>
</div>`
  )}

const renderResource = data => {
  const wall = $("#resources_found");
  wall.html(createResource(data));
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
