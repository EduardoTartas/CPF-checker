let CPF:string = "01008672270"
let charIgual:boolean = true;
let multiplicador:number = 10;
let soma:number = 0;

function VerificaCPF (CPF:string): boolean{
    for(let i:number = 1; i < CPF.length; i++){
        if( CPF[i]!=CPF[0]){
            charIgual = false;
            break;
        }
    }

    if(CPF.length!=11 || charIgual){
        return false
    }
    else{
        for(let i:number = 0;i<=8;i++){
            soma+= parseInt(CPF[i])*multiplicador;
            multiplicador--;
        }
        
        let restoPD:number = 11 - (soma%11);
        soma = 0;
        multiplicador = 11;
        
        for(let i:number = 0;i<=9;i++){
            soma += parseInt(CPF[i])*multiplicador;
            multiplicador--;
        }
        
        let restoSD:number = 11 - (soma%11);

        restoPD = restoSD >=10? 0:restoPD;
        restoSD = restoSD >=10? 0:restoSD;
        let veridico:boolean = restoPD == parseInt(CPF[9]) || restoSD == parseInt(CPF[10]) ? true:false;

        return veridico;
    }
}

function VerificaEstadoCPF(CPF:string){
        switch (parseInt(CPF[8])){
            case 0:
                console.log("Rio Grande do Sul")
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

console.log(VerificaCPF(CPF));
VerificaEstadoCPF(CPF);