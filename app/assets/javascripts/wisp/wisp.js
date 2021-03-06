/******************************************
 *
 * GLOBALS and PRELOAD DATA
 *
 ******************************************/
var game = new Phaser.Game(800, 600, Phaser.AUTO, "wispDiv", { preload: preload, create: create, update: update });
var style = {font: "18px Georgia", fill: "#000000", align: "left" }; // font styles
var log = []; // main text log
var MAXLINES = 20; // the maximum number of lines to appear on the screen

// STATES
game.state.add('intro', introState)

function preload() {
    // Set the color of our UI
    game.stage.backgroundColor = 0xffffff;

    // Load the scenes in order
    game.load.text('introTxt', 'http://dwells.co/gdesign/intro');
}

var textStyle = { font: '12px Georgia', align: 'center'};
var timer;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var plotButton;
var plotButtonText;
var logBuffer;

function create() {
    // Start the timer
    timer = game.add.text(700, 32, '00:00', textStyle);
    timer.alpha = 0;
    fadeIn(timer);

    // Add the button for advancing plot
    plotButtonText = "fall";
    plotButton = game.add.text(32, 32, plotButtonText, {font: "24px Georgia", fill: "#000000", align: "center"} );
    plotButton.alpha = 0;
    intro();
    plotButton.inputEnabled = true;
    plotButton.events.onInputDown.add(plotDown, this);
    plotButton.events.onInputOver.add(plotOver, this);
    plotButton.events.onInputOut.add(plotOut, this);

    // Initially set up the log buffer
    var tLog = game.cache.getText('introTxt');
    logBuffer = tLog.split('\n');
    // Get rid of all the garbage html
    stripBuffer();
}

function update() {
    updateTimer();
    
    //Garbage collect the log
    if (log.length > MAXLINES) {
	for (var i = 0; i<log.length; i++) {
	    fadeOut(log[i], 1000);
	    if (log[i].alpha == 0)
		log[i].destroy();	    
	}
	log.splice(0,log.length);
    }

    if (logBuffer.length == 0) {
	game.state.start('intro');
    }
}


/*********************************************
 *
 * EVENT METHODS
 *
 *********************************************/

/*
 * Advances the plot on pushing the button
 */
function plotDown(item) {
    // Render whatever is next in the logBuffer, and remove it from the buffer
    addLine(logBuffer[0]);
    logBuffer.splice(0, 1);
    
}

/*
 * Tweens the button once on mouseover.
 */ 
function plotOver(item) {
    game.add.tween(plotButton).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);   
}

/*
 * Restore the button to a slight fade.
 */
function plotOut(item) {
    game.add.tween(plotButton).to( { alpha: 0.6 }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
}


/********************************************
 *
 * HELPERS
 *
 ********************************************/

/*
 * Strips down all of the garbage out of the logBuffer
 */ 
function stripBuffer() {
    while (logBuffer[0].indexOf("BEGIN") < 0) {
	logBuffer.splice(0,1);
    }
    logBuffer.splice(0,1);
    logBuffer.splice(-4, 4);
}

/*
 * Fade text in given the text and time in ms to fade over
 */ 
function fadeIn(text, time) {
    game.add.tween(text).to( { alpha: 1 }, time, Phaser.Easing.Linear.None, true, 0, 0, false);
}

function fadeOut(text, time) {
    game.add.tween(text).to( { alpha: 0 }, time, Phaser.Easing.Linear.None, true, 0, 0, false);
}

/*
 * Simply adds a line to the log. 
 */ 
function addLine(line) {
    var l = game.add.text(32, (log.length % MAXLINES) * 20 + 96, line, style);   
    l.alpha = 0;
    fadeIn(l, 1000);
    log.push(l);    
}

function updateTimer() {

    minutes = Math.floor(game.time.time / 60000) % 60;
    
    seconds = Math.floor(game.time.time / 1000) % 60;
    
    milliseconds = Math.floor(game.time.time) % 100;
    
    //If any of the digits becomes a single digit number, pad it with a zero
    if (milliseconds < 10)
	milliseconds = '0' + milliseconds;
    
    if (seconds < 10)
	seconds = '0' + seconds;
    
    if (minutes < 10)
	minutes = '0' + minutes;
    
    timer.setText(minutes + ':'+ seconds);
    
}

/*****************************************************************************
 *
 * BELOW HERE ARE PLOT EVENTS
 *
 * MAJOR SPOILER ALERT
 * 
 * DO NOT READ IF YOU DON'T WANT TO SPOIL THE GAME
 *
 ******************************************************************************/


function intro() {   
    var l = game.add.text(32, (log.length % MAXLINES) * 20 + 96, "You're falling fast.", style);
    l.alpha = 0;
    game.add.tween(l).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 1000, -1, true);
    log.push(l);
    game.add.tween(plotButton).to( { alpha: 0.6 }, 3000, Phaser.Easing.Linear.None, true, 0, 0, false);
}
