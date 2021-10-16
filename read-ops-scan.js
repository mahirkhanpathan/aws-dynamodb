const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.scan({
    TableName: 'td_notes_test',
    FilterExpression: "user_ = :cat",
    ExpressionAttributeValues: {
        ":cat": "general"
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});