const kafka = require('kafka-node');

const client= new kafka.KafkaClient();

//create topic
// let topicsToCreate = [{
//     topic: 'topic1',
//     partitions: 1,
//     replicationFactor: 1
//   }
// ];
// client.createTopics(topicsToCreate, (err, result) => {
//     if(err){
//         console.log("error",{ err });
//     }
//     else{
//         console.log("result",{ result });
//     }
// });


//create producer
// const Producer = kafka.Producer;
// const producer = new Producer(client);

// const payloads = [
//     {topic:'t',message:'hi'}
// ];
// producer.on('ready',()=>{
//     producer.send(payloads,(err,data)=>{
//         console.log("data:", data);
//     });
// });
// producer.on('error',(err)=>{
//     console.log("error",{ err });
// });

//Create HighLevelProducer
// const HighLevelProducer = kafka.HighLevelProducer;
// const highLevelProducer = new HighLevelProducer(client);

// const payloads1 = [
//     { topic: 'topic1', messages: ['hi',"i","am","parth"] }
// ];
// highLevelProducer.on('ready',()=>{
//     highLevelProducer.send(payloads1,(err,result)=>{
//         if(err){
//             console.log("error",{ err });
//         }
//         else{
//             console.log("result",result);
//         }
//     });
// });
// highLevelProducer.on('error',(err)=>{
//     console.log("error",err);
// });

//create consumer
// const Consumer = kafka.Consumer;
// const consumer=new Consumer(
//     client,
//     [
//         {topic:'topic1',partition:0}
//     ],
//     {
//         autoCommit:false
//     }
// );
// consumer.on('message',(msg)=>{
//     console.log(msg);
// });

//close consumer
// consumer.close((r)=>{
//     console.log("consumer close",r);
// });

// const offset = new kafka.Offset(client);
// offset.fetch([
//     {topic:'topic1',partition:0,time:Date.now(),maxNum:1}
// ],(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log("result",result);
//     }
// });

// offset.fetchCommits('',[
//     {topic:'topic1',partition:0}
// ],(err,result)=>{
//     console.log(result);
// });