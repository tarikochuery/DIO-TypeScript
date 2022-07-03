// Desafio URL: https://github.com/lira1705/mentoria-typescript/blob/main/src/desafios/desafio1.js

// Resposta 1
let employee = {
  code: 10,
  name: "John"
}

// Resposta 2

let employee2: {code: number, name: string} = {
  code: 10,
  name: "John"
}

//Resposta 3

interface Employee {
  code: number
  name: string
}

let employee3: Employee = {
  code: 10,
  name: 'John'
}

//Resposta 4

let employee4 = {} as Employee
employee.code = 10
employee.name = 'John'