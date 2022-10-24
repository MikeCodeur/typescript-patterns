// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

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

class Facade {
  private feature1: Feature1
  private feature2: Feature2

  constructor(feature1?: Feature1, feature2?: Feature2) {
    this.feature1 = feature1 || new Feature1()
    this.feature2 = feature2 || new Feature2()
  }

  public operation(): string {
    let result = 'Facade initialise features:\n'
    result += this.feature1.operation1()
    result += this.feature2.operation1()
    result += this.feature1.operationN()
    result += this.feature2.operationZ()

    return result
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation())
}

const feature1 = new Feature1()
const feature2 = new Feature2()
const facade = new Facade(feature1, feature2)
clientCode(facade)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
