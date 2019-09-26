const myCategoriesList = $("#my-categories-list");

const displayAndMakeBackButton = (res) => {
  let output = "";
  for (let resource of res) {
    resource.isLiked = usersLikes.responseJSON.map(users => {
      console.log(users.resource_id, resource.id)
        if(users.resource_id === resource.id) {
          return "true"
        } else {
          return "false"
        }
      }).includes("true");
      console.log(resource);
    if (resource.url.match(/www\.youtube\./)) {
      resource.thumbnail_photo = `https://img.youtube.com/vi/${resource.url.split('=')[1]}/hqdefault.jpg`
    } else {
        // resource.thumbnail_photo = `http://api.screenshotlayer.com/api/capture?access_key=3f06297d1eae1c79319ab9edd2faeb56&url=${resource.url}&placeholer=1`
    }
    // https://img.youtube.com/vi/BuebC0CfD8E/hqdefault.jpg
    output += generateResources(resource)
  }
  $(".show-all-resources").hide();
  $(".show-categories").hide();
  myCategoriesList.html(output);
  $("#my-resources .home_buttons").prepend(`<button class=back-button><a href="/home" style="color:black"><img src = "/images/categories.svg" /></a></button>`)
}

// Clicking on a category calls the db and gets a list of resources belonging to that category,
// And displays back buttom
const clickCategory = (data) => {
  myCategoriesList.off();
  clickedCategory = data.currentTarget.children[1].children[0].innerHTML
  if (clickedCategory === "Liked") {
    usersLikes = ajaxUsersLikes()
      ajaxLikedResources().then(res2 => {
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
  $("#my-resources .home_buttons").prepend(`<button class="show-all-resources"><img src = "/images/list.svg" /></button><button class="show-categories"><img src = "/images/categories.svg" /></button>`);


  $(".show-categories").hide();
  myCategoriesList.html(generateTemplateCategory("Liked"))
  myCategoriesList.append(output);

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
      if (resource.url.match(/www\.youtube\./)) {
      resource.thumbnail_photo = `https://img.youtube.com/vi/${resource.url.split('=')[1]}/hqdefault.jpg`
      } else {
        // resource.thumbnail_photo = `http://api.screenshotlayer.com/api/capture?access_key=3f06297d1eae1c79319ab9edd2faeb56&url=${resource.url}&placeholer=1`
      }
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




$("body").on("click", "i", (data) => {
  const clickStatus = data.originalEvent.path[0].attributes[0].nodeValue;
});

$( "fa fa-star-half-o" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "fa fa-star-o" ).click(function() {
  alert( "Handler for .click() called." );
});
