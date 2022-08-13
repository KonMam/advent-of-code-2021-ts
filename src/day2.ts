import fs from 'fs'

function cleanText(str: string, remove_word: string) {
    str = str.replace("\r", "");
    str = str.replace(remove_word, "");
    str = str.trim();
    return str;
}


const main = () => {
    
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

const final_position = main()

console.log(final_position)

