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
// 🐶 Créé la classe 'Cleanner' avec salaryRate = 0.2 et adapte la fonction 'calculSalary' dans un premier temps
class Cleanner {
  // 🐶 implemente
}

// 🐶 Créé une classe 'EmployeeFactory' qui retournera la bonne instance
// avec le méthode
// 🤖 getEmployee(type: EmployeeType): Employee

// 🐶 modifie 'calculSalary' en utilisant la factory
function calculSalary(base: number, type: EmployeeType) {
  let rate = 1
  if (type === EmployeeType.DEV) {
    const developper = new Developper('')
    rate = developper.salaryRate
  } else if (type === EmployeeType.PROJECT) {
    const projectManager = new ProjectManager('')
    rate = projectManager.salaryRate
  }
  return base * rate
}
// 🐶 créé classe 'Cooker'

// 🐶 affiche salaire 'Cleaner' et 'Cooker'
displayText(`Salaire d'un DEV ${calculSalary(5000, EmployeeType.DEV)}`)
displayText(`Salaire d'un CP ${calculSalary(5000, EmployeeType.PROJECT)}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;