module.exports = {
  succeed,
  fail,
  repair,
  get,
};

//const item = {
  // name: 'item-name',
  // enhancement: 0 - 20,
  // durability: 0 - 100
// }

function succeed(item) {
  // item.enhancement + 1
  //If the item enhancement level is 20, 
    // the enhancement level is not changed.
  if(item.enhancement === 20){
    return item;
  } else {
    let newItem = item;
    newItem.enhancement = newItem.enhancement++;
    return newItem;
  }
}

function fail(item) {
  const newItem = item;
  //if enhancement >= 15, durability - 10 && enhancement - 1
  if(newItem.enhancement >= 15){
    if(newItem.durability > 10){
      newItem.durability = newItem.durability - 10;
    } else {
      newItem.durability = 0;
    }
    newItem.enhancement = newItem.enhancement--;
  } else {
    //if enhancement < 15, durability - 5
    if(newItem.durability < 5){
      newItem.durability = 0;
    } else {
      newItem.durability = newItem.durability - 5;
    }
  }
  return newItem;
}

function repair(item) {
  //returns a new object with durability restored to 100
  let repaired = item;
  repaired.durability = 100;
  return repaired;
}

function get(item) {
  //if enhancement > 0, add [+ enhancement level to item name]
  return { ...item };
}
