// Write a delay function which waits for a duration before executing - Interview Problem
const delay = (duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('success');
        }, duration);
    })
}

const displayConsole = async () => {
    console.log('Runs with a delay...1')
    await delay(2000);
    console.log('Runs with a delay...2')
}

displayConsole();
