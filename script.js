
// function countdown(n,callback){
//     if(n===0){
//         callback();
//     }
//     else{
//         document.getElementById("countdown").innerHTML =n;
//         setTimeout(function(){
//             countdown(n-1, callback);
//         },1000);
//     }

// }
// countdown(10,function(){
//     document.getElementById("countdown").innerHTML="Restart";
// })

function countdown(n,callback){
    if(n===0){
        callback();
    }
    else{
        document.getElementById("countdown").innerHTML=n;
    setTimeout(function(){
        countdown(n-1,callback);
    },1000);
    }
}

countdown(10,function(){
    document.getElementById("countdown").innerHTML="Restart";
})