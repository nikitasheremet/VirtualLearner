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
<<<<<<< HEAD
  $("#my-resources .home_buttons").prepend(`<button class=back-button><a href="/home" style="color:black"><img src = "/images/categories.svg" /></a></button>`)
=======
  $("#my-resources h3:eq(0)").after(`<button class=back-button><a href="/home" style="color:black">Show Categories</a></button>`)
>>>>>>> dae8f38e685f092f02d7b9e6801e4a44652ec5cf
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
<<<<<<< HEAD
  $("#my-resources .home_buttons").prepend(`<button class="show-all-resources"><img src = "/images/list.svg" /></button><button class="show-categories"><img src = "/images/categories.svg" /></button>`);
=======
  $("#my-resources h3:eq(0)").after(`<button class="show-all-resources">Show All</button><button class="show-categories">Show Categories</button>`);
>>>>>>> dae8f38e685f092f02d7b9e6801e4a44652ec5cf


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
  const id = data.originalEvent.path[4].classList[1]
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



// let previousRating = 0;
$("body").on("click", "i", (data) => {
  // console.log("previosu Rating",previousRating);
  let rating = data.originalEvent.path[0].attributes[0].nodeValue
  let resourceId = data.originalEvent.path[4].classList[1]
  console.log(data)

  if (data.target.parentElement.attributes[0].value === "true" && data.originalEvent.path[0].style.webkitTextStroke === "0.75px blue" && (!data.originalEvent.path[0].nextElementSibling || data.originalEvent.path[0].nextElementSibling.style.webkitTextStroke !== "0.75px blue")) {
    data.target.parentElement.attributes[0].value = "false"
    $(data.target.parentElement).children().each(function() {
      this.style.webkitTextStroke = ""
    })
  } else {
    data.target.parentElement.attributes[0].value = "true"
    $(data.target.parentElement).children().each(function() {
        this.style.webkitTextStroke = ""
      })
    data.originalEvent.path[0].style.webkitTextStroke = "0.75px blue"
    data.originalEvent.path[0].previousElementSibling.style.webkitTextStroke = "0.75px blue"
    data.originalEvent.path[0].previousElementSibling.previousElementSibling.style.webkitTextStroke = "0.75px blue"
  }

    // if (true) {
    //   // console.log("a")
    //   $(data.target.parentElement).children().each(function() {
    //     this.style.webkitTextStroke = ""
    //   })
    //   previousRating = rating;
    // } else {
    //   // console.log("b")
    //   $(data.target.parentElement).children().each(function() {
    //     this.style.webkitTextStroke = ""
    //   })
    //   data.originalEvent.path[0].style.webkitTextStroke = "0.75px blue"
    //   data.originalEvent.path[0].previousElementSibling.style.webkitTextStroke = "0.75px blue"
    //   data.originalEvent.path[0].previousElementSibling.previousElementSibling.style.webkitTextStroke = "0.75px blue"
    //   // previousRating = rating;
    // }



});


// $("body").on("click", "fa fa-star-o", (data) => {
//   alert('rating = ' + data.originalEvent.currentTarget.rating);
//   alert('rating = ' + data.originalEvent.target.rating);
//   alert('rating = ' + data.target.rating);
//   alert('rating = ' + data.currentTarget.rating);

// });



// let rating = Number(data.originalEvent.path[0].attributes[0].nodeValue);
// let resourceId = Number(data.originalEvent.path[0].attributes[1].nodeValue)
// alert
