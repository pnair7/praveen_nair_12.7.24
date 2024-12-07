const jsPsych = initJsPsych();

var timeline = [];

var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <p>In the following experiment, you will be asked to identify whether certain
    images are positive or negative. Please select the button denoting your response.</p>
    <p>Press any key to continue.</p> <p>(Note: all images are CC0 public domain.)</p>`
};

timeline.push(welcome) // appends trial object to array

// trial 1: cat
var trial1 = {
    type: jsPsychHtmlButtonResponse,
    prompt: "Select the button that matches your response.",
    stimulus: `
    <img src="img/cat.png" height=600, alt="cat!"></img>
    <p>Do you find this image positive or negative?</p>
    `,
    choices: ['Positive', 'Negative']
};      
timeline.push(trial1)

// trial 2: hat
var trial2 = {
    type: jsPsychHtmlButtonResponse,
    prompt: "Select the button that matches your response.",
    stimulus: `
    <img src="img/hat.png" height=600, alt="hat!"></img>
    <p>Do you find this image positive or negative?</p>
    `,
    choices: ['Positive', 'Negative']
};      
timeline.push(trial2)

// trial 3: bat
var trial3 = {
    type: jsPsychHtmlButtonResponse,
    prompt: "Select the button that matches your response.",
    stimulus: `
    <img src="img/bat.png" width=650, alt="bat!"></img>
    <p>Do you find this image positive or negative?</p>
    `,
    choices: ['Positive', 'Negative']
};      
timeline.push(trial3)

// trial 4: mat
var trial4 = {
    type: jsPsychHtmlButtonResponse,
    prompt: "Select the button that matches your response.",
    stimulus: `
    <img src="img/mat.png" width=650, alt="mat!"></img>
    <p>Do you find this image positive or negative?</p>
    `,
    choices: ['Positive', 'Negative']
};      
timeline.push(trial4)

// trial 5: rat
var trial5 = {
    type: jsPsychHtmlButtonResponse,
    prompt: "Select the button that matches your response.",
    stimulus: `
    <img src="img/rat.png" width=650, alt="rat!"></img>
    <p>Do you find this image positive or negative?</p>
    `,
    choices: ['Positive', 'Negative']
};      
timeline.push(trial5)

// end screen
var endscreen = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var trials = jsPsych.data.get().filter({trial_type: "html-button-response"})
        var positive_trials = trials.filter({response : 0})
        var pct_positive = Math.round(100 * positive_trials.count() / trials.count())

        return `
            <p>You responded positively <b>${pct_positive}%</b> of the time.</p>
            <p>Press any key to complete the experiment. Thank you for your responses!</p>
        `
    }
}; 
timeline.push(endscreen)

jsPsych.run(timeline)