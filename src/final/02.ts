// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

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

function calculSalary(base: number, type: EmployeeType) {
  const factory = new EmployeeFactory()
  const employe = factory.getEmployee(type)
  return base * employe.salaryRate
}

displayText(`Salaire d'un DEV ${calculSalary(5000, EmployeeType.DEV)}`)
displayText(`Salaire d'un CP ${calculSalary(5000, EmployeeType.PROJECT)}`)
displayText(
  `Salaire d'un nettoyeur ${calculSalary(5000, EmployeeType.CLEANNER)}`,
)
displayText(`Salaire d'un cuisinier ${calculSalary(5000, EmployeeType.COOKER)}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*
eslint
  @typescript-eslint/no-useless-constructor: "off"
*/
