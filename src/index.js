const prompt = require('prompt-sync')();

var i = 0;

var cash = 0;
var list = [];
var nike = prompt(`Seu Usuário -> `);

while(true) { // Verifica se há ou não carterinha de estudante
    var studant = prompt("Você tem carterinha de estudante? s/n -> ").toLowerCase();
    if(studant == "s") {
        studant = true;
        break;
    } else if (studant == "n") {
        studant = false;
        break
    } else {
        console.log("Resposta inválida! Responda com 's' ou 'n'");
    };
};

function singUp() { // Criar Conta
        while(true) {
            var email = prompt("Seu E-mail -> ");
            var confirmEmail = prompt("Confirme Seu E-mail -> ");
        
            if (!email.includes('@')) {
                console.log("O Email precisa ter '@'!");
                continue;
            }
        
            if (email !== confirmEmail) {
                console.log("E-Mail incorreto!");
                continue;
            }
        
            console.clear();
            break;
        }
    
        while(true) {
            var cpf = prompt("Seu CPF -> ");
            var confirmCpf = prompt("Confirme Seu CPF -> ");
        
            if (cpf.length < 11 && cpf.length > 11 && cpf[10] !== 8) {
                console.log("CPF inválido! Coloque um CPF válido");
                continue;
            }
        
            if (cpf !== confirmCpf) {
                console.log("CPF Incorreto!");
                continue;
            }
        
            console.clear();
            break;
        
    }
};

function main() { // Menu Principal
    if(studant == true) {
        let first = Number(prompt(`
            =====================
            Olá ${nike}! Seu cash é: ${cash}
    
            1 - Alugar veiculo
            2 - Ver veiculos alugados
            3 - Adicionar cash
            4 - Retirar cash
    
            0 - Sair
            `)); 
            
            if (first == 1) {
                rentLitle();
            } else if(first == 2) {
                vehicle();
            } else if (first == 3) {
                deposit();
            } else if (first == 4) {
                toRemove();
            } else if (first == 0) {
                i++;
            } else {
                console.log("Digite um número entre 0 e 4");
            };
    
    } else if (studant == false) {
        let first = Number(prompt(`
        =====================
        Ola ${nike}! Seu cash é: ${cash}

        1 - Alugar Veículo
        2 - Ver Veículos Alugados
        3 - Depositar Dinheiro
        4 - Retirar Dinheiro

        0 - Sair
        `))  
        
        if (first == 1) {
            rent()
        } else if(first == 2) {
            vehicle();
        } else if(first == 3) {
            deposit();
        } else if(first == 4) {
            toRemove();
        } else if (first == 0) {
            i++;
        };
    }
};

function rent() { // Menu de Alugar
    let first = Number(prompt(`
        =====================
        Ola ${nike}! Seu cash é: ${cash}

        1 - Bicicletas
        2 - Patinetes

        0 - Voltar
        `))  
        
        if (first == 1) {
            rentBike()
        } else if(first == 2) {
            rentScoo();
        } else if (first == 0) {
            main();
        };

};

function rentLitle() { // Menu de Alugar para estudante
    let first = Number(prompt(`
        =====================
        Ola ${nike}! Seu cash é: ${cash}

        1 - Bicicletas
        2 - Patinetes

        0 - Voltar
        `))  
        
        if (first == 1) {
            rentBikeLitle()
        } else if(first == 2) {
            rentScooLitle();
        } else if (first == 0) {
            mainLitle();
        };
};

function rentBike() { // Menu de alugar Bicicletas
    console.log(`
        Os Modelos de Bikes são:
        1 - Simple bike - 20/h
        2 - Advanced bike - 35/h
        3 - Professional bike - 40/h

        0 - Voltar

        `);
    let bike = Number(prompt('Adicione o modelo da bike: '));
    let time = Number(prompt('Adicione quanto tempo deseja: '));
    let value = 0;
    if (bike == 1) {
        value = 20;
    } else if(bike == 2) {
        value = 35;
    } else if(bike == 3) {
        value = 40;
    } else if (bike == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (bike == 1) {
            list.push('Simple bike');
        } else if(bike == 2) {
            list.push('Advanced bike');
        } else if(bike == 3) {
            list.push('Professional bike');
        };
        console.log(`Sua bike foi alugada com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Saldo insuficiente");
        deposit();
    };
};

function rentBikeLitle() { // Menu de alugar Bicicletas para estudante
    console.log(`
        Os Modelos de Bikes são:
        1 - Simple bike - 10/h
        2 - Advanced bike - 13/h
        3 - Professional bike - 20/h

        0 - Voltar

        `);
    let bike = Number(prompt('Adicione o modelo da bike: '));
    let time = Number(prompt('Adicione quanto tempo deseja: '));
    let value = 0;
    if (bike == 1) {
        value = 10;
    } else if(bike == 2) {
        value = 13;
    } else if(bike == 3) {
        value = 20;
    } else if (bike == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (bike == 1) {
            list.push('Simple bike');
        } else if(bike == 2) {
            list.push('Advanced bike');
        } else if(bike == 3) {
            list.push('Professional bike');
        };
        console.log(`Sua bike foi alugada com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Saldo insuficiente");
        deposit();
    };
};

function rentScoo() { // Menu de alugar Patinetes
    console.log(`
        Os modelos de patinete são:
        1 - Patinete simples - 20/h
        2 - Patinete avançado - 40/h
        3 - Patinete profissional - 50/h

        0 - Voltar

        `);
    let scooter = Number(prompt('Adicione o modelo do patinete: '));
    let time = Number(prompt('Adicione o tempo que deseja: '));
    let value = 0;
    if (scooter == 1) {
        value = 20;
    } else if(scooter == 2) {
        value = 40;
    } else if(scooter == 3) {
        value = 50;
    } else if (scooter == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (scooter == 1) {
            list.push('Patinete simples');
        } else if(scooter == 2) {
            list.push('Patinete avançado');
        } else if (scooter == 3) {
            list.push('Patinete profissional');
        };
        console.log(`Seu patinete foi alugado com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Insufficient cash");
        deposit();
    }
};

function rentScooLitle() { // Menu de alugar Patinetes para estudante
    console.log(`
        Os modelos de patinete são:
        1 - Patinete simples - 10/h
        2 - Patinete avançado - 20/h
        3 - Patinete profissional - 25/h

        0 - Voltar

        `);
    let scooter = Number(prompt('Adicione o modelo do patinete: '));
    let time = Number(prompt('Adicione o tempo que deseja: '));
    let value = 0;
    if (scooter == 1) {
        value = 10;
    } else if(scooter == 2) {
        value = 20;
    } else if(scooter == 3) {
        value = 25;
    } else if (scooter == 0) {
        main();
    };
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (scooter == 1) {
            list.push('Patinete simples');
        } else if(scooter == 2) {
            list.push('Patinete avançado');
        } else if (scooter = 3) {
            list.push('Patinete profissional');
        };
        console.log(`Seu patinete foi alugado com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Insufficient cash");
        deposit();
    }
};

function vehicle() { // Menu de ver veiculos Alugados
    console.log(list)
    let remove = prompt('Você deseja remover algum veiculo? s/n: ');
    if (remove.toLowerCase() == 's') {
        console.clear();
        console.log(list);
        let i = Number(prompt('Diga a posição do veiculo: '));
        list.splice(i - 1, 1);
        console.log('Veiculo removido');
    } else if (remove.toLowerCase() == 'n') {
        console.log('Ok...');
    };
};

function deposit() { // Menu para depositar Dinheiro
    console.log('Adicione o valor que deseja adicionar na sua conta.');
    let value = Number(prompt('Adicione valor: '));
    cash = cash + value;
    console.log(`Cash atualizado: ${cash}`);
};

function toRemove() { // Menu para remover Dinheiro
    console.log('Adicione o valor que deseja remover da sua conta.');
    let value = Number(prompt('Diga o valor: '))    ;
    if (cash >= value) {
        cash = cash - value;
        console.log(`Cash atualizado... ${cash}`);
    } else {
        console.log('A retirada não foi possivel; O cash é menor do que o valor que deseja retirar.');
    };
};

singUp()
while(i < 1) { // Loop principal
    main()
};

console.log(`
    =====================
    Obrigado por usar nosso sistema, ${nike}!
    Até a próxima!
    =====================
`); // Mensagem de despedida
