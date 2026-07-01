function hello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World!")
        }, 2000)
    })
}
async function printHello() {
    const result = await hello();
    console.log(result)
}
printHello()