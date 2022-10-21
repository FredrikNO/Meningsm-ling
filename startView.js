function updateStartView() {
    document.getElementById('app').innerHTML = `
    <button>Start New Poll</button> 
    <hr>
    <div class="ongoing">
    <h3>Ongoing polls</h3>
    <ul>
    ${listOngoingPoll()}
    </ul>
    </div>
    `
}

function listOngoingPoll(){
    let html='';
    for (let index = 0; index < model.poll.length; index++) {
        html+=`${model.poll[index].title}`
        
    }

    return html;
}
