/** Pssst: Recuerda leer el fichero README.md */

function calcNota(input, solution) {
  let nota = 0;
  for (i = 0; i < solution.length; i++){
    if(input[i] == solution[i]){
      nota++
    }
  }
  return nota;
}

console.log(calcNota("ABCDBBACAD", "ABCDBBACAD")); // 100 (el examen está perfecto)
console.log(calcNota("CBCDBBACAC", "ABCDBBACAD")); // 80 (hay 2 errores)
console.log(calcNota("CCACCCAVV", "ABCDBBACAD")); // 0 (todo mal...)
