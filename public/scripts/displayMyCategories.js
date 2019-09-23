const myCategoriesList = $("#my-categories-list");
const myCategories = $(".my-categories");


// Display Categories and Show All/Show Categories Buttons
ajaxCategories().then(res => {
  console.log("in first action");
  let output = "";
  console.log(res);
  for (let cat of res) {
    output += generateTemplateCategory(cat.category);
  }
  $("#my-resources h3:eq(0)").after(`<button class="show-all-resources">Show All</button><button class="show-categories">Show Categories</button>`);
  myCategoriesList.html(output);
  myCategoriesList.append(generateTemplateCategory("Liked"))
});


// On click For Show all Resources Button
$("#my-resources").on("click", ".show-all-resources", (data) => {
  ajaxAllResources().then(res => {
    console.log(res);
    let output = ""
    for (resource of res.myResources) {
      output += generateResources(resource)
    }
    for (resource of res.myLikes) {
      output += generateResources(resource, "red")
    }
    myCategoriesList.html(output);
  })
})


// On click For Show Categories Button
$("#my-resources").on("click", ".show-categories", (data) => {
  ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.category);
  }
    myCategoriesList.html(output);
    myCategoriesList.append(generateTemplateCategory("Liked"))
  })
})


// Clicking on a category calls the db and gets a list of resources belonging to that category,
// And displays back button
myCategoriesList.on("click", myCategories,  (data) => {
  // console.log(data);
  // console.log("clicked");
  myCategoriesList.off();
  let output = "";
  clickedCategory = data.target.childNodes[0].data
  if (clickedCategory === "Liked") {
    ajaxLikedResources().then(res => {
      for (let resource of res) {
        output += generateResources(resource)
      }
      $(".show-all-resources").hide();
      $(".show-categories").hide();
      myCategoriesList.html(`
      <button class=back-button><a href="/home">BACK</a></button>${output}
      `);
    })
  } else {
    ajaxCategoryResources(clickedCategory).then(res => {
      for (let resource of res) {
        output += generateResources(resource)
      }
      $(".show-all-resources").hide();
      $(".show-categories").hide();
      myCategoriesList.html(`
      <button class=back-button><a href="/home">BACK</a></button>${output}
      `);
    })
  }
})
