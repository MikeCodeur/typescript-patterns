// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice
interface User {
  sendEmail(): void
}

class RealUser implements User {
  public sendEmail(): void {
    console.log('RealUser: send email.')
  }
}
// 🐶 implemente l'interface 'User'
class Proxy {
  // 🐶 créé une proprié privé 'realUser' qui contiendra le User proxifié
  // 🐶 fait le constructor (User)
  //
  // 🐶 implemente sendEmail() de la maniere suivante
  // - if checkAccess() appelle de 'sendEmail' et 'logAccess'
  //
  // 🐶 implemente une méthode 'checkAccess' qui retourne true pour l'exercice
  // 🐶 implemente une méthode 'logAccess' qui console.log
}

function clientCode(subject: User) {
  subject.sendEmail()
}

console.log('execution avec un vrai user')
const realUser = new RealUser()
clientCode(realUser)

console.log('execution avec un proxy')
// 🐶 créé une instance de proxy
// 🐶 appelle clientCode avec proxy

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
