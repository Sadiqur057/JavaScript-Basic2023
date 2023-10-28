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

const getTodo = async(id)=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    let r = await response.json();
    return r;
}

let todo = createToDO()
.then((response)=>{
    console.log(todo);
    console.log(response);
})
//or

const mainFunc = async () => {
  let todo = await createToDO();
  console.log(todo);
  let goto = await getTodo(11);
  console.log(goto);
};
mainFunc();
