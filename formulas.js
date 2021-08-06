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