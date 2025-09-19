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

const shallowCopy = { ...student, math: 95 }

const deepCopy = JSON.parse(JSON.stringify(student))
shallowCopy.scores.math = 95
deepCopy.scores.english = 90

console.log(student.scores);

//assignment number3




