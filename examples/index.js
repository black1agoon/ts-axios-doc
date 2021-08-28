function delay(milliseconds, count) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}
// 异步函数总是返回一个 Promise
async function dramaticWelcome() {
    console.log('Hello');
    for (let i = 0; i < 5; i++) {
        // 等待 Promise<number>转换为数字
        const count = await delay(500, i);
        console.log(count);
    }
    console.log('World');
}
dramaticWelcome();
