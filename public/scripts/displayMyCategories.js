const myCategoriesList = $("#my-categories-list");
const myCategories = $(".my-categories");


// Display Categories and Show All/Show Categories Buttons
ajaxCategories().then(res => {
  // console.log("in first action");
  let output = "";
  // console.log(res);
  for (let cat of res) {
    output += generateTemplateCategory(cat.category);
  }
  $("#my-resources h3:eq(0)").after(`<button class="show-all-resources">Show All</button><button class="show-categories">Show Categories</button>`);
  $(".show-categories").hide();
  myCategoriesList.html(output);
  myCategoriesList.append(generateTemplateCategory("Liked"))
  $(".my-categories").on("click",(data) => {
    clickCategory(data);
  })
});


// On click For Show all Resources Button
$("#my-resources").on("click", ".show-all-resources", (data) => {
  $(".show-all-resources").hide();
  $(".show-categories").show();
  ajaxAllResources().then(res => {

    // console.log(res);
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
  $(".show-categories").hide();
  $(".show-all-resources").show();
  ajaxCategories().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplateCategory(cat.category);
  }
    myCategoriesList.html(output);
    myCategoriesList.append(generateTemplateCategory("Liked"))
    $(".my-categories").on("click",(data) => {
    clickCategory(data);
    })
  })
})


// Clicking on a category calls the db and gets a list of resources belonging to that category,
// And displays back buttom
const displayAndMakeBackButton = (res) => {
  let output = "";
  for (let resource of res) {
    output += generateResources(resource)
  }
  $(".show-all-resources").hide();
  $(".show-categories").hide();
  myCategoriesList.html(output);
  $("#my-resources h3:eq(0)").after(`<button class=back-button><a href="/home" style="color:black">Show Categories</a></button>`)
}

const clickCategory = (data) => {
  myCategoriesList.off();
  clickedCategory = data.currentTarget.children[1].children[0].innerHTML
  if (clickedCategory === "Liked") {
    ajaxLikedResources().then(res => {
      displayAndMakeBackButton(res);
    })
  } else {
    ajaxCategoryResources(clickedCategory).then(res => {
      displayAndMakeBackButton(res);
    })
  }
}
