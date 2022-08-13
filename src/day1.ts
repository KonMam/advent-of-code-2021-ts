import fs from 'fs'

const readFileIntoArray = () => {

    const depth: number[] = []
    
    var array = fs.readFileSync('./inputs/day-1.txt').toString().split("\n");

    for(let i in array) {
        depth.push(parseInt(array[i]));
    };

    return depth
}

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

const getSlidingWindowArray = (array: number[]) => {
    const sliding_window: number[] = []
    for (let i in array) {
        let index = parseInt(i)
        if (index > sliding_window.length - 1)  {
            sliding_window.push(array[index] + array[index + 1] + array[index + 2])
        }
    }
    return sliding_window
}


const getFirstResult = (depth: number[]) => {
    const depth_status = getChangeStatusArray(depth)

    const depth_increases_count = depth_status.filter(element => element == 'increased')

    return depth_increases_count.length
}

const getSecondResult = (depth: number[]) => {
    const sliding_window = getSlidingWindowArray(depth)
    const sliding_window_status = getChangeStatusArray(sliding_window)

    const sliding_increases_count =  sliding_window_status.filter(element => element == 'increased')

    return sliding_increases_count.length

}

const main = () => {    
    const depth = readFileIntoArray()

    console.log(getFirstResult(depth))
    console.log(getSecondResult(depth))
}

main()