const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

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