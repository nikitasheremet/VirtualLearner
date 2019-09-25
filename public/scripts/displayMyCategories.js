const myCategoriesList = $("#my-categories-list");

const displayAndMakeBackButton = (res) => {
  let output = "";
  for (let resource of res) {
    console.log("d")
    resource.isLiked = usersLikes.responseJSON.map(users => {
      console.log(users.resource_id, resource.id)
        if(users.resource_id === resource.id) {
          return "true"
        } else {
          return "false"
        }
      }).includes("true");
      console.log(resource);
    output += generateResources(resource)
  }
  $(".show-all-resources").hide();
  $(".show-categories").hide();
  myCategoriesList.html(output);
  $("#my-resources h3:eq(0)").after(`<button class=back-button><a href="/home" style="color:black">Show Categories</a></button>`)
}

// Clicking on a category calls the db and gets a list of resources belonging to that category,
// And displays back buttom
const clickCategory = (data) => {
  myCategoriesList.off();
  clickedCategory = data.currentTarget.children[1].children[0].innerHTML
  if (clickedCategory === "Liked") {
    console.log("a");
    usersLikes = ajaxUsersLikes()
      console.log("b")
      // console.log(res);
      ajaxLikedResources().then(res2 => {
        console.log("c")
        displayAndMakeBackButton(res2);
    })
  } else {
    ajaxCategoryResources(clickedCategory).then(res => {
      displayAndMakeBackButton(res);
    })
  }
}

let usersLikes = ajaxUsersLikes()
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
    console.log(res);
    let output = ""
    for (resource of res.myResources) {
      // console.log(typeof resource);
      resource.isLiked = usersLikes.responseJSON.map(users => {
        if(users.resource_id === resource.id) {
          return "true"
        } else {
          return "false"
        }
      }).includes("true");
      // console.log(resource);

      if (resource.user_id !== res.ID) {
        output += generateResources(resource, "red")
      } else {
        output += generateResources(resource)
      }
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
  // console.log(res);
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

$("body").on("click",".like-button",(data) => {
  // console.log(data.originalEvent.path[3].classList[1])
  const id = data.originalEvent.path[3].classList[1]
  const clickStatus = data.originalEvent.path[0].attributes[1].value;
  if (clickStatus === "false") {
    $(`.${id} .like-button`).attr("data-cond","true");
    $(`.${id} .like-count`).css({"color":"red"})
    ajaxAddLike(id).then(res => {
      // console.log(res);
    }).then(() => {
      // console.log("IWASCLICKED")
      ajaxFetchLikes(id).then((res) => {
        $(`.${id} .like-count`).html(res[0].count)
      })
    })

  } else {
    $(`.${id} .like-button`).attr("data-cond","false");
    $(`.${id} .like-count`).css({"color":"black"})
    ajaxDeleteLike(id).then(res => {

    }).then(() => {
      // console.log("IWASCLICKED")
      ajaxFetchLikes(id).then((res) => {
        $(`.${id} .like-count`).html(res[0].count)
      })
    })
  }
})
