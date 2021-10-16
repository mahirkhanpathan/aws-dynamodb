const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });



async function  update(){
    
const docClient = new AWS.DynamoDB.DocumentClient();


const up={
    TableName:'td_notes_sdk',
    user_id:'bb',
    timestamp:1,
    KeyConditionExpression: "user_id = :uid",
    UpdateExpression: 'set #t = :t',
    '#t': 'title',
    ':t': "vs code title1",
}
let present=0;

await docClient.query({
    TableName: up.TableName,
    KeyConditionExpression:up.KeyConditionExpression,
    ExpressionAttributeValues: {
        ":uid": up.user_id
    }
}, (err, data)=>{
    if(err) {
        //console.log(err);
        console.log("item not found");
    } else {
        present=1;
        console.log(data);
    }
}).promise();
if(present>0){

await docClient.update({
    TableName: up.TableName,
    Key: {
        user_id: up.user_id,
        timestamp: up.timestamp
    },
    UpdateExpression: up.UpdateExpression,
    ExpressionAttributeNames: {
        '#t': up["#t"]
    },
    ExpressionAttributeValues: {
        ':t': up[":t"]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("item has been updated");
        console.log(data);
    }
}).promise();

}


}
update();