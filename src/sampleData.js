const boards = [
    {
        id: 1000,
        title: 'Course Ideas',
        background: '#ffad33',
    },
    {
        id: 2000,
        title: 'House Ideas',
        background: '#80ccff',
    },
    {
        id: 3000,
        title: 'Apps Ideas',
        background: '#bfff80',
    }
]

const lists = [
    {
        id: 100,
        title: 'House Zakupy',
        board: 2000,
        cards : [
            {
                id: 1,
                text: 'Buy Carpet'
            },
            {
                id: 2,
                text: 'Buy office Locker'
            },
            {
                id: 3,
                text: 'Buy plates'
            } 
        ]
    }, 
    {
        id: 200,
        title: 'House TO-DO',
        board: 2000,
        cards : [
            {
                id: 1,
                text: 'Finish Garden'
            },
            {
                id: 2,
                text: 'Cleanup Kitchen'
            },
            {
                id: 3,
                text: 'Paint hall wall'
            } 
        ]
    },
    {
        id: 300,
        title: 'House Bills',
        board: 2000,
        cards : [
            {
                id: 1,
                text: 'Pay gas'
            },
            {
                id: 2,
                text: 'Pay Cleaning'
            },
            {
                id: 3,
                text: 'Pay rental'
            } 
        ]
    }
]

const data = {
    boards, 
    lists
}

export default data
