"use client"
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

class Feature1 {
  public operation1(): string {
    return 'feature1: Ready!\n'
  }
  public operationN(): string {
    return 'feature&: start!\n'
  }
}

class Feature2 {
  public operation1(): string {
    return 'Feature 2: Go!\n'
  }

  public operationZ(): string {
    return 'Feature 2: ok!'
  }
}

// 🐶 créé une facade pour gérer les opérations de feature1 et feature2
class Facade {
  // 🐶 créé la propriété 'feature1'
  // 🐶 créé la propriété 'feature2'
  //
  // 🐶 créé le constructeur qui prends 'feature1' et 'feature2'
  //
  // 🐶 implétemente operation
  public operation(): string {
    let result = 'Facade initialise features:\n'
    // concatène :
    // - feature1.operation1()
    // - feature2.operation1()
    // - feature1.operationN()
    // - feature2.operationZ()
    return result
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation())
}

// 🐶 créé un instance de  'Feature1'
// 🐶 créé un instance de  'Feature2'
// 🐶 créé un instance de  'Facade'
// 🐶 appelle clientCode avec la face

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;