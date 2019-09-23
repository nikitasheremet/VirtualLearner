
const ajaxResources = (res) => {
  return $.ajax({
      method: "GET",
      url: `/db/${res}`
    });
  }

const createResource = resource => {
  return (
`<h3>${resource.title}</h3>
  <div>
    <article>
      <p>${resource.url}</p>
    </article>
  </div>`
  )}

const renderResource = data => {
  const wall = $("#resources_found");
  wall.append(createResource(data));
}


$("#search-all-resources").submit( event => {
event.preventDefault()
console.log("SEARCH");
const input = $("#search").val()
console.log(input)

ajaxResources(input).then(res => {
  for (let resource of res) {
    renderResource(resource);
  }
});
})
