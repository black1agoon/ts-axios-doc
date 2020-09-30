interface ClockInterface {
 tick()
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise<number> (resolve => {
    setTimeout(() => {
      resolve(count)
    }, milliseconds)
  })
}

// 异步函数总是返回一个 Promise
async function dramaticWelcome(): Promise<void> {
  console.log('Hello')
  for (let i = 0; i < 5; i++) {
     // 等待 Promise<number>转换为数字
    const count: number = await delay(500, i)
    console.log(count)
  }

  console.log('World')
}
dramaticWelcome()
