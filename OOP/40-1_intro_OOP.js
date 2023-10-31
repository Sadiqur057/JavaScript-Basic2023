// Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).

class RailwayTicket {
    submit(){
        alert("Name: "+this.name+", form submitted");
    }
    cancel(){
        alert("Name: "+this.name+", form is cancelled");
    }
    fill(username){
        this.name = username
    }
}

// purchase a ticket
let ticket1 = new RailwayTicket();
let ticket2 = new RailwayTicket();

// fill the ticket with details
ticket1.fill("sadiq");
ticket2.fill("akash");

// perfomr action on ticket
ticket1.submit();
ticket2.cancel();