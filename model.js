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
            answer1: '',
            answer2: '',
            answer3: '',
            customIsChecked: false,
        },

        /*
        
                    id: 1,
            title: '',
            url: '',
            activePoll: true,
            question: [
                {
                    qText: 'test',
                    customIsChecked: false,
                    aText: ['ja','nei','aner ikke'],
                }
            ]
        
        */

        newPoll: {
            title: '',
            activePoll: true,
            questions: [],

            newQuestion: {
                text: '',
                isChecked: false,
                answers: []
            }
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
            title: '1 poll',
            url: '',
            activePoll: true,
            question: [
                {
                    qText: 'test',
                    // customIsChecked: false,
                    aText: ['ja','nei','aner ikke'],
                }
            ]
        },
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

    tempValues:{
        currentPollNumber:0
    },

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