/**
 * Esta función recibe un string por parámetro. Una "O" representa una oveja, y una "L", un lobito.
 *
 * Crea una función que recibe un string con lobos y ovejas, y devuelve el número de ovejas que hay en él
 */

function contarOvejas(ovejas) {
    let num_ovejas = ovejas.match(/o/gi);
    if (!num_ovejas){
        return 0;
    }
    return num_ovejas.length;

    // for (let i = 0; i < ovejas.length ;i++){
    //     if(ovejas[i] == "O"){
    //         num_ovejas++;
    // }
    // return num_ovejas.length;
}
console.log(contarOvejas("O"));
console.log(contarOvejas("OLLO"));
console.log(contarOvejas("OL"));
console.log(contarOvejas("LLL"));
