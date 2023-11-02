// A constructor is a special initialization function that is automatically called whenever a class is declared. The constructor always has the same name as the class name, and no data types are defined for the argument list or the return type. Normally a constructor is used to initialize a class.

class RailwayTicket {
    constructor(username,trainNo,start,dest){
        console.log(`Name: ${username}. Train no. ${trainNo}`)
        this.name = username;
        this.trainNo = trainNo;
        this.start = start;
        this.dest = dest;
    }
    confirm(){
        alert("Hello "+this.name+", your ticket is confirmed. Your train no. "+this.trainNo);
    }
    cancel(){
        alert("Hello "+this.name+", your ticket is cancelled");
        this.trainNo = 0;
    }
    preview(){
        console.log(`Information of ${this.name}: train no. ${this.trainNo}, start from: ${this.start}, destination: ${this.dest}`)
    }

}

// purchase a ticket
let ticket1 = new RailwayTicket("sadiq",123322,"airport","khulna");
let ticket2 = new RailwayTicket("sadiq",223221,"airport","rajshahi");
let ticket3 = new RailwayTicket("akash",223221,"airport","khulna");


// fill the ticket with details
// the job for fill method() will be completed by the constructor
// ticket1.fill();
// ticket2.fill();




// perform action on ticket
ticket1.confirm();
ticket3.cancel();

ticket3.preview();