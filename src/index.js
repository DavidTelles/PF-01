const prompt = require('prompt-sync')();
const { sign } = require('crypto');
const fs = require('fs');

const dbPath = "../bd.json";
const db = loadDB()

function loadDB() { // Carregar Banco de dados
    try {
        const raw = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error("Erro ao ler bd.json:", err.message);
        return {
            users: []
        };
    }
}

function saveDB(db) { // Salvar Banco de Dados
    try {
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 4), "utf8");
        console.log(true);
    } catch (err) {
        console.error("Erro ao salvar db.json:", err.message);
        console.log(false);
    }
}

function getNextId(collectionName) { // Pegar o proximo Id
    const values = db[collectionName] || [];

    let maxId = 0;
    for (let i = 0; i < values.length; i++) {
        const item = values[i];
        if (typeof item.id === "number" && item.id > maxId) {
            maxId = item.id;
        }
    }

    return maxId + 1;
}

function addUser(user, email, password) { // Adicionar novo usuário
    

    if(userExists(email, password)) {
        console.log("Usuário ja existe!");
        return false;
    }

    user = {
        id: getNextId("users"),
        user: user,
        email: email,
        password: password
    }

    db.users.push(user)
    saveDB(db)

    console.log("Usuário criado!")
}

function userExists(password) { // Verifica se o usuário existe
    
    const users = db.users || [];

    for (let i = 0; i < users.length; i++) {
        const u = users[i];

        if(u.password === password) {
            return true;
        } 
    }

    return false
}

function findUserByEmail(email) { // Procura o usuário pelo email
    
    const users = db.users || [];

    for (let i = 0; i < users.length; i++) {
        const u = users[i];

        if (u.email === email) {
            return u;
        }
    }

    return null;
}

function updateVeichle(id, newData) { // Atualiza os status do veiculo
    
    db.veichles = db.veichles || [];

    if (!db.veichles[id]) {
        console.error("Veículo não encontrado com id:", id);
        return false;
    }

    db.veichles[id] = {
        ...db.veichles[id],
        ...newData
    };

    saveDB(db);

    console.log("Veículo atualizado");
    return true;
}


function veiculoDisponivel(id) { // Verifica se o veiculo está disponível
    

    db.veichles = db.veichles || [];

    const index = db.veichles.findIndex(v => v.id === id);

    if (index === -1) {
        console.error("Veículo não encontrado com id:", id);
        return false;
    }

    return db.veichles[index].status;
}


var i = 0;

var cash = 0;
var rents = [];
var acount = false

var name = prompt(`Seu Usuário -> `);

function singUp() { // Criar conta 
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

        if (email)
    
        console.clear();
        break;
    }
    
    while(true) {
        var password = prompt("Sua Senha -> ");
        var confirmPassword = prompt("Confirme Sua Senha -> ");
    
        if (password !== confirmPassword) {
            console.log("Senha Incorreta!");
            continue;
        }
    
        console.clear();
        break;
    
    }

    if (userExists(email, password)) {
        console.log("Já existe um usuário com esse e-mail. Por favor, use outro.");
        return;
    }

    addUser(name, email, password)
    saveDB(db)
    acount = true;

    main()
}

function singIn() { // Entrar 
    while(true) {
        var email = prompt("Seu E-mail -> ");
    
        const user = findUserByEmail(email);

        if(user == null) {
            console.clear()
            console.log("Email não encontrado!")
            singUp()
            break;
        } else {
            let password = prompt("Sua senha -> ")
            if(password === user.password) {
                console.clear()
                console.log("Logado!")
                acount = true
                main()
                break;
            } else {
                console.clear()
                console.log("Senha incorreta!")
                main()
                break;
            }
        }
}
}


function main() { // Menu Principal
    if(acount == true) {
        let first = Number(prompt(`
                =====================
                Olá ${name}! Seu cash é: ${cash}
        
                1 - Alugar veiculo
                2 - Ver veiculos alugados
                3 - Adicionar cash
                4 - Retirar cash
                5 - Ver Dados
        
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
            } else if (first == 5) {
                    console.clear();
                    console.log(`Usuário: ${name}\nCash: ${cash}\nVeículos Alugados: ${rents}`);
            } else if(first == 0) {
                    i++;
            }else {
                    console.log("Digite um número entre 0 e 4");
            };
    } else {
        let first = Number(prompt(`
            =====================
            Olá ${name}!
    
            1 - Criar conta
            2 - Entrar
    
            0 - Sair
            `)); 
            
            if (first == 1) {
                console.clear()
                singUp();
            } else if(first == 2) {
                console.clear()
                singIn();
            }else if(first == 0) {
                i++;
            }else {
                console.log("Digite um número entre 0 e 2");
            };
    }
};

function rent() { // Menu de Alugar
    let first = Number(prompt(`
        =====================
        Ola ${name}! Seu cash é: ${cash}

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
    let value = 0;
    console.log(`
        =========================================
            
            1 - Bicicleta Básica 20/h
            2 - Bicicleta Básica 20/h
            3 - Bicicleta Avançada 35/h
            4 - Bicicleta Profissional 40/h
            5 - Bicicleta Básica Elétrica 30/h
            6 - Bicicleta Básica Elétrica 30/h
            7 - Bicicleta Avançada Elétrica 45/h
            8 - Bicicleta Profissional Elétrica 50/h
           
        ========================================= `);
    model = Number(prompt('Adicione o modelo da bike -> '));
    let disponivel = veiculoDisponivel(model);
    if(!disponivel) {
        console.log("Veículo indisponível no momento.");
        return;
    } else {
        if (model == 1 || model == 2) {
            value = 20;
        } else if (model == 3) {
            value = 35;
        } else if (model == 4) {
            value = 40;
        } else if (model == 5 || model == 6) {
            value = 30;
        } else if (model == 7) {
            value = 45;
        } else if (model == 8) {
            value = 50;
        } else {
            console.log("Modelo inválido");
        }
        let time = Number(prompt('Adicione quanto tempo deseja: '));
        if (cash >= (value*time)){
            cash = cash - (value*time);
            if (model == 1) {
                rents.push('Bicicleta Básica');
                updateVeichle(1, { status: false });
            } else if(model == 2) {
                updateVeichle(2, { status: false });
            } else if(model == 3) {
                rents.push('Bicicleta Avançada');
                updateVeichle(3, { status: false });
            } else if(model == 4) {
                rents.push('Bicicleta Profissional');
                updateVeichle(4, { status: false });
            } else if(model == 5) {
                rents.push('Bicicleta Basica Elétrica');
                updateVeichle(5, { status: false });
            } else if(model == 6) {
                rents.push('Bicicleta Basica Elétrica');
                updateVeichle(6, { status: false });
            }
            else if(model == 7) {
                rents.push('Bicicleta Avançada Elétrica');
                updateVeichle(7, { status: false });
            } else if(model == 8) {
                rents.push('Bicicleta Profissional Elétrica');
                updateVeichle(8, { status: false });
            } else if(model == 0) {
                main()
            }
            if(model !== 0) {
                console.log(`Sua bike foi alugada com sucesso. O valor foi... ${(value*time)}`);
        } else if (cash < (value*time)) {
            console.log("Saldo insuficiente");
            deposit();
        };
            }
    }
};

function rentScoo() { // Menu de alugar Patinetes
    let value = 0;
    console.log(`
        =========================================
            
            1 - Patinete Básica 20/h 
            2 - Patinete Básica 20/h
            3 - Patinete Avançada 35/h
            4 - Patinete Profissional 40/h
            5 - Patinete Básica Elétrica 30/h
            6 - Patinete Básica Elétrica 30/h
            7 - Patinete Avançada Elétrica 45/h
            8 - Patinete Profissional Elétrica 50/h
           
        ========================================= `);
    model = Number(prompt('Adicione o modelo do patinete -> '));
    model + 8
    let disponivel = veiculoDisponivel(model);
    if (!disponivel) {
        console.log("Veículo indisponível no momento.");
        return;
    } else {
        if (model == 9 || model == 10) {
            value = 20;
        } else if (model == 11) {
            value = 35;
        } else if (model == 12) {
            value = 40;
        } else if (model == 13 || model == 14) {
            value = 30;
        } else if (model == 15) {
            value = 45;
        } else if (model == 16) {
            value = 50;
        } else {
            console.log("Modelo inválido");
        }
        let time = Number(prompt('Adicione quanto tempo deseja: '));
        if (cash >= (value*time)){
            cash = cash - (value*time);
            if (model == 9) {
                rents.push('Patinete Básica');
                updateVeichle(9, { status: false });
            } else if(model == 10) {
                updateVeichle(10, { status: false });
            } else if(model == 11) {
                rents.push('Patinete Avançada');
                updateVeichle(11, { status: false });
            } else if(model == 12) {
                rents.push('Patinete Profissional');
                updateVeichle(12, { status: false });
            } else if(model == 13) {
                rents.push('Patinete Basica Elétrica');
                updateVeichle(13, { status: false });
            } else if(model == 14) {
                rents.push('Patinete Basica Elétrica');
                updateVeichle(14, { status: false });
            }
            else if(model == 15) {
                rents.push('Patinete Avançada Elétrica');
                updateVeichle(15, { status: false });
            } else if(model == 16) {
                rents.push('Patinete Profissional Elétrica');
                updateVeichle(16, { status: false });
            } else if(model == 0) {
                main()
            }
            if(model !== 0) {
                console.log(`Seu patinete foi alugada com sucesso. O valor foi... ${(value*time)}`);
        } else if (cash < (value*time)) {
            console.log("Saldo insuficiente");
            deposit();
        };
            }
    }
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

while(i < 1) { // Loop principal
    main()
};

console.log(`
    =====================
    Obrigado por usar nosso sistema, ${name}!
    Até a próxima!
    =====================
`) // Mensagem de despedida