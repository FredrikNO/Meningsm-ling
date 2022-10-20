function updateTest(){
    let html='';
    for (let i = 0; i < model.poll[0].question.length; i++) {
        html+=`
        <h3>${model.poll[0].question[i].qText}</h3>
        `;
        for (let j = 0; j < model.poll[0].question[i].aText.length; j++) {
            html+=`
            <div>${model.poll[0].question[i].aText[j]}</div>
            `;
            
        }
    }
    return html;
}