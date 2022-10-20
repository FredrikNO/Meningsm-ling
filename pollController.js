// function addToPoll(){
//     let titleInput = model.inputs.createPoll.title;
//     let qInput = model.inputs.createPoll.question;
//     let answerInput = model.inputs.createPoll.answer;

//     if(titleInput ===''|| qInput ===''||
//     answerInput ==='') return console.log('fyll ut info');
//     model.poll[0].title = titleInput;
//     model.poll[0].url ='test.url.no';
//     model.poll[0].question
// }

// function addQuestion(){
//     const answerArray=[];
//     const questionObj={};
//     const poll={};
//     answerArray.push(model.inputs.createPoll.answer1,
//     model.inputs.createPoll.answer2, model.inputs.createPoll.answer3);
//     questionObj.qText=model.inputs.createPoll.question;
//     questionObj.aText=answerArray;
//     poll.title=model.inputs.createPoll.title;
//     poll.question=[];
//     poll.question.push(questionObj);
//     model.poll.push(poll);
//     updateCreatePoll();
// }

function newQuestionAndAnswer(){
    const answerArray=[];
    const questionObj={};
    answerArray.push(model.inputs.createPoll.answer1,
        model.inputs.createPoll.answer2, model.inputs.createPoll.answer3);
    questionObj.qText=model.inputs.createPoll.question;
    questionObj.aText=answerArray;
    model.poll[2].question.push(questionObj);
    updateCreatePoll();
}

function createPoll(){
    const newPoll={};
    newPoll.id= 2;
    newPoll.title=model.inputs.createPoll.title;
    newPoll.question=[];
    model.poll.push(newPoll);
}