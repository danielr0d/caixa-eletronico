var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("Qual o valor do saque?\n", function(answer) {
    var valorSaque = answer;
    leitor.close();

    var totalSaque = valorSaque;
    var cedula = 100;
    var totalCedula = 0;

    do {
        if(totalSaque >= cedula){
            totalSaque -= cedula;
            totalCedula += 1;
        } 
        else {
            if(cedula == 100){
                cedula = 50;
            }
            else if(cedula == 50){
                cedula = 20;
            }
            else if(cedula == 20){
                ceduça = 10;
            }
            else if (cedula == 10){
                cedula = 5;
            }
            else if (cedula == 5){
                cedula = 2;
            } 
        }
        if(totalCedula > 0){
            console.log(totalCedula, "cedula de", cedula, "de reais\n");
            totalCedula = 0;
        }
    } while (totalSaque != 0);
});
