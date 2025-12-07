class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    attack(){
       
        if(this.tipo === 'Mago'){
            console.log(`O ${this.tipo} atacou usando magia.`);
        } else if(this.tipo === 'Guerreiro'){
            console.log(`O ${this.tipo} atacou usando espada.`);
        } else if(this.tipo === 'Monge'){
            console.log(`O ${this.tipo} atacou usando artes marciais.`);
        } else if(this.tipo === 'Ninja'){
            console.log(`O ${this.tipo} atacou usando shuriken.`);
        } else {
            console.log('Nenhum herói foi selecionado...');
        }
    }
}

let heroSelected = new hero('Jack Chan', 40, 'Ninja');
heroSelected.attack();
