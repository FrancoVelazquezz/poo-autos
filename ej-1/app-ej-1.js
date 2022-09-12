var Perros = /** @class */ (function () {
    function Perros(paramEdad, paramRaza, paramEntrenado) {
        this.edad = paramEdad;
        this.raza = paramRaza;
        this.entrenado = paramEntrenado;
    }
    Perros.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Perros.prototype.obtenerRaza = function () {
        return this.raza;
    };
    Perros.prototype.obtenerEntrenado = function () {
        if (this.entrenado === true) {
            return this.entrenado = true;
        }
        else {
            return this.entrenado = false;
        }
    };
    return Perros;
}());
var primerPerro = new Perros(3, 'dogo', true);
console.log('Raza del perro: ' + primerPerro.obtenerRaza());
console.log('Edad del perro: ' + primerPerro.obtenerEdad());
console.log('Perro entrenado: ' + primerPerro.obtenerEntrenado());
