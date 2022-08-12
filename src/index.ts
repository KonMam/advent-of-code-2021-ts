import fs from 'fs'


const readFileIntoArray = () => {

    const depth: number[] = []
    
    var array = fs.readFileSync('./inputs/day-1.txt').toString().split("\n");

    for(let i in array) {
        depth.push(parseInt(array[i]));
    };

    return depth
}


const depth = readFileIntoArray()


const getChangeStatusArray = (depth: number[]) => {
    const status: string[] = []
    for(let i in depth) {
        let index = parseInt(i)
        if (index-1 < 0) {
            status.push('N/A - no previous measurement')
        }
        if (depth[index-1] < depth[index]) { // 0 and 1   
            status.push('increased')
        } 
        if (depth[index-1] === depth[index]) {
            status.push('no change')
        } 
        if (depth[index-1] > depth[index]) {
            status.push('decreased')
        } 
    }
    return status
}

const status = getChangeStatusArray(depth)

let count = status.filter(element => element == 'increased')

console.log(count.length)