const {readFile, writeFile, writeFileSync} = require('fs').promises
// const {readFile, writeFile, writeFileSync} = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// ./2-modules/async-fs-modules.js rewritten using Promises and async await

const start = async() => {
    try {
        const first = await readFile('./2-modules/content/first.txt', 'utf8')
        const second = await readFile('./2-modules/content/second.txt', 'utf8')
        await writeFile(
            './2-modules/content/result-async-await-mind-grenade.txt',
            `THIS IS AWESOME : ${first}, ${second}`,
            {flag: 'a'}
        )
        // const first = await readFilePromise('./2-modules/content/first.txt', 'utf8')
        // const second = await readFilePromise('./2-modules/content/second.txt', 'utf8')
        // await writeFilePromise(
        //     './2-modules/content/result-async-await-mind-grenade.txt',
        //     `THIS IS AWESOME : ${first}, ${second}`
        // )
        console.log(first, second)    
    } catch (error) {
        console.log(error)
    }
}

start()

// // using promises
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./2-modules/content/first.txt')
//     .then((result) => {console.log(result)})
//     .catch((err) => console.log(err))
