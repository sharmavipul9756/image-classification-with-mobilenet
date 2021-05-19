let mobilenet;

let puffin;

function modelReady() {
    console.log("model is ready");
}

function imageready() {
    image(puffin, 0, 0, width, height)
    mobilenet.predict(puffin,gotResults)
}

function gotResults(err, results) {
    if(err) {
        console.error(err);
    }
    else {
        console.log(results);
        let label = results[0].label;
        fill(0);
        textSize(64);
        // color(0);
        text(label, 10, height, 100);
        createP(label)
    }
}

function setup() {
    createCanvas(640, 480);
    background(0);
    puffin = createImg('images/modi.jpg',imageready)
    puffin.hide()
    mobilenet = ml5.imageClassifier('MobileNet',modelReady);
}

