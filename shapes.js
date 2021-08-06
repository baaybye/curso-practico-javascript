
/* Cuadrado _______________________________________________________________ */

const squareUnits = document.getElementById("selectSquareUnits");

function squarePerimeter(squareSides) {
    return squareSides * 4;
}

function squareArea(squareSides) {
    return squareSides * squareSides;
}


    /* HTML */

    /* Perímetro */

function calculateSquarePerimeter() {
    const input = document.getElementById("squareInput");
    const value = Number(input.value);

    const perimeter = squarePerimeter(value);

    document.getElementById("showSquareResult").innerHTML = `${perimeter}${squareUnits.value}`;
}

    /* Área */

function calculateSquareArea() {
    const input = document.getElementById("squareInput");
    const value = Number(input.value);

    const area = squareArea(value);

    document.getElementById("showSquareResult").innerHTML = `${area}${squareUnits.value}²`;  
}

/* Triángulo ______________________________________________________________ */

const triangleUnits = document.getElementById("selectTriangleUnits");

function trianglePerimeter(triangleBase, triangleSide1, triangleSide2) {
    return triangleBase + triangleSide1 + triangleSide2;
}

function triangleArea(triangleBase, triangleHeight) {
    return (triangleBase * triangleHeight)/2;
}

    /* HTML */

    /* Perímetro */

function calculateTrianglePerimeter() {
    const baseInput = document.getElementById("triangleBaseInput");
    const baseValue = Number(baseInput.value);

    const side1Input = document.getElementById("triangleSide1Input")
    const side1Value = Number(side1Input.value);

    const side2Input = document.getElementById("triangleSide2Input")
    const side2Value = Number(side2Input.value);

    const perimeter = trianglePerimeter(baseValue, side1Value, side2Value);

    document.getElementById("showTriangleResult").innerHTML = `${perimeter}${triangleUnits.value}`;
}

    /* Área */

function calculateTriangleArea() {
    const baseInput = document.getElementById("triangleBaseInput");
    const baseValue = Number(baseInput.value);

    const heightInput = document.getElementById("triangleHeightInput");
    const heightValue = Number(heightInput.value);

    const area = triangleArea(baseValue, heightValue);


    document.getElementById("showTriangleResult").innerHTML = `${area}${triangleUnits.value}²`;   
}

/* Triángulo Isósceles ____________________________________________________ */

const isoscelesUnits = document.getElementById("selectIsoscelesUnits");

function triangleIsoscelesHeight(triangleBase, triangleSides) {
    const bSide = triangleBase/2;
    const hypotenuse = triangleSides;
    return Math.sqrt(hypotenuse * hypotenuse - bSide * bSide);
}

function calculateIsoscelesHeight(){

    const sideAInput = document.getElementById("isoscelesSideAInput");
    const sideAValue = Number(sideAInput.value);
    
    const sideBInput = document.getElementById("isoscelesSideBInput");
    const sideBValue = Number(sideBInput.value);
    
    const sideCInput = document.getElementById("isoscelesSideCInput");
    const sideCValue = Number(sideCInput.value);
    
    let baseValue;
    let sidesValue;
    let result;


    switch(true){
        case sideAValue === sideBValue:
            baseValue = sideCValue;
            sidesValue = sideAValue;
            result = true;
            break;
    
        case sideAValue === sideCValue:
            baseValue = sideBValue;
            sidesValue = sideAValue;
            result = true;
            break;
    
        case sideBValue === sideCValue:
            baseValue = sideAValue;
            sidesValue = sideBValue;
            result = true;
            break;

        default:
            result = false;
    }


    const height = triangleIsoscelesHeight(baseValue, sidesValue);

    const heightRounded = height.toFixed(2);

    console.log(height);

    if (result === true) {
        document.getElementById("showIsoscelesResult").innerHTML = `${heightRounded}${isoscelesUnits.value}`;
    } else {
        document.getElementById("showIsoscelesResult").innerHTML = "Los valores que ingresaste no corresponden a un triangulo isósceles, intenta con otros valores";
    }
}


/* Círculo ________________________________________________________________ */

const circleUnits = document.getElementById("selectTriangleUnits");

function circleDiameter(circleRadio) {
    return circleRadio * 2
}

function circlePerimeter(circleRadio) {
    const diameter = circleDiameter(circleRadio);
    const perimeter = Math.PI * diameter;
    const roundedPerimeter = perimeter.toFixed(2);

    return roundedPerimeter;
}

function circleArea(circleRadio) {
    const area = Math.PI * circleRadio * circleRadio;
    const roundedArea = area.toFixed(2);

    return roundedArea
}

    /* HTML */

    /* Perímetro */

    function calculateCirclePerimeter() {
        const input = document.getElementById("circleInput");
        const value = Number(input.value);
    
        const perimeter = circlePerimeter(value);
    
        document.getElementById("showCircleResult").innerHTML = `${perimeter}${circleUnits.value}`;
    }

    /* Área */

    function calculateCircleArea() {
        const input = document.getElementById("circleInput");
        const value = Number(input.value);
    
        const area = circleArea(value);
    
        document.getElementById("showCircleResult").innerHTML = `${area}${circleUnits.value}²`;  
    }



    
/* Ejemplo Triángulo Isósceles

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
} 
*/