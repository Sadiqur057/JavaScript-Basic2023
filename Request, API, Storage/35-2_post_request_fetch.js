const createToDO = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    // stringfy convert object to string
    // json.parse => convert string to object
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  let response = await p.json();
  return response;
};

let todo = createToDO()
.then((response)=>{
    console.log(response);
})
//and
const mainFunc = async () => {
  let todo = await createToDO();
  console.log(todo);
};
mainFunc();
