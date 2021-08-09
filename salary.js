/* Salarios _____________________________________________________________________ */

/* Crear listas de paises */

function person(countryName, identification, fixedMonthlyIncome) {
    this.countryName = countryName;
    this.identification = identification;
    this.fixedMonthlyIncome = fixedMonthlyIncome;
}

/* Paises */
const countries = [];
let globalIncome;

function createCountry(countryName, namesList, incomesList) {
    person(countryName, namesList, incomesList);

    for (i = 0; i < namesList.length; i++){
        countries.push(new person(countryName, namesList[i], incomesList[i]));
    }

    globalIncome = countries.map(income => income.fixedMonthlyIncome);
}

createCountry("Colombia", ["Andrés", "Sandra", "Francisco", "Andrea", "Oscar", "Daniela", "Lety", "Mariana", "Cinthya", "Carlos"], [1000, 5000, 7500, 1000, 2500, 5000, 100000, 1000, 5000, 5000]);

createCountry("México", ["José", "Romina", "Anaeli", "Ramón", "Rogelio", "Alex", "José Manuel", "Ricardo", "Juan", "Pablo"], [5500, 4500, 4000, 3750, 8000, 3000, 50000, 1000, 1000, 5000]);

createCountry("México", ["Rodrígo", "Camila", "Fernanda", "Ana Lucía", "Ana Luz", "Ramíro", "Maria José", "Patricia", "Patricio", "Rocío"], [500, 2000, 3000, 3500, 2500, 1000, 10000, 1000, 9500, 100000]);

/* País Individual */
const country = [];
const incomePerCountry = [];

function separateCountries(separatedCountry) {
    const countryList = countries.filter(country => country.countryName.includes(separatedCountry))
    country.push(countryList)

    incomePerCountry.push(countryList.map(income => income.fixedMonthlyIncome));
}

separateCountries("México");
separateCountries("Colombia");

/* Top 10% */

const top10 = [];
const top10Income = [];

function calculateTop10Percent(sortedList, totalPopulation, top10Percentage) {
    const top10List = [];

    let population10Percent = totalPopulation * top10Percentage/100;
    let n = 1;

    /* const spliceStart = totalPopulation - population10Percent;
    const spliceCount = totalPopulation - spliceStart;

    const splicedList = sortedList.splice(spliceStart, spliceCount);
    console.log(splicedList); */

    for(let i = population10Percent; i > 0; i--) {
        top10List.push(sortedList[sortedList.length - n]);
        n += 1;
    }
    top10.push(top10List);

    const incomesList = top10List.map(income => income.fixedMonthlyIncome)
    top10Income.push(incomesList);
}

function top10Percent(list) {
    const sortedIncomes = list.sort(function(a, b){
        return a.fixedMonthlyIncome - b.fixedMonthlyIncome;
    });

    const totalPopulation = sortedIncomes.length;
    const top10Percentage = 10;

    calculateTop10Percent(sortedIncomes, totalPopulation, top10Percentage);

    return top10;
}

top10Percent(countries);
top10Percent(country[0]);
top10Percent(country[1]);

/* Análisis general ________________________________________________________________________________ */
let totalIncome;

/* Salario Total */

function incomeSum(list = globalIncome) {
    totalIncome = list.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
    
    return totalIncome;
}

/* Promedio de Salarios */

function incomeAverage(list = globalIncome) {
    incomeSum(list);
    let average;
    const listLength = list.length;

    if(totalIncome%listLength === 0) {
        average = (totalIncome/listLength);

    } else {
        average = Number((totalIncome/listLength).toFixed(2));
    }

    return average;
}

/* Mediana de Salarios */

function incomeMedian(list = globalIncome) {
    let median;

    const listLength = list.length;
    const listHalf = listLength/ 2;

    const sortedList = list.sort(function(a, b){
        return a - b;
    });

    if (listLength%2 === 0) {
        const medianList = [sortedList[listHalf - 1], sortedList[listHalf]];
        median = incomeAverage(medianList);

    } else {
        median = sortedList[parseInt(listHalf)];
    }

    return median;
}

/* Análisis por país ________________________________________________________________________________ */
/* Salario Total */

incomeSum(incomePerCountry[0]);
incomeSum(incomePerCountry[1]);

/* Promedio de Salarios */

incomeAverage(incomePerCountry[0]);
incomeAverage(incomePerCountry[1]);

/* Mediana de Salarios */

incomeMedian(incomePerCountry[0]);
incomeMedian(incomePerCountry[1]);

/* Análisis 10% _________________________________________________________________ */
/* Salario Total */

incomeSum(top10Income[0]);
incomeSum(top10Income[1]);
incomeSum(top10Income[2]);

/* Promedio de Salarios */

incomeAverage(top10Income[0]);
incomeAverage(top10Income[1]);
incomeAverage(top10Income[2]);

/* Mediana de Salarios */

incomeMedian(top10Income[0]);
incomeMedian(top10Income[1]);
incomeMedian(top10Income[2]);