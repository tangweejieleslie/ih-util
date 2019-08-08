let enemies = require( '../data/Enemies.json');

// console.log(Object.keys(enemies));

console.log("data point test")
console.log(enemies.rows[0].heroid )
console.log(Object.keys(enemies.rows).length )
// console.log(Object.keys(enemies));
// console.log(Object.keys(enemies.columns))


let newEnemiesData = {}

for(let i in enemies.rows) {
    // console.log(enemies.rows[i])
    
    if(newEnemiesData[enemies.rows[i].heroid] === undefined){
        newEnemiesData[enemies.rows[i].heroid] = {};
    }

    newEnemiesData[enemies.rows[i].heroid][enemies.rows[i].id] = enemies.rows[i];
    // console.log(enemies.rows[i].heroid);
}

console.log(newEnemiesData[1202])