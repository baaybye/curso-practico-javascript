/* Promedio _______________________________________________________________ */

function listAverage(list) {
    const listLength = list.length;

    /* let listSum = 0;
    for (const number of list) {
        listSum += number;
    } */

    /* const listSum = list.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }) */

    return listSum/listLength;
}

/* Mediana _______________________________________________________________ */

function listMedian(list) {
    const listLength = list.length;
    const listHalf = list.length / 2;
    let median;

    const sortedList = list.sort(function(a, b){
        return a - b;
    });

    if (listLength%2 === 0) {
        const newList = [sortedList[listHalf - 1], sortedList[listHalf]];
        median = listAverage(newList);

    } else {
        median = sortedList[parseInt(listHalf)];
    }

    return median;
}

/* Moda __________________________________________________________________ */

function listMode(list) {
    const listCount = {};

    for (const element of list) {
        if (listCount[element]) {
            listCount[element] += 1;
    
        } else {
            listCount[element] = 1;
        }
    }

    const arrayCount = Object.entries(listCount).sort(function(a, b){
        return a[1] - b[1];
    });;

    let n1 = 1;
    let n2 = 2;

    let mode = [];

    for (value of arrayCount) {
        const mode1 = arrayCount[arrayCount.length - n1];
        const mode2 = arrayCount[arrayCount.length - n2];

        if (mode1[1] == mode2[1]) {
            mode.push(mode1);
            
            n1 += 1;
            n2 += 1;

        } else {
            mode.push(mode1);
            break;
        }
    }

    console.log(mode);
    /* console.log(`La moda es ${mode[0]} que se repite ${mode[1]} veces`) */;
}

/* Promedio Ponderado ____________________________________________________ */

function listWeightedAverage(notesList, creditsList) {
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
    

    return (multipliedListsSum/creditsSum).toFixed(2)
}

const subjects = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notes = subjects.map(function(note){
    return note.note;
})

const credits = subjects.map(function(credit){
    return credit.credit;
})


listWeightedAverage(notes, credits);