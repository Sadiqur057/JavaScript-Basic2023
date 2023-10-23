// "Callback hell," also known as "Pyramid of Doom," is a term used in the context of asynchronous programming, particularly in JavaScript. It describes a situation where multiple nested callbacks are used to handle asynchronous operations, making the code difficult to read and maintain due to its deeply nested structure.

// here is an example of callback-hell/ pyramid dom
// do not run this code
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("Script loaded with src: " + src);
    callback(null, src);
  };
  script.onerror = () => {
    console.log("Error loading script with src: " + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
};
loadScript(
  "https://cdnnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
  (hello = (error, src) => {
    if (error) {
      console.log(error);
    } else {
      alert("hellow " + src);
    }
    loadScript(
      "https://cdnnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
      (hello = (error, src) => {
        if (error) {
          console.log(error);
        } else {
          alert("hellow " + src);
        }
        loadScript(
          "https://cdnnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
          (hello = (error, src) => {
            if (error) {
              console.log(error);
            } else {
              alert("hellow " + src);
            }
          })
        );
      })
    );
  })
);
