// const url = "http://flower-power.local/wp-json/wp/v2/posts?per_page=20";
// const categoriesUrl = "http://flower-power.local/wp-json/wp/v2/categories";

let offsetValue = 0;
let postLimit = 9;

async function getData() {
  const url = `http://anjakvernenes.no/wp-json/wp/v2/posts?per_page=${postLimit}&offset=${offsetValue}`;
  console.log(url);

  const categoriesUrl = "http://anjakvernenes.no/wp-json/wp/v2/categories";

  const [postsResponse, categoriesResponse] = await Promise.all([
    fetch(url),
    fetch(categoriesUrl),
  ]);
  const [posts, categories] = await Promise.all([
    postsResponse.json(),
    categoriesResponse.json(),
  ]);
  printData(posts, categories);
  return [posts, categories];
}

getData();

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
function printData(posts, categories) {
  const dataContainer = document.querySelector(".data-container");

  for (let i = 0; i < posts.length; i++) {
    const container = document.createElement("a");
    container.href = `post.html?id=${posts[i].id}`;
    container.classList.add("container");

    dataContainer.appendChild(container);

    // image
    const recipeImage = document.createElement("img");
    recipeImage.src = posts[i].yoast_head_json.og_image[0].url;
    recipeImage.classList.add("imgstyle");
    container.appendChild(recipeImage);

    // categories
    const categoriesContainer = document.createElement("div");
    categoriesContainer.classList.add("categories");

    for (let categoryId of posts[i].categories) {
      const category = getCategoryById(categories, categoryId);
      if (category) {
        const categoryElement = document.createElement("span");
        categoryElement.innerText = category.name;
        categoriesContainer.appendChild(categoryElement);
      }
    }

    container.appendChild(categoriesContainer);

    // title
    const recipeName = document.createElement("h1");
    recipeName.innerText = posts[i].title.rendered;
    recipeName.classList.add("txtstyle");
    container.appendChild(recipeName);

    dataContainer.appendChild(container);

    // readmore
    const readMore = document.createElement("p");
    readMore.innerText = "Read more";
    readMore.classList.add("txtstyle");
    container.appendChild(readMore);
  }
}

function getCategoryById(categories, categoryId) {
  return categories.find((category) => category.id === categoryId);
}

const loadMore = document.querySelector(".load-more-btn");

loadMore.onclick = function () {
  offsetValue += 9;
  getData();
};
