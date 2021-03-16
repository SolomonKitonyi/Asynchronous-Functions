console.log("Before ");
getUser(1,function user(user){
console.log("user",user)
});
console.log("After");
function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading files from data base ");
        callback({id:id,GitHubUserName:'Solomon'});
    },2000);
}
//async await
async function displayItems(){
    try{
    setTimeout(()=>{
        const arr = [1,2,4,5];
        console.log(arr)
    })
   }
   catch(error){
       console.log(error)
   }
};
displayItems();