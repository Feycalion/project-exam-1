const url = "http://flower-power.local/wp-json/wp/v2/posts";
const categoriesUrl = "http://flower-power.local/wp-json/wp/v2/categories";

async function getData() {
  const [postsResponse, categoriesResponse] = await Promise.all([
    fetch(url),
    fetch(categoriesUrl),
  ]);
  const [posts, categories] = await Promise.all([
    postsResponse.json(),
    categoriesResponse.json(),
  ]);

  console.log(categories);

  printData(posts, categories);
}

getData();

function printData(posts, categories) {
  const dataContainer = document.querySelector(".data-container");
  dataContainer.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    const container = document.createElement("div");
    container.classList.add("container");

    dataContainer.appendChild(container);

    // title
    const recipeName = document.createElement("h1");
    recipeName.innerText = posts[i].title.rendered;
    recipeName.classList.add("txtstyle");
    container.appendChild(recipeName);

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

    // description
    const recipeDesc = document.createElement("p");
    recipeDesc.innerHTML = posts[i].yoast_head_json.description;
    recipeDesc.classList.add("txtstyle");
    container.appendChild(recipeDesc);
  }
}

function getCategoryById(categories, categoryId) {
  return categories.find((category) => category.id === categoryId);
}
