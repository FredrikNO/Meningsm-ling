function updateCreatePoll() {
    document.getElementById('app').innerHTML = `
    <div class="title">
    <input type="text" placeholder="Title of poll" oninput="model.inputs.createPoll.title=this.value">
    </div>
    <div >
    <input class="questionInput" type="text" placeholder="Question 1" oninput="model.inputs.createPoll.question=this.value">
    </div>
    <div class="answerInput">
    <input type="text" placeholder="answer 1" oninput="model.inputs.createPoll.answer1=this.value"><br>
    <input type="text" placeholder="answer 2" oninput="model.inputs.createPoll.answer2=this.value"><br>
    <input type="text" placeholder="answer 3" oninput="model.inputs.createPoll.answer3=this.value"><br>
    </div>
    <button class="addQ" onclick="newQuestionAndAnswer()">Add question</button>
    <button class="submit" onclick="createPoll()">Submit</button>
    ${writePoll2()}
    `;
}

function writePoll() {
    let html = '';
    for (let index = 0; index < model.poll.length; index++) {

        for (let i = 0; i < model.poll[index].question.length; i++) {
            html += `
            <h3>${model.poll[index].question[i].qText}</h3>
            `;
            for (let j = 0; j < model.poll[index].question[i].aText.length; j++) {
                html += `
                <div>${model.poll[index].question[i].aText[j]}</div>
                `;
            }
        }
    }
    return html;
}


function writePoll1() {
    let html = '';
    html += `<h1>${model.poll[model.tempValues.currentPollNumber].title}</h1>`;
    for (let i = 0; i < model.poll[model.tempValues.currentPollNumber].question.length; i++) {
        html += `
            <h3>${model.poll[model.tempValues.currentPollNumber].question[i].qText}</h3>
            `;
        for (let j = 0; j < model.poll[model.tempValues.currentPollNumber].question[i].aText.length; j++) {
            html += `
                <div>${model.poll[model.tempValues.currentPollNumber].question[i].aText[j]}</div>
                `;
        }
    }
    return html;
}
function writePoll2() {
    let html = '';
    html += `<h1>${model.poll[model.tempValues.currentPollNumber].title}</h1>`;
    model.poll[model.tempValues.currentPollNumber].question.forEach((questions, index) => {
        html += `<h3>${questions.qText}</h3>`;
        model.poll[model.tempValues.currentPollNumber].question[index].aText.forEach(answers => {
            html += `<div>${answers}</div>`;
        })
    })
    return html;
}