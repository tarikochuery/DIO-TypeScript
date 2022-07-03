// URL Desafio: https://github.com/lira1705/mentoria-typescript/blob/main/src/desafios/desafio2.js

//Resposta

enum Profession {
  Actress,
  Backer,
}

interface Person {
  name: string
  age: number
  profession: Profession
}

let pessoa1 = {} as Person
pessoa1.name = "Maria"
pessoa1.age = 29
pessoa1.profession = Profession.Actress

let pessoa2 = {} as Person
pessoa2.name = "Roberto"
pessoa2.age = 19
pessoa2.profession = Profession.Backer

let pessoa3: Person = {
    name: "Laura",
    age: 32,
    profession: Profession.Actress
};

let pessoa4: Person = {
    name: "Carlos",
    age: 19,
    profession: Profession.Actress
}