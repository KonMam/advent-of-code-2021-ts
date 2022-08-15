import fs from 'fs'

export const readInput = (filename: string, splitBy: string) => {
    return fs.readFileSync(`./inputs/${filename}`).toString().split(splitBy)
}

export const arrayToInt = (array: string[]) => {
    return array.map(str => {
        return Number(str)
    })
}

export const cleanBoards = (array: string[]) => {
    let boards: string[] = []

    for (let element of boardInputData) {
        if (element.length === 14) {
            boards.push(element)
        }
}
    return boards
}

const orderInputData = readInput('day-4-order.txt', ",")

const orderInputDataInt = arrayToInt(orderInputData)

const boardInputData = readInput('day-4-boards.txt', "\r\n")

const boardDataClean = cleanBoards(boardInputData)


console.log(boardDataClean)

export const someFunction = (array: string[]) => {
    let i = 0

    while (i % 5 === 0) {

        for (let element of array) {
            
        }


    }
}