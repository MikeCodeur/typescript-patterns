// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

interface User {
  sendEmail(): void
}

class RealUser implements User {
  public sendEmail(): void {
    console.log('RealUser: send email.')
  }
}

class Proxy implements User {
  private realUser: RealUser
  constructor(realUser: User) {
    this.realUser = realUser
  }
  public sendEmail(): void {
    if (this.checkAccess()) {
      this.realUser.sendEmail()
      this.logAccess()
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: on verifie les droits.')
    return true
  }

  private logAccess(): void {
    console.log('Proxy: je log accees')
  }
}

function clientCode(subject: User) {
  subject.sendEmail()
}

console.log('execution avec un vrai user')
const realUser = new RealUser()
clientCode(realUser)

console.log('execution avec un proxy')
const proxy = new Proxy(realUser)
clientCode(proxy)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*
eslint
  @typescript-eslint/no-useless-constructor: "off"
*/
