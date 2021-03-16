const P1 = new Promise((resolve)=>{
    setTimeout(()=>{      
        console.log("A asynchrounous api 1.....");
        resolve(1)  
    },2000)
});
const P2 = new Promise(resolve=>{
    setTimeout(()=>{      
        console.log("A asynchrounous api 2.....");
        resolve(2)  
    },2000)
});
Promise.race([P1,P2])
  .then(result => console.log(result))
  .catch(err=>console.log('Error',err.message));