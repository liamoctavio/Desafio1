console.log("Ejemplo ts");
var Persona = /** @class */ (function () {
    function Persona(n, a, e) {
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
    return Persona;
}());
function CrearPersona() {
    var persona = new Persona("Juan", "Perez", 39);
    console.log("La persona es: ", persona);
}
