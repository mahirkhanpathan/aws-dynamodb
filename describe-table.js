const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

dynamodb.describeTable({
    TableName: "td_notes_sdk"
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("table:td_notes_sdk:\n"+JSON.stringify(data, null, 2));
    }
});

dynamodb.describeTable({
    TableName: "td_notes_test"
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("table:td_notes_test:\n"+JSON.stringify(data, null, 2));
    }
});
