// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

class DataBaseConnexion {
  private static instance: DataBaseConnexion
  private hostname: string
  private port: string
  private protocol: string
  private constructor() {
    this.hostname = process.env.bddhostname ?? 'localhost'
    this.port = process.env.bddport ?? '3301'
    this.protocol = process.env.bddprotocol ?? 'mysql'
    console.log(
      `Connexion à la BDD ${this.protocol} ${this.hostname} ${this.port}`,
    )
    displayText(
      `Connexion à la BDD ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  public static getInstance(): DataBaseConnexion {
    if (!DataBaseConnexion.instance) {
      DataBaseConnexion.instance = new DataBaseConnexion()
    }
    return DataBaseConnexion.instance
  }
  public disconnect() {
    console.log(
      `disconnect from ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  public execute() {
    console.log(`execute on ${this.protocol} ${this.hostname} ${this.port}`)
  }
}

const con = DataBaseConnexion.getInstance()
con.execute()

const con2 = DataBaseConnexion.getInstance()
con2.execute()

const con3 = DataBaseConnexion.getInstance()
con3.execute()
/*eslint
  @typescript-eslint/no-useless-constructor: "off"
*/
