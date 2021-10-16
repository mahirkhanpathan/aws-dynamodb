const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


dynamodb.deleteTable({
    TableName: "td_notes_sdk"
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});

dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
