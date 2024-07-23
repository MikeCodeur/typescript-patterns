"use client"
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Modifie 'DataBaseConnexion' pour qu'il devienne un Singleton
class DataBaseConnexion {
  // 🐶 créé un champs 'instance' privé et static de type 'DataBaseConnexion'
  // 🐶 déclare ici en privé 'hostname' 'port' 'protocol' et supprime les du constructeur
  // 🐶 rend le constructeur privé
  public constructor(
    // ⛏️ supprime les 3 paramètre du constructeur
    public hostname: string,
    public port: string,
    public protocol: string,
  ) {
    console.log(
      `Connexion à la BDD ${this.protocol} ${this.hostname} ${this.port}`,
    )
    displayText(
      `Connexion à la BDD ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  // 🐶 créé une méthode 'getInstance' qui instancie une seule fois 'DataBaseConnexion'
  // et retourne 'instance'
  public disconnect() {
    console.log(
      `disconnect from ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  public execute() {
    console.log(`execute on ${this.protocol} ${this.hostname} ${this.port}`)
  }
}
// 🐶 modifie les 3 instanciations
const con = new DataBaseConnexion('localhost', '3301', 'mysql')
con.execute()
const con2 = new DataBaseConnexion('localhost', '3301', 'mysql')
con2.execute()
const con3 = new DataBaseConnexion('localhost', '3301', 'mysql')
con3.execute()
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;