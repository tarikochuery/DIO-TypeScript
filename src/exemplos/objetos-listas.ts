const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
  nome: 'André',
  idade: 25,
  profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome: 'Paula',
  idade: 25,
  profissao: 'desenvolvedora'
}

enum Profissao { //Utilizado para criar uma lista de Constantes
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa {
  nome: string
  idade: number
  profissao?: Profissao
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
  nome: 'Maria',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
  materias: string[]
}

const jessica: Estudante = {
  nome: 'Jéssica',
  idade: 28,
  profissao: Profissao.JogadoraDeFutebol,
  materias: ['Matemática Discreta', 'Programação']
}

const monica: Estudante = {
  nome: 'Mônica',
  idade: 25,
  materias: ['Matemática Discreta', 'Programação']
}

function listar(lista: string[]) {
  for (const item of lista){
    console.log(`- ${item}`)
  }
}

listar(monica.materias)