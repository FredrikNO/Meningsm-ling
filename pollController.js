// Define the `fs` at the beginning of the script
const fs = require('fs');

function newQuestionAndAnswer(){
    const answerArray=[];
    const questionObj={};
    answerArray.push(model.inputs.createPoll.answer1,
        model.inputs.createPoll.answer2, model.inputs.createPoll.answer3);
    questionObj.qText=model.inputs.createPoll.question;
    questionObj.aText=answerArray;
    model.poll[model.tempValues.currentPollNumber].question.push(questionObj);
    updateCreatePoll();
    
}

function createPoll(){
    model.tempValues.currentPollNumber++;
    const newPoll={};
    newPoll.id= model.tempValues.currentPollNumber;
    newPoll.title=model.inputs.createPoll.title;
    newPoll.question=[];
    model.poll.push(newPoll);
    const newestPoll = model.poll.push(newPoll);
    fs.writeFile ("data.json", JSON.stringify(newestPoll))
}