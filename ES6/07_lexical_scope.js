function randFunc(){
    let a = 10; // lexical scope of this variable is the  function
}

let data = {
    list: "friend",
    names: ["bruce",'peter','harry'],
    //Normal function
    // getFriends: function(){
    //     that = this;
    //     this.names.map(function(item){
    //         console.log(that.list,item);
    //     })  
    // }

    // Arrow function
    getFriends: function(){
        this.names.map((item)=>{
            console.log(this.list,item);
        })  
    }
}
data.getFriends()