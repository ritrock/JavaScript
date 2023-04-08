//POST


postData={
    "userId":101,
    "id":101,
    "title":'Rock@123.com',
    "body":'Awesome!!!!'
}
const getdata=async()=>{

    data=await fetch("https://httpbin.org/post",{
        method:"POST",
        headers:{
            "Context-Type":"application/json"
        },
        body:JSON.stringify(postData)

    })
   responsedata = await data.json()
    console.log(responsedata)
}

console.log("The data before call getdata")
console.log("----------------------------------")
getdata();
console.log("----------------------------------")
console.log("The data after call getdata")
console.log("----------------------------------")



//POST

