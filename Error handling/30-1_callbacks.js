// callback function: a function passed into another function as argument, which is then involed inside the outer function to complete an action.
// asynchronouse
const loadScript=(src,callback)=>{
    let script = document.createElement('script');
    script.src = src;
    script.onload=()=>{
        console.log("Script loaded with src: "+src);
        callback(null, src);
    }
    script.onerror=()=>{
        console.log("Error loading script with src: "+src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script); 
}
const hello = (src,error) =>{
    if(error){
        console.log(error);
    }else{
        alert("hellow " +src);
    }
}
loadScript("https://cdnnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",hello);


