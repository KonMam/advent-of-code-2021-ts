import fs from 'fs'

const getInput = () => {

    var result: number[] = []

    var data = fs.readFileSync('./inputs/day-3.txt').toString().split("\n");

    for (let i in data) {
        result.push(parseInt(data[i]))
    }
    return result
}

const binary_data = getInput()

const getFirstResult = (data: number[]) => {

    for (let element of data) {

        let string = element.toString()
        let length = string.length
        let i = 0
        let count = 0

        while (i < length) {
            let elementAtPosition = string.at(i)
            if (elementAtPosition === "1") {
                count += 1
            }
            if (elementAtPosition === "0") {
                count -= 1
            }
        }
        console.log(count)
    }
}



getFirstResult(binary_data)