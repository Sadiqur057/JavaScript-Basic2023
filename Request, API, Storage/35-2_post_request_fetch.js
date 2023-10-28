let options = {
    method: "POST",
    headers: 
        {"Content-type": "application/json"},
    body: JSON.stringify({
        title : 'foo',
        body: 'bar',
        userId: 1,
    })
    // stringfy convert object to string 
    // json.parse => convert string to object
}

fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then((response) => response.json())
    .then((json) => console.log(json));
