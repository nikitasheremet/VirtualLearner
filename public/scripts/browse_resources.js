
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
  <img src="${resource.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${resource.description}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
