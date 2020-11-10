let triangulo = {
    ladoA : 12,
    ladoB : 10,
    ladoC : 10,
    altura : function(){
        if(this.ladoA == this.ladoB)
            return Math.sqrt(Math.pow(this.ladoB, 2) - Math.pow(this.ladoC/2, 2));
        else if(this.ladoA == this.ladoC)
            return Math.sqrt(Math.pow(this.ladoA, 2) - Math.pow(this.ladoB/2, 2));
        else if(this.ladoB == this.ladoC)
            return Math.sqrt(Math.pow(this.ladoB, 2) - Math.pow(this.ladoA/2, 2));
        else
            return 'O triângulo não é isósceles';
    },
    perimetro : function(){
        return this.ladoA + this.ladoB + this.ladoC;
    },
    area : function() {
        if(this.ladoA == this.ladoB)
            return (this.ladoC * this.altura())/2;
        else if(this.ladoA == this.ladoC)
            return (this.ladoB * this.altura())/2;
        else if(this.ladoB == this.ladoC)
            return(this.ladoA * this.altura())/2;
        else
            return 'O triângulo não é isósceles';
    }
};

console.log('Perímetro: ' + triangulo.perimetro());
console.log('Área: ' + triangulo.area())