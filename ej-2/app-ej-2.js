var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramColor, paramNumSerie, paramUsado, paramTodoTerreno) {
        this.marca = paramMarca;
        this.color = paramColor;
        this.numSerie = paramNumSerie;
        this.usado = paramUsado;
        this.todoTerreno = paramTodoTerreno;
    }
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerColor = function () {
        return this.color;
    };
    Auto.prototype.obtenerNumSerie = function () {
        return this.numSerie;
    };
    Auto.prototype.obtenerUsado = function () {
        if (this.usado === true) {
            this.usado = true;
        }
        else {
            this.usado = false;
        }
    };
    Auto.prototype.obtenerTodoTerreno = function () {
        if (this.todoTerreno === true) {
            return this.todoTerreno = true;
        }
        else {
            return this.todoTerreno = false;
        }
    };
    return Auto;
}());
var primerAuto = new Auto('nissan', 'negro', 12, true, false);
var segundoAuto = new Auto('audi', 'gris', 189, false, false);
var tercerAuto = new Auto('toyota', 'blanco', 256, true, true);
console.log('Marca: ' + primerAuto.obtenerMarca() + 'Color: ' + primerAuto.obtenerMarca());
