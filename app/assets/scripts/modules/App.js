var $=require('jquery');
import Person from "./modules/Person";

class Adult extends Person{
    payTaxes(){
        console.log(this.name + " now owes $0 in taxes");
    }
}
var Person=require('./modules/Person.js');

alert("This is a test");

var jo=new Person("John Doe","blue");
jo.greet();
var joo=new Adult("John Doe","blue")
joo.payTaxes()
var jane=new Adult("Jane Smith","green");
jane.greet();
jane.payTaxes();