"use strict";
let multiplicador = 10;
let somaPD = 0;
let somaSD = 0;
function VerificaCPF(CPF) {
    if (CPF.length != 11) {
        return false;
    }
    else {
        for (let i = 0; i <= 8; i++) {
            somaPD += parseInt(CPF[i]) * multiplicador;
            multiplicador--;
        }
        let restoPD = 11 - (somaPD % 11);
        multiplicador = 11;
        for (let i = 0; i <= 9; i++) {
            somaPD += parseInt(CPF[i]) * multiplicador;
            multiplicador--;
        }
        let restoSD = 11 - (somaSD % 11);
        console.log(restoPD);
        console.log(restoSD);
        if (restoPD == parseInt(CPF[9])) {
            if (restoSD == parseInt(CPF[10])) {
                return true;
            }
            else if (restoSD >= 10 && parseInt(CPF[10]) == 0) {
                return true;
            }
            else
                return false;
        }
        else if (restoPD >= 10 && parseInt(CPF[9]) == 0) {
            if (restoSD == parseInt(CPF[10])) {
                return true;
            }
            else if (restoSD >= 10 && parseInt(CPF[10]) == 0) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    }
}
function VerificaEstadoCPF(CPF) {
    switch (parseInt(CPF[8])) {
        case 0:
            console.log("Rio Grande do Sul");
            break;
        case 1:
            console.log("Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins");
            break;
        case 2:
            console.log("Pará, Amazonas, Acre, Amapá, Rondônia e Roraima");
            break;
        case 3:
            console.log("Ceará, Maranhão e Piauí");
            break;
        case 4:
            console.log("Pernambuco, Rio Grande do Norte, Paraíba e Alagoas");
            break;
        case 5:
            console.log("Bahia; e Sergipe");
            break;
        case 6:
            console.log("Minas Gerais");
            break;
        case 7:
            console.log("Rio de Janeiro e Espírito Santo");
            break;
        case 8:
            console.log("São Paulo");
            break;
        case 9:
            console.log("Paraná e Santa Catarina");
            break;
    }
}
console.log(VerificaCPF("12345678900"));
VerificaEstadoCPF("01008672270");
