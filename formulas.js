/* Unidades _______________________________________________________________ */

const units = "cm";

/* Cuadrado _______________________________________________________________ */

console.group("Cuadrados");

    /* Lados */
const squareSides = 10;

    console.log(`Los lados del cuadrado miden ${squareSides}${units}`);

    /* Perímetro */
const squarePerimeter = squareSides * 4;

    console.log(`El perímetro del cuadrado es ${squarePerimeter}${units}`);

const squareArea = squareSides * squareSides;

    /* Área */
    console.log(`El área del cuadrado es ${squareArea}${units}^2`)

console.groupEnd();

/* Triángulo ______________________________________________________________ */

console.group("Triángulos");

    /* Lados */
const triangleSide1 = 6;

const triangleSide2 = 6;

const triangleBase = 4;

    /* Altura */
const triangleHeight = 5.5;

    console.log(`Los lados del triángulo miden ${triangleBase}${units}, ${triangleSide1}${units} y ${triangleSide2}${units} y la altura ${triangleHeight}${units}`);

    /* Perímetro */
const trianglePerimeter = triangleBase + triangleSide1 + triangleSide2;

    console.log(`El perímetro del triángulo es ${trianglePerimeter}${units}`);

    /* Área */
const triangleArea = (triangleBase * triangleHeight)/2;

    console.log(`El área del triángulo es ${triangleArea}${units}^2`)

console.groupEnd();

/* Círculo ________________________________________________________________ */

console.group("Círculos");

    /* Radio */
const circleRadio = 4;

    /* Díametro */
const circleDiameter = circleRadio * 2;

    console.log(`El radio del círculo mide ${circleRadio}${units} y el diámetro ${circleDiameter}${units}`);

    /* Perímetro */
const circlePerimeter = Math.PI * circleDiameter;
const circlePerimeterRounded = circlePerimeter.toFixed(2);

    console.log(`El perímetro del círculo es ${circlePerimeterRounded}${units}`);

    /* Área */
const circleArea = Math.PI * circleRadio * circleRadio;
const circleAreaRounded = circleArea.toFixed(2);

    console.log(`El área del círculo es ${circleAreaRounded}${units}`);
    
console.groupEnd();

/* Descuentos _____________________________________________________________ */

const originalPrice = 120;
const discountPercentage = 18;

const payingPercentage = 100 - discountPercentage;
const finalPrice = originalPrice * payingPercentage/100;

console.log(`$${finalPrice}`)

/* Promedio, Mediana y Moda ________________________________________________ */

    /* Promedio */
const list1 = [100, 200, 300, 500];

const list1Length = list1.length;

/* let list1Sum = 0;
for (number of list1) {
    list1Sum += number;
} */

const list1Sum = list1.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})


const list1Average = list1Sum/list1Length;
console.log(list1Average);

    /* Mediana */
const list2 = [400, 500, 100, 200, 30, 15, 100, 500, 10];

const list2Length = list2.length;
const median = list2.length / 2;

const sortedList = list2.sort(function(a, b){
    return a - b;
});

if (list2Length%2 == 0) {
    console.log(`${list[median - 1]} y ${list[median]}`)
} else {
console.log(list);
console.log(median);

console.log(`${list[Math.floor(median)]}`)
}


    /* Moda */
const list3 = [3, 1, 2, 1, 5, 2, 4, 2, 1, 3, 2, 5, 5, 2, 5];

const list3Count = {};

/* const prueba = list3.map(function(element) {
    if (list3Count[element]) {
        list3Count[element] += 1;
    } else {
        list3Count[element] = 1;
    }
}); */

for (const element of list3) {
    if (list3Count[element]) {
        list3Count[element] += 1;

    } else {
        list3Count[element] = 1;
    }
}

const arrayList = Object.entries(list3Count).sort(function(a, b){
    return a[1] - b[1];
});;

const listMode = arrayList[arrayList.length - 1];

console.log(`La moda es ${listMode[0]} que se repite ${listMode[1]} veces`);


    /* Promedio Ponderado */
const notesList = [10, 10, 9, 8, 8, 8, 7];
const creditsList = [7, 4, 7, 7, 4, 7, 7];

const multiplyLists = [];

for (i = 0; i < notesList.length; i++){
    multiplyLists.push(notesList[i] * creditsList[i]);
}

const creditsSum = creditsList.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

const multipliedListsSum = multiplyLists.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log((multipliedListsSum/creditsSum).toFixed(2));