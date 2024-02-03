

const app = document.getElementById("app");

// A builder function to make the
// created DOM structures consistent.
function createPost(title, content) {
  // Using an HTML template clone
  const postTemplate = document.getElementById("postTemplate");
  const clone = postTemplate.content.cloneNode(true);

  // We can use selectors to find different nodes
  // within the template clone itself.
  const heading = clone.querySelector("h3");
  const body = clone.querySelector("p");

  heading.textContent = title;
  body.innerHTML = content;

  return clone;
}

// Now, we can use the function to build consistent
// post elements using custom data. We'll be pulling
// from the JSON Placeholder API for convenience.
(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  posts.forEach((post) => {
    app.appendChild(createPost(post.title, post.body));
  });
})();
