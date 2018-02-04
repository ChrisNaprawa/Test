function Person(name,color)
{
    this.name=name;
    this.color=color;
    this.greet=function(){
        console.log("Hello, my name is "+this.name+" and my favourite colour is "+ this.color+".")
    }

}

class Pe{
    construction(nam,col){
        this.name=nam;
        this.color=col;
    }
}

console.log("Hello from Person.js");

module.exports=Person,Pe;

export default Person;