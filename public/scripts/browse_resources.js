
const ajaxResources = () => {
  return $.ajax({
      method: "GET",
      url: "/db/resources"
    });
  }


const createResource = data => {
  return (
`<h3>${findAllResources(data).title}</h3>
  <div>
    <article>
      <p>${findAllResources(data).url}</p>
    </article>
  </div>`
  )}

const renderResource = data => {
  const wall = $("#resources_found");
  wall.append(createResource(data));
}


ajaxResources().then(res => {
  for (let resource of res) {
    renderResource(resource);
  }
});


$(document).ready(() => {
  renderResource('Horoscope')
});


$("#resource_found").on("click", (data) => {
  console.log("heard a click");
  ajaxResources(data.target.childNodes[0].data).then(res => {
    console.log(res);
  })
})
