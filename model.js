const model = {
    //tilstand app
    app: {
        screen: 'createPoll',
        //createPoll, chooseDate, getLink, results, answerPoll
    },

    //inputfelt til sider
    inputs: {
        createPoll: {
            title: '',
            question: '',
            answer: '',
            customIsChecked: false,
        },

        chooseDate: {
            startDate: null,
            endDate: null,
            perpetualChecked: false,
        },

        answerPoll: {
            answerChosen: false,
            textInput: '',
        }
    },

        //data

    poll: [
        {
            id: 1,
            title: '',
            url: '',
            activePoll: true,
            question: [
                {
                    qText: '',
                    customIsChecked: false,
                    aText: ['', '', '',],
                }
            ]
        }
    ],

    pollData: [
        {
            id: 1, //poll ID
            startDate: null,
            endDate: null,
            perpetualChecked: false,
            userData:[
                {
                    howMany:[2,3,4],
                }
            ]
        }
    ],

    userAnswers: [
        {
            id: 1,  //pollID
            user: [
                {
                    userNr: 1,
                    answers: [
                        {
                            answerSelected: 'answer1',
                            userMadeAnswer:'',
                        }
                    ]
                }
            ]
        }
    ]
}