export class Producto
{
    //las props pra que sean accesibles deben ser publicas
    public nombre: string;
    public imagen:string;
    public precio:number;

    //vamos a crear un constructor on params para que reciba la inf de las prop directamente
    constructor(nombre:string, imagen:string, precio:number)
    {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}