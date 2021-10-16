# About DynamoDB

## What is dynamoDB?
 .dynamodb is fully managed serverless nosql-DB(nosql allows you to work with big data) which can scale on demand </br>
 .dynamoDb useses json to interact with it but it actually stores data as a superset datatype supported by json</br>
 .used best for unstructured databases(flexible than sql DBs)</br>
 .we need to mention how many read and writes we need per second</br>
 
 ---

#-todo </br>
Q: what are unstructured DB and how is it diff from structured</br>
Q: expand on the datatypes and their examples for each different datatypes</br>
Q: what is primary key and what are their combinatons</br>
Q:why is it named partition key</br>
Q: within region ,avilability zone,</br>
Q:Amazon DynamoDB Accelerator (DAX)</br>
Q:when to use ordered list and unordered list</br>
Q:calcute the cost of dynamoDB
Q:what is the partition mean and their data sizes

---

 dynamodb basics we will learn in this</br>
 section:</br>
 1.terminology comparision with sql</br>
 2.Data Types</br>
 3.consistency Model</br>
 4.capacity units</br>
 5.DynamoDB partitions</br>
 6.DynamoDb indexes</br>

### 1.terminology
 4.1.</br>![](2021-10-15-23-04-48.png)</br>
 4.2. each item in the DyDB can be considered json document collection store and items as an json obj</br>
 4.3. in dynamodb we are having 2 primary attributes i.partition_key and ii.sort_key</br>
 4.3.1. in dyDB all tables should contain primary key unlike sqlDBs</br>

 ### 2.DATA TYPES
 4.4.1. dynamoDB data types ![](2021-10-15-23-29-57.png)</br>
 4.4.2. only sclar types can be used in DyDB as primary key</br>
 4.4.3. set type-un ordered collection of single type and no duplicates and no empty sets</br>
 ![](2021-10-15-23-40-13.png)</br>
 4.4.4.document-type are having list and maps
</br> ![](2021-10-15-23-42-44.png)
 </br>![](2021-10-15-23-43-20.png)

### 3.consistency
4.5.1.DyDb stores the data accross multiple avilability zones facilities
![](2021-10-15-23-51-14.png)
</br>4.5.2.DyDB can give the data consistently at 1 second called eventual consistency it is default
</br>4.5.3.if we need even sooner data then we go to strongly consistent it is costly but you get data as soon as recived

### 4.Capacity Unit
</br>4.7.1 about RCU(Read capacity unit) ![](2021-10-16-18-08-39.png)
</br>4.7.2.each RCU is worth 1 strong consistent or 2 eventual consistent and for reading of block ,each block is max 4kb.. so 1 rcu consumes 4kb for strong consistecy and 0.5 RCU for 4kb for eventual consistency
</br>4.7.3. WCU(write capacity unit) 1WCU=1 table write/s and is used in block of 1kb
</br>4.7.4. an exapmle for how the RCU and WCU are calculated irl:</br> ![](2021-10-16-18-38-59.png)
</br>4.7.8.if we are accessing more than our allocated scope RCU or WCU aws will use burst capacity to help us ease the throttle but if the burst capacity is being used for long time aws will let the function throttle so Burst capacity is only relied on sudden spikes 
</br> ![](2021-10-16-18-38-13.png)
</br>4.7.9. scaling capacity up and down
![](2021-10-16-18-42-23.png)
</br> 
16/11/2021 free tier :{25 provisioned Write Capacity Units (WCU)
25 provisioned Read Capacity Units (RCU)
Enough to handle up to 200M requests per month.}



### 5.DynamoDB Partitions
4.8.1.partition are the storage space allocated by dyDB toa table and a single table can have multiple partitions
</br>4.8.2.each partition is of size 10gb and 1 partition= 1000wcu or 3000rcu and new partition are added in background 
</br>![](2021-10-16-18-50-42.png)
</br>4.8.3.when a Partition is full then two new partitions are created and the existing partition is divided equally between them and old partition is deleted.  
</br> 4.8.4.partitions are tricky because once we have increased the no of partitions we can not decrease the number of partitions thus paying for all partitions only thing to do is to increase the throughput(overall capability to process data) and use the partitions or to delete the table and recreate it with limited partitions
![](2021-10-16-19-00-01.png)
</br>4.8.5 </br>

### 6. DynamoDB Index
</br>4.9.1. In dynamoDB there are two different index keys i)primary index(primary partition key && primary_sort_key? ) and ii)secondary index(local secondary index and global secondary index)
</br>4.9.2. all index keys have two sub divisions as 1.simple key = only partition key and 2.composite key= partition key and sort key 
</br>4.9.3. partition key is also called as hash key without it we can not querey the table but we can still scan the table but it is not good practise to scan the table because it is going to select every item in the table and check thus increasing the RCU astronomically

table: user_id use_name 


</br>local secondary index is a index which has same partition key as the primary index so only sort key changes,
</br>we can only have 5 local secondary index,
</br> we can create local secondary index only during the creation of the table.local secondary index works with both strong consistent and eventually consistent data

global secondary index unlike LSI we can have diff partition key but just like LSI we can have only 5 GSI but unlike LSI we can define it any time we want aster the creation of the table. GSI are placed in a seperate partition so they can also have different throughput , and unlike LSI it can only work with eventual consistent data and since it is having diff partition key from the table there can be duplicates in the GSI partition keys



</br>creation of the local index in the dynamo DB table:
![](2021-10-16-20-54-20.png)
</br>  the projected attributes decide along with the primary and sort attributes which attributes to be selected(with include we can select 20 attributes)
</br> we have to make sure that we are aware of all the requirements the table is going to have now and also in the future and plan accordingly
</br>if we dont provide local secondary or global secondary index then when we search the table based on them then the items without them will not showup 

