function updateCreatePoll(){
    document.getElementById('app').innerHTML=`
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
    ${writePoll()}
    `;
}

function writePoll(){
    let html='';
    for (let index = 0; index < model.poll.length; index++) {
        
        for (let i = 0; i < model.poll[index].question.length; i++) {
            html+=`
            <h3>${model.poll[index].question[i].qText}</h3>
            `;
            for (let j = 0; j < model.poll[index].question[i].aText.length; j++) {
                html+=`
                <div>${model.poll[index].question[i].aText[j]}</div>
                `;
            }
        }
    }
    return html;
}

// function updateView(){
//     let view = document.getElementById('app');
//     if(model.app.screen==='createPoll'){
//         view.innerHTML=updateCreatePoll();
//     }
//     else if(model.app.screen==='test'){
//         view.innerHTML=updateTest();
//     }
// }