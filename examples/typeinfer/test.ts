let x = [0, 1, null]

class Animal {
  numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

let zoo: Animal[] = [new Bee(), new Lion()]

// let ss: (number & string)[] = [1, 'fdsfsd']

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}
function getSmallPet(): Fish | Bird {
  // ...
  return
}
// let pet = getSmallPet()
// pet.layEggs()
// pet.swim()

let pet = getSmallPet()

if ((pet as Fish).swim) {
  (pet as Fish).swim()
} else {
  (pet as Bird).fly()
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}










