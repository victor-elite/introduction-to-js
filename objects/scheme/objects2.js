const profile = {
    name: "Ada",
    contact: {
        email: "ada@example.com"
    }
}

const user_profile = {
    id: 1,
    info: profile
}

user_profile.profile

user_profile.info.name = "Victor"
user_profile.info.contact.email= "victor@example.com"
console.log(profile);
console.log(user_profile);
console.log(profile['name']);


//assignment number 2

const student = {
    name: "Mr Boniface",
    scores: {
        math: 80,
        english: 85
    }
}


console.log(student.scores);

//assignment number3
const car= new Object()
Object.defineProperty(car, "vin",{
value: "VIN123456",
writable: false,
configurable: false,
enumerable: true,
})
Object.defineProperty(car, "color",{
value: "black",
writable: true,
configurable: true,
enumerable: true,
})
console.log(Object.keys(car))
car.vin="VIN2456"
console.log(car);
console.log(Object.getOwnPropertyDescriptors(car));
console.log(Object.getOwnPropertyDescriptors(profile));
delete car.color
console.log(car);

