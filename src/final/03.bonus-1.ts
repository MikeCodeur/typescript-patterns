// Les Types de bases
// 🚀 Ajout de nouvelle factory
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
interface AbstractFactory {
  createEmployee(): Employee
  createFreelance(): Freelance
  factoryName: string
}

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

class ConcreteFactoryDev implements AbstractFactory {
  factoryName = 'Factory Developpeur'
  public createEmployee(): Employee {
    const f = new EmployeeFactory()
    return f.getEmployee(EmployeeType.DEV)
  }

  public createFreelance(): Freelance {
    const f = new FreelanceFactory()
    return f.getFreelance(FreelanceType.DEV)
  }
}

class ConcreteFactoryProject implements AbstractFactory {
  factoryName = 'Factory Project'
  public createEmployee(): Employee {
    const f = new EmployeeFactory()
    return f.getEmployee(EmployeeType.PROJECT)
  }

  public createFreelance(): Freelance {
    const f = new FreelanceFactory()
    return f.getFreelance(FreelanceType.PROJECT)
  }
}

class ConcreteFactoryTech implements AbstractFactory {
  factoryName = 'Factory Tech'
  public createEmployee(): Employee {
    const f = new EmployeeFactory()
    return f.getEmployee(EmployeeType.DEV)
  }

  public createFreelance(): Freelance {
    const f = new FreelanceFactory()
    return f.getFreelance(FreelanceType.DESIGNER)
  }
}

function clientCode(factory: AbstractFactory) {
  const employee = factory.createEmployee()
  const freelance = factory.createFreelance()

  displayText(`${factory.factoryName} : salarié rate : ${employee.salaryRate}`)
  displayText(`${factory.factoryName} : freelance tjm : ${freelance.tjm}`)
}

clientCode(new ConcreteFactoryDev())
clientCode(new ConcreteFactoryProject())
clientCode(new ConcreteFactoryTech())
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*
eslint
  @typescript-eslint/no-useless-constructor: "off"
*/
