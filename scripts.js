let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
    console.log('Finished training...');
};

function execute(input) {
    let results = trainedNet(encode(input));
    let output;
    results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
    return output;
}

train(trainingData);

var twee;
const form = document.querySelector('form')
form.addEventListener('submit', event => {
    // submit event detected

    event.preventDefault();
    console.log('submit');

    twee = document.querySelector('#exampleInputEmail1').value;


    resu = execute(twee);

    r = document.querySelector('#resu');

    r.innerHTML = resu;

})