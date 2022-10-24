// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

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

class Adapter extends Normal {
  private adaptee: Different

  constructor(adaptee: Different) {
    super()
    this.adaptee = adaptee
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('')
    return `Adapter: (TRANSLATED) ${result}`
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

const adapter = new Adapter(different)
clientCode(adapter)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
