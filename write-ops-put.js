const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();
let talbes_name=[];
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        talbes_name=data.TableNames;
        console.log(data);
if()

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        user_id: 'mahir',
        timestamp: 3,
        title: 'this changed title',
        content: 'this changed content'
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

