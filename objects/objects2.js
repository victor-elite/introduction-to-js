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

profile.name = "Victor"
profile.emai = "victor@example.com"
console.log(profile);
console.log(user_profile);

//assignment number 2

const student = {
    name: "Mr Boniface",
    scores: {
        math: 80,
        english: 85
    }
}

const shallowCopy = { ...student, math: 95 }

const deepCopy = JSON.parse(JSON.stringify(student))
shallowCopy.scores.math = 95
deepCopy.scores.english = 90

console.log(student.scores);

//assignment number3


object.defineProperty{car,"vin",
    value ="VIN123456",
    writable= false,
    configurable=false
    enumerable= true
}
