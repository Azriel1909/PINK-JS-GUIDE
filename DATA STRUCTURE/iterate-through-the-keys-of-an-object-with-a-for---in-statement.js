/**
 * 
 */

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}


const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let i = 0;
  for (const user in allUsers) {
    if(allUsers[user].online === true)
    i++;
  }
    return i;
}

console.log(countOnline(users));