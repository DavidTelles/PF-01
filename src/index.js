const prompt = require('prompt-sync')();
const fs = require('fs');

/*

function loadDB() {
    try{
        const raw = fs.readFileSync("./bd.json", 'utf8');
        return JSON.parse(raw)
    } catch(err) {
        console.error('Erro ao ler bd.json:', err.message);
        return {
            name_square: '',
            bikes_points: [],
            users: [],
            runs: [] 
        }
    }
}

function saveDB(db) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar db.json', err.message);
        return false;
    }
}

function getNextId(name) {
    const db = loadDB();

    const values = db.name || [];

    let maxId = 0;
    for(let i = 0; i < usuarios.length; i++){
        const u = usuarios[i];
        if(typeof u.id === 'number' && u.id > maxId) {
            maxId = u.id;
        }
    }
    const newId = maxId !== 0 ? maxId + 1 : 1; // if ternário
    // variável = condição (true ou false) ? valor se verdadeiro : valor se falso
}

function getUserByEmail(email) {
    const db = loadDB();
    const users = db.users || [];

    for(let i = 0; i < users.length; i++) {
        const u = users[i];
        if(u.email === email) {
            return u;
        }
    }
    return null;
}

*/

var i = 0;

var cash = 0;
var rents = [];
var availibleBikes = [
    {
        "bikes_points": [
        {"id": 1, "point": "A", "bikes":[
            {"id": 1, "type": "basic", "value": 20.0},
            {"id": 2, "type": "basic", "value": 20.0},
            {"id": 3, "type": "advanced", "value": 35.0},
            {"id": 4, "type": "professional", "value": 40.0}
        ]},
        {"id": 2, "point": "B", "bikes":[
            {"id": 5, "type": "basic", "value": 20.0},
            {"id": 6, "type": "advanced", "value": 35.0},
            {"id": 7, "type": "advanced", "value": 35.0},
            {"id": 8, "type": "professional", "value": 40.0}
        ]},
        {"id": 3, "point": "C", "bikes":[
            {"id": 9, "type": "basic", "value": 20.0},
            {"id": 10, "type": "advanced", "value": 35.0},
            {"id": 11, "type": "professional", "value": 40.0},
            {"id": 12, "type": "professional", "value": 40.0}
        ]}
    ],
    }
]
var availibleScooters = [
    {
        "scooters_points": [
        {"id": 1, "point": "A", "scooters":[
            {"id": 13, "type": "basic", "value": 20.0},
            {"id": 14, "type": "basic", "value": 20.0},
            {"id": 15, "type": "advanced", "value": 40.0},
            {"id": 16, "type": "professional", "value": 50.0}
        ]},
        {"id": 2, "point": "B", "scooters":[
            {"id": 17, "type": "basic", "value": 20.0},
            {"id": 18, "type": "advanced", "value": 40.0},
            {"id": 19, "type": "advanced", "value": 40.0},
            {"id": 20, "type": "professional", "value": 50.0}
        ]},
        {"id": 3, "point": "C", "scooters":[
            {"id": 21, "type": "basic", "value": 20.0},
            {"id": 22, "type": "advanced", "value": 40.0},
            {"id": 23, "type": "professional", "value": 50.0},
            {"id": 24, "type": "professional", "value": 50.0}
        ]}
    ],
    }
]
var nike = prompt(`Seu Usuário -> `);

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
                rent();
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

function rentBike() { // Menu de alugar Bicicletas
    console.log(availibleBikes[0].bikes_points);
    let bike = Number(prompt('Adicione o id do point que deseja: '));
    let value = 0;
    if (bike == 1) {
        console.log(availibleBikes[0].bikes_points[0].bikes);
        model = Number(prompt('Adicione o modelo da bike: '));
        if (model == 1 || model == 2) {
            value = 20;
        } else if (model == 3) {
            value = 35;
        } else if (model == 4) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if(bike == 2) {
        console.log(availibleBikes[0].bikes_points[1].bikes);
        model = Number(prompt('Adicione o modelo da bike: '));
        if (model == 5) {
            value = 20;
        } else if (model == 6 || model ==7) {
            value = 35;
        } else if (model == 8) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if(bike == 3) {
        console.log(availibleBikes[0].bikes_points[2].bikes);
        model = Number(prompt('Adicione o modelo da bike: '));
        if (model == 9) {
            value = 20;
        } else if (model == 10) {
            value = 35;
        } else if (model == 11 || model == 12) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if (bike == 0) {
        main();
    };
    let time = Number(prompt('Adicione quanto tempo deseja: '));
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (model == 1) {
            rents.push('Basic bike');
        } else if(model == 2) {
            rents.push('Basic bike');
        } else if(model == 3) {
            rents.push('Advanced bike');
        } else if(model == 4) {
            rents.push('Professional bike');
        } else if(model == 5) {
            rents.push('Basic bike');
        } else if(model == 6) {
            rents.push('Advanced bike');
        } else if(model == 7) {
            rents.push('Advanced bike');
        } else if(model == 8) {
            rents.push('Professional bike');
        } else if(model == 9) {
            rents.push('Basic bike');
        } else if(model == 10) {
            rents.push('Advanced bike');
        } else if(model == 11) {
            rents.push('Professional bike');
        } else if(model == 12) {
            rents.push('Professional bike');
        };
        console.log(`Sua bike foi alugada com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Saldo insuficiente");
        deposit();
    };
};

function rentScoo() { // Menu de alugar Patinetes
    console.log(availibleScooters[0].bikes_points);
    let scooter = Number(prompt('Adicione o id do point que deseja: '));
    let value = 0;
    if (scooter == 1) {
        console.log(availibleScooters[0].scooters_points[0].scooters);
        model = Number(prompt('Adicione o modelo de patinete: '));
        if (model == 13 || model == 14) {
            value = 20;
        } else if (model == 15) {
            value = 35;
        } else if (model == 16) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if(scooter == 2) {
        console.log(availibleScooters[0].scooters_points[1].scooters);
        model = Number(prompt('Adicione o modelo de patinete: '));
        if (model == 17) {
            value = 20;
        } else if (model == 18 || model == 19) {
            value = 35;
        } else if (model == 20) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if(bike == 3) {
        console.log(availibleScooters[0].scooters_points[2].scooters);
        model = Number(prompt('Adicione o modelo de patinete: '));
        if (model == 21) {
            value = 20;
        } else if (model == 22) {
            value = 35;
        } else if (model == 23 || model == 24) {
            value = 40;
        } else {
            console.log("Modelo inválido");
        }
    } else if (bike == 0) {
        main();
    };
    let time = Number(prompt('Adicione quanto tempo deseja: '));
    if (cash >= (value*time)){
        cash = cash - (value*time);
        if (model == 1) {
            rents.push('Basic scooter');
        } else if(model == 2) {
            rents.push('Basic scooter');
        } else if(model == 3) {
            rents.push('Advanced scooter');
        } else if(model == 4) {
            rents.push('Professional scooter');
        } else if(model == 5) {
            rents.push('Basic scooter');
        } else if(model == 6) {
            rents.push('Advanced scooter');
        } else if(model == 7) {
            rents.push('Advanced scooter');
        } else if(model == 8) {
            rents.push('Professional scooter');
        } else if(model == 9) {
            rents.push('Basic scooter');
        } else if(model == 10) {
            rents.push('Advanced scooter');
        } else if(model == 11) {
            rents.push('Professional scooter');
        } else if(model == 12) {
            rents.push('Professional scooter');
        };
        console.log(`Seu patinete foi alugada com sucesso. O valor foi... ${(value*time)}`);
    } else if (cash < (value*time)) {
        console.log("Saldo insuficiente");
        deposit();
    };
};

function vehicle() { // Menu de ver veiculos Alugados
    console.log(rents)
    let remove = prompt('Você deseja remover algum veiculo? s/n: ');
    if (remove.toLowerCase() == 's') {
        console.clear();
        console.log(rents);
        let i = Number(prompt('Diga a posição do veiculo: '));
        rents.splice(i - 1, 1);
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
