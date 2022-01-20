function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says Hi')
         } else {
             reject('We can only talk to Google')
         };
    });
};
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    });
};
async function Run() {
    try {
        const response = await makeRequest('Google') 
        //can change this string to something else and it'll throw error with message 'We can only talk to Google'
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    };
};
Run()