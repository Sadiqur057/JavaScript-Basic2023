// callback function: a function passed into another function as argument, which is then involed inside the outer function to complete an action.

const loadScript=(src,callback)=>{
    let script = document.createElement('script');
    script.src = src;
    script.onload=()=>{
        console.log("Script loaded with src: "+src);
        callback();
    }
    document.body.appendChild(script);
    
}
const hello = () =>{
    alert("hellow");
}
loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",hello);


