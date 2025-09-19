const car = {
    brand: "toyota",
    year: 2022,
    drive(name) {
        console.log(`${name} is driving a car:::  vroom vroom`)
    }
}
console.log("car object", car);
car.drive("obviously, Victor");

car.color = "white"
console.log(car);

delete car.year

console.log(car);

// another way to create an object is as follows


const person = new Object()
person.name = ("husky")

console.log(person);

person.age = (28)
person.measurment = ({
    hieght: 1098,
    wieght: 2.8
})
person.married = (false)

console.log(person);
//another


const human={
    name: "Gift",
    age:26,
    gender:"F",
    isEmployed: true,
    married: false,
    measurment:{
        hieght: 1090n,
        wieght:2036n,
        dress_size:"M"
    },
    sleep(){
        console.log("zzzz");
    },
    eat() {
        console.log("chochocho");
        
    }
}

console.log(human);
console.log(Object.keys(human));
console.log(Object.values(human));
console.log(Object.entries(human));

const key="dynamic keys"
const obj={
    [key]: "i am dynamic"
}
console.log(obj);
console.log(obj["dynamic keys"]);

const user={name: "mia", age:24}
console.log(user);
const clone={...user, country:"USA"}
console.log(clone);

const { name,age}= user
console.log( name,age);



