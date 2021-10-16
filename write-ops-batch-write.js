const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();


docClient.batchWrite({
    RequestItems: {
        'td_notes_test': [
            // {
            //     DeleteRequest: {
            //         Key: {
            //             user_id: 'bb',
            //             timestamp: 2
            //         }
            //     }
            // },
            {
                PutRequest: {
                    Item: {
                        user_id: 'A',
                        timestamp: 1,
                        title: 'Title A1',
                        content: 'Content A1'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'B',
                        timestamp: 2,
                        title: 'Title B1',
                        content: 'Content B1'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '11',
                        timestamp: 1,
                        title: 'Title 11',
                        content: 'Content 11'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '22',
                        timestamp: 2,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }
            }
        ]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

docClient.batchWrite({
    RequestItems: {
        'td_notes_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 2
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '11',
                        timestamp: 1,
                        title: 'Title 11',
                        content: 'Content 11'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '22',
                        timestamp: 2,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }
            }
        ]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

docClient.batchGet({
    RequestItems: {
        'td_notes_test': {
          Keys: [
            {
               user_id: 'A',
               timestamp: 1
            },
            {
                user_id: 'B',
                timestamp: 2
            }
          ]
        },
        'td_notes_sdk': {
          Keys: [
            { 
                user_id: '11',
                timestamp: 1
            }
          ]
        }
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
