// Como podemos rodar isso em um arquivo .ts sem causar erros?

type Iemployee={
    code:number;
    name:string;
}

let employee =<Iemployee> {};

employee.code = 10;

employee.name = "John";

// Como podemos melhorar o esse código usando TS?

type IPessoa={
    nome:string;
    idade:number | string;
    profissao:string;
}

let pessoa1 =<IPessoa> {};

pessoa1.nome = "maria";

pessoa1.idade = 29;

pessoa1.profissao = "atriz"



let pessoa2 =<IPessoa> {}

pessoa2.nome = "roberto";

pessoa2.idade = 19;

pessoa2.profissao = "Padeiro";



let pessoa3 =<IPessoa> {

nome: "laura",

idade: "32",

profissao: "Atriz"

};


let pessoa4 =<IPessoa> {

nome : "carlos",

idade : 19,

profissao : "padeiro"

}