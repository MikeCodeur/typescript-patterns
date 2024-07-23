"use client"
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

class Normal {
  public request(): string {
    return 'Normal request'
  }
}

class Different {
  public specificRequest(): string {
    return 'tseuqer lamroN'
  }
}
// 🐶 étend la classe Normal
class Adapter {
  // 🐶 créé le champs adaptee: Different privé
  //
  // 🐶 créé le constructor
  //
  // 🐶 surchage la méthode request()
  public request(): string {
    // 🐶 Adapte le code 'specificRequest' pour qu'il soit équivalent de Normal
    // utilise ce bout de code qui inverse les chaine de caractere
    // 🤖 this.adaptee.specificRequest().split('').reverse().join('')
    // 'tseuqer lamroN' inversé donne 'Normal request', on vient d'adapter
    return ''
  }
}

function clientCode(normal: Normal) {
  displayText(`Requete : ${normal.request()}`)
  console.log(normal.request())
}

const target = new Normal()
clientCode(target)

const different = new Different()
console.log(`different: ${different.specificRequest()}`)

// 🐶 instancie 'Adapter' avec 'Different'
// 🐶 appelle 'clientCode' avec l'adapter

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;