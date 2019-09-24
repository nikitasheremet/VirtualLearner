const ratings = {
};

const stars = 3;

for(let rating in ratings) {
  let starPercentage = (ratings[rating] / stars) * 100;
  let starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.${rating}.stars-inner`).style.width = starPercentageRounded;
}
