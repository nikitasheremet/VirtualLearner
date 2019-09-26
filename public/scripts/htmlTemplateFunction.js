const generateTemplateCategory = (categoryName) => {
  return `
  <div class="my-categories">
    <img src="/images/${categoryName}.png" class="card-img-top" alt="${categoryName} icon">
    <div class="card-body">
      <h5>${categoryName}</h5>
    </div>
  </div>`
}

const generateResources = (resource, color = "black") => {
console.log(resource);

return `
  <div class="card ${resource.id}">
    <div class="card-header">
        <h5 class="card-title" style=color:${color}>${resource.title}</h5>
    </div>
      <a href="${resource.url}">
        <img src="${resource.thumbnail_photo}" class="card-img-top" alt="...">
      </a>
    <div class="card-body">
      <p class="card-text">${resource.description}</p>
    </div>
    <div class="card-footer">
      <div class="footer-top">
        <div class="left-footer">
          <img class=like-button data-cond=${resource.isLiked} src="/images/like.svg" alt="...">
          <span class=like-count style=color:${resource.isLiked ? "red" : "black"}>${resource.likes}</span>
          <img class="comment-bubble" src="/images/comment.svg" alt="...">
          <span>${resource.comments_count}</span>
        </div>
        <span data-rated=${resource.rating ? "true":"false"}>${getStars(resource.rating, resource.userRating)}</span>
      </div>
      <div class="comment-section">
        <form class="post-comment" action="/db/new-comment" method="POST">
          <textarea name="comment" placeholder="Write a comment."></textarea>
          <input class="btn btn-light" type="submit" value="Post">
        </form>
        <div class="comments-list"></div>
      </div>
    </div>
  </div>`
}

const createComment = data => {
  return `
  <ul class="list">
    <li>
      <div>
        <img src="/images/avatar.svg" />
      </div>
      <div>
        <p>${data.comment}</p>
        <p class="timestamp"><small>on September 25th, 2019</small></p>
      </div>
    </li>
  </ul>`
}

// // Render the stars according to the resource's rating
// function getStars(resource) {

//   // Round rating to nearest whole
//   rating = Math.round(resource.rating);

//   let stars = [];
//   let counter = 1;

//   for (let i = 1; i <= 3; i++) {
//     if (i <= rating) {
//       stars.push('<i class="fa fa-star" resource-id=${resource.id} rating=${i} aria-hidden="true" style="color: gold;"></i>&nbsp;');
//     } else {
//       stars.push('<i class="fa fa-star-o" resource-id=${resource.id} rating=${i} aria-hidden="true" style="color: gold;"></i>&nbsp;');
//       counter ++
//     }
//   }

//   return stars.join('');
// }

// To get average rating from database
function getStars(rating, userRating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2
  let stars = [];
  counter = 1;

  // Add all the filled whole stars
  for (var i = rating; i >= 1; i--)
  stars.push(`<i class="fa fa-star" aria-hidden="true icon-large" style="color:gold"></i>&nbsp;`);

  // If there is a half a star, append it
  if (i == .5) stars.push(`<i class="fa fa-star-half-o icon-large" aria-hidden="true" style="color:gold"></i>&nbsp;`);

  // Fill the empty stars
  for (let i = (3 - rating); i >= 1; i--)
  stars.push(`<i class="fa fa-star-o icon-large" aria-hidden="true" style="color:gold"></i>&nbsp;`);


  for (i in stars) {
  stars[i] = stars[i].slice(0,2) +' rating ='+ `"${counter}"` + stars[i].slice(2);
  counter ++
  }
  console.log(stars[0].slice(0,-12));
  for (let i = userRating-1; i >= 0; i--) {
    console.log(i);
    stars[i] = stars[i].slice(0,-12) +';-webkit-text-stroke: 0.75px blue;' + stars[i].slice(-12);
  }
  return stars.join('');
  }
