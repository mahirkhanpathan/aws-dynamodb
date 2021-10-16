const AWS = require("aws-sdk");
const { compact } = require("underscore");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();
let tn=[];
const tableName="td_notes_tes";

dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        tn=data.TableNames;
        console.log(data);
    }
});

if(tn.includes(tableName)){
docClient.query({
    TableName: tableName,
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
        ":uid": "A"
    }
}, (err, data)=>{
    if(err) {
        //console.log(err);
        console.log("item not found");
    } else {
        console.log(data);
    }
});
}
else{
    console.log("table not found");
}
