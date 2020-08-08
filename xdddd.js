class Autos {
    constructor(Marca, Modelo, Puertas, Precio ){
           this.Marca=Marca;
           this.Modelo=Modelo;
           this.Puertas=Puertas;
           this.Precio=Precio;              
    }

    valores (){
        return  `Marca: ${this.Marca} // Modelo: ${this.modelo} // Cantidad de puertas: ${this.Puertas} // Precio: ${this.Precio}`;                                    
    }
}

class Motos{
        constructor(Marca,Modelo,Cilindrada, Precio){
            this.Marca=Marca;
            this.Modelo=Modelo;
            this.Cilindrada=Cilindrada;
            this.Precio=Precio;
        }   
               
}

  const Auto1 = new Autos("Peugeot","206", 4, 200000);
  const Auto2= new  Autos("Peugeot", "208",5 , 250000);
  const Moto1= new  Motos("Honda", "Titan", "125c", 60000);
  const Moto2= new  Motos("Yamaha", "YBR", "160c", 80500)

 
   console.log(Auto1.valores());
   console.log(Auto2.valores());





