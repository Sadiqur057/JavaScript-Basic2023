// Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).

class RailwayTicket {
    confirm(){
        alert("Hello "+this.name+", your ticket is confirmed. Your train no. "+this.trainNo);
    }
    cancel(){
        alert("Hello "+this.name+", your ticket is cancelled");
    }
    fill(username,trainNo){
        this.name = username
        this.trainNo = trainNo
    }
}

// purchase a ticket
let ticket1 = new RailwayTicket();
let ticket2 = new RailwayTicket();

// fill the ticket with details
ticket1.fill("sadiq",123322);
ticket2.fill("akash",223221);

// perfomr action on ticket
ticket1.confirm();
ticket2.cancel();