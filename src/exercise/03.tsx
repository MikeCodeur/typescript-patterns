"use client"
// Les opérateurs
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice
interface Employee {
  salaryRate: number
}

enum EmployeeType {
  DEV,
  PROJECT,
  CLEANNER,
  COOKER,
}

class Developper implements Employee {
  salaryRate = 0.5
  public language: string
  constructor(language: string) {
    this.language = language
  }
}
class ProjectManager implements Employee {
  salaryRate = 0.8
  public domain: string
  constructor(domain: string) {
    this.domain = domain
  }
}

class Cleanner implements Employee {
  salaryRate = 0.2
  constructor() {}
}
class Cooker implements Employee {
  salaryRate = 0.3
  constructor() {}
}

// gestion des freelances (quasi identique à employee)
interface Freelance {
  tjm: number
}
class DevFreelance implements Freelance {
  tjm = 500
}
class DesignerFreelance implements Freelance {
  tjm = 400
}
class ProjectFreelance implements Freelance {
  tjm = 800
}
enum FreelanceType {
  DEV,
  DESIGNER,
  PROJECT,
}

class FreelanceFactory {
  getFreelance(type: FreelanceType): Freelance {
    switch (type) {
      case FreelanceType.DEV:
        return new DevFreelance()
      case FreelanceType.DESIGNER:
        return new DesignerFreelance()
      case FreelanceType.PROJECT:
        return new ProjectFreelance()
    }
  }
}

class EmployeeFactory {
  getEmployee(type: EmployeeType): Employee {
    switch (type) {
      case EmployeeType.DEV:
        return new Developper('java')
      case EmployeeType.PROJECT:
        return new ProjectManager('finance')
      case EmployeeType.CLEANNER:
        return new Cleanner()
      case EmployeeType.COOKER:
        return new Cooker()
    }
  }
}
// 🐶 Créé l'interface 'AbstractFactory' qui contiendra
// - createEmployee(): Employee
// - createFreelance(): Freelance
// - factoryName

// 🐶 implemente l'interface 'AbstractFactory'
class ConcreteFactoryDev {
  factoryName = 'Factory Developpeur'
  // 🐶 implemente 'createEmployee' grace à 'EmployeeFactory' et EmployeeType.DEV
  // 🐶 implemente 'createFreelance' grace à 'FreelanceFactory' et FreelanceType.DEV
}
// 🐶 implemente l'interface 'AbstractFactory'
class ConcreteFactoryProject {
  factoryName = 'Factory Project'
  // 🐶 implemente 'createEmployee' grace à 'EmployeeFactory' et EmployeeType.PROJECT
  // 🐶 implemente 'createFreelance' grace à 'FreelanceFactory' et FreelanceType.PROJECT
}

// 🐶 change any par AbstractFactory
function clientCode(factory: any) {
  const employee = factory.createEmployee()
  const freelance = factory.createFreelance()

  displayText(`${factory.factoryName} : salarié rate : ${employee.salaryRate}`)
  displayText(`${factory.factoryName} : freelance tjm : ${freelance.tjm}`)
}

// 🐶 appelle 'clientCode' avec 'ConcreteFactoryDev'
// 🐶 appelle 'clientCode' avec 'ConcreteFactoryProject'

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*
eslint
  @typescript-eslint/no-useless-constructor: "off"
*/
};
export default () => <App exercice={exercice} />;