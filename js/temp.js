const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

async function getProductById(productId) {
  const url = "http://flower-power.local/wp-json/wp/v2/posts/" + id;
  const response = await fetch(url);
  const result = await response.json();

  productDetails(result);
}

function productDetails(info) {
  const recipeTitle = document.getElementById("recipe-title");
  const recipeImage = document.getElementById("recipe-image");

  recipeTitle.innerText = info.title.rendered;
  recipeImage.src = info.featured_media_url;
  recipeImage.alt = "Cover of " + info.title.rendered;
}

getProductById(id);

// image
const recipeImage = document.createElement("img");
recipeImage.src = info[i].yoast_head_json.og_image[0].url;
recipeImage.classList.add("imgstyle");
container.appendChild(recipeImage);

// entire blog post
const recipePost = document.createElement("p");
recipePost.innerHTML = info[i].content.rendered;
recipePost.classList.add("txtstyle");
container.appendChild(recipePost);

// description
const recipeDesc = document.createElement("p");
recipeDesc.innerHTML = posts[i].yoast_head_json.description;
recipeDesc.classList.add("txtstyle");
container.appendChild(recipeDesc);

/*

async function saveAndPrintData() {
  const [posts, categories] = await getData();
  const firstHalf = splitArray(posts).left;
  const secondHalf = splitArray(posts).right;
  const specificPost = firstHalf.find((element) => element.id == 110);
  console.log(specificPost);

  printData(firstHalf, categories);
}

// split half

function splitArray(posts) {
  (mid = Math.ceil(posts.length / 2)),
    (obj = {
      left: posts.slice(0, mid),
      right: posts.slice(mid),
    });
  return obj;
}

saveAndPrintData();

*/

var w = window.innerWidth;
var h = window.innerHeight;
