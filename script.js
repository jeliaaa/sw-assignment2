//1
const users = [{
        name: 'Temo',
        age: 25
    },
    {
        name: 'Lasha',
        age: 21
    },
    {
        name: 'Ana',
        age: 28
    }
]

function getYoungestUsersName(user) {
    var youngestName = user[0].name;
    var youngestAge = user[0].age;
    for (let index = 0; index < user.length; index++) {
        if (user[index].age < youngestAge) {
            youngestAge = user[index].age;
            youngestName = user[index].name;
        }
    }
    return youngestName;
}
console.log(getYoungestUsersName(users));

//2

const user = {
    name: 'Nika',
    age: '16',
    city: 'Batumi'
}
const copyObj = (obj) => {
    var newObj = obj;
    return newObj;
}
console.log(copyObj(user))

//3
function rollTheDice(a, b) {
    var queue = 0;
    var roll = 0;

    while (roll !== 3) {
        if (queue % 2 === 0) {
            roll = Math.floor(Math.random() * 6 + 1);
            if (roll === 3) {
                return `${a} is a winner!`;
            }
            queue++;
        } else if (queue % 2 !== 0) {
            roll = Math.floor(Math.random() * 6 + 1);
            if (roll === 3) {
                return `${b} is a winner!`;
            }
            queue++;
        }
    }

}

console.log(rollTheDice("ale", "nika"));