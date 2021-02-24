
var Lucas ={weight:[78,92] , height:[169,195]};

var John = {weight:[92,85] , height:[188,176] }

var a,b,c,d

a= Lucas.height

b = Lucas.weight

c = John.weight

d = John.height

LucasBMI = (b/a**2);
JohnBMI = (c/d**2);

console.log(LucasBMI , JohnBMI)

Boolean = true;

if( LucasBMI>JohnBMI){
    console.log(Boolean,'Lucas BMI is bigger than john')
}
else{
    console.log('John\s BMI is bigger than lucas\'s')
}

var Celsius , Fahrenheit , C2F , F2C;
Celsius = 20;
Fahrenheit = 55;
C2F = Celsius * 9 / 5 +32;
F2C = (Fahrenheit - 32) * 5 / 9;
console.log(Celsius + "degrees converted to fahrenheit is "+ C2F +"degrees")
console.log(Fahrenheit + "degrees converted to celsius is " + F2C +"degrees")




var Netscores1 ,Netscores2, Netscores3 , Knickscore1 , Knickscore2 , Knickscore3;

Netscores1 = 96;
Netscores2 = 108;
Netscores3 = 89;

Knickscore1 = 88;
Knickscore2 = 91;
Knickscore3 = 110;

x = (Netscores1 + Netscores2 +Netscores3)/3;

z =(Knickscore1 + Knickscore2 + Knickscore3)/3;

if (x > z){
    console .log("Nets are winner")
}
else {
    console.log("Knicks are winners")
}