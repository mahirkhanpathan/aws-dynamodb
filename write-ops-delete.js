const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.delete({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'bb',
        timestamp: 2
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
