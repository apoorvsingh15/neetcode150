// Write a delay function which waits for a duration before executing - Interview Problem
const delay = (duration) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('success');
        }, duration);
    })
}

const displayConsole = async () => {
    console.log('Runs without a delay...');
    try {
        await delay(2000);
        console.log('Runs with a delay...');
    } catch (err) {
        console.log(err);
    }
}

displayConsole();
