const createResource = data => {
`<h3>${findAllResources(data).title}</h3>
  <div>
    <article>
      <p>${findAllResources(data).url}</p>
    </article>
  </div>`
}

const renderResource = data => {
  const wall = $("#resources_found");
  wall.append(createResource(data));
}

// Currently nothing at /api/resources.
// const loadResources = () => {
//   $("#resources_found").empty();
//   $.ajax({
//     url: "/api/resources",
//     method: "GET",
//     dataType: "JSON",
//   })
//     .then(response => {
//       renderResource(response);
//     });
// };


$(document).ready(() => {
  renderResource('Horoscope')
});

