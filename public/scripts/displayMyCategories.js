const userID = {
  user_id: 1
};

const outputCatg = () => {
return $.ajax({
    method: "POST",
    url: "/db/categories",
    data: userID
  });
}

const generateTemplate = (categoryName) => {
  return `
  <article>
    <div>
      <p>${categoryName}</p>
    </div>
  </article>
  `
}

outputCatg().then(res => {
  let output = "";
  for (let cat of res) {
    output += generateTemplate(cat.name);
  }
  $("#my-categories-list").append(output);
});


