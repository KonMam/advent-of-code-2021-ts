import fs from 'fs'

function cleanText(str: string, remove_word: string) {
    str = str.replace("\r", "");
    str = str.replace(remove_word, "");
    str = str.trim();
    return str;
}

const getFirstResult = () => {
    
    var data = fs.readFileSync('./inputs/day-2.txt').toString().split("\n");

    let horizontal_position: number = 0;
    let vertical_position: number = 0;

    for (let i in data) {
        let index = parseInt(i)
        let str = data[index]

        if (str.includes("forward")) {
            str = cleanText(str, "forward");
            horizontal_position += parseInt(str)
        };

        if (str.includes("down")) {
            str = cleanText(str, "down");
            vertical_position += parseInt(str)
        };

        if (str.includes("up")) {
            str = cleanText(str, "up");
            vertical_position -= parseInt(str)
        };
    };
    return horizontal_position * vertical_position
}

const getSecondResult = () => {
    
    var data = fs.readFileSync('./inputs/day-2.txt').toString().split("\n");

    let horizontal_position: number = 0;
    let aim: number = 0;
    let depth: number = 0;

    for (let i in data) {
        let index = parseInt(i)
        let str = data[index]

        if (str.includes("forward")) {
            str = cleanText(str, "forward");
            let instruction_number: number  = parseInt(str)
            horizontal_position += instruction_number
            depth += instruction_number*aim
        };

        if (str.includes("down")) {
            str = cleanText(str, "down");
            let instruction_number: number  = parseInt(str)
            aim += instruction_number
        };

        if (str.includes("up")) {
            str = cleanText(str, "up");
            let instruction_number: number  = parseInt(str)
            aim -= instruction_number
        };
    };
    return horizontal_position * depth
}

const main = () => {
    console.log(getFirstResult())
    console.log(getSecondResult())

}

main()
