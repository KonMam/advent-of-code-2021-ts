import fs from 'fs'

const getInput = () => {

    var result: string[] = [];

    var data = fs.readFileSync('./inputs/day-3.txt').toString().split("\n");

    for (let i in data) {
        result.push(data[parseInt(i)])
    };

    return result
}

function getOccurances(array: any[]) {

    const occurances: any = {};

    for (const num of array) {
        occurances[num] = occurances[num] ? occurances[num] + 1 : 1;
    };
    
    return occurances;
}

const getFirstResult = (data: string[]) => {

    const transformed_data: any[] = [];

    for (let element of data) {

        element = element.trim()

        let digits: number[] = []

        for (let digit of element) {
            digits.push(parseInt(digit))
        } 

        transformed_data.push(digits)
    };


    let gamma_rate: string = ""
    let epsilon_rate: string = ""

    let i = 0
    while ( i < 12) {

        let results = [];

        for (let element of transformed_data) {

            
            results.push(element[i])
    
        };

        let counts = getOccurances(results);

        if (counts["0"] < counts["1"]) {
            gamma_rate = gamma_rate.concat("1")
            epsilon_rate = epsilon_rate.concat("0")
        } else {
            gamma_rate = gamma_rate.concat("0")
            epsilon_rate = epsilon_rate.concat("1")
        };

        i += 1;
    };


    let decimal_gamma_rate = parseInt(gamma_rate, 2);
    let decimal_epsilon_rate = parseInt(epsilon_rate, 2);
    let power_consumption = decimal_gamma_rate * decimal_epsilon_rate;

    console.log("Gamma rate: ", decimal_gamma_rate);
    console.log("Epsilon rate: ", decimal_epsilon_rate);
    console.log("Power Consumption: ", power_consumption);
}


const binary_data = getInput()

getFirstResult(binary_data)

