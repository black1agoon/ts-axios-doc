class Beekeeper {
  hasMask: boolean
}

class LionKeeper {
  nametag: string
}

// class Animal {
//   numLengs: number
// }
//
// class Bee extends Animal {
//   keeper: Beekeeper
// }
//
// class Lion extends Animal {
//   keeper: LionKeeper
// }

function createInstance<T extends Animal>(c: new() => T): T {
  return new c()
}

// createInstance(Lion).keeper.nametag
// createInstance(Bee).keeper.hasMask