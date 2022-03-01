console.log("Ejemplo ts");

class Persona{
    nombre: string = "";
    apellido: string = "";
    edad: number = 0;



    constructor(n: string, a: string, e: number) {
        this.nombre = n;
        this.apellido = a;
        this.edad =e;

    }
}

 function CrearPersona(){
    let persona: Persona = new Persona("Juan","Perez", 39);
    console.log("La persona es: ", persona);
}