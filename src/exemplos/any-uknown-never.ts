let anyEstaDeVolta: any
anyEstaDeVolta = 3
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5

let stringTest: string
stringTest = anyEstaDeVolta

let unknownValor: unknown //Boa prática utilizar quando não se sabe o tipo do dado
unknownValor = 3
unknownValor = 'opa'
unknownValor = true
unknownValor = 'vai sim'

let stringTest2: string = 'agora vai'

stringTest = typeof unknownValor === 'string' ? unknownValor : stringTest

function jogaErro(erro: string, codigo: number): never { //Utilizado para um código que nunca deve finalizar
  throw {error: erro, code: codigo}
}

jogaErro('Deu erro', 500)