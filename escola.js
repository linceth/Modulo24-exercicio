function Pessoa(nome) {
    this.nome = nome;
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor=== 'number'){
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.07;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);    
}

function AssistenteAdministrativo(nome) {
    Funcionario.call(this, nome, "Assistente Administrtivo", 2200);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function AssistenteRH(nome) {
    Funcionario.call(this, nome, "Assistente RH", 2200);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Professor(nome) {
    Funcionario.call(this, nome, "Professor", 2800);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}
    

function Coordenador(nome) {
    Funcionario.call(this, nome, "Coordenador", 3200);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario);
    }
}

function Diretor(nome) {
    Funcionario.call(this, nome, "Diretor", 4500);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Suzana", "Auxiliar Serviços Gerais", 1400);
const funcionario2 = new AssistenteAdministrativo("Pedro");
const funcionario3 = new AssistenteRH("Paula");
const funcionario4 = new Professor("Eriberto");
const funcionario5 = new Coordenador("Andreza");
const funcionario6 = new Diretor("Adroaldo");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

funcionario4.aumento();
console.log(funcionario4.getSalario());

funcionario5.aumento();
console.log(funcionario5.getSalario());

funcionario6.aumento();
console.log(funcionario6.getSalario());


