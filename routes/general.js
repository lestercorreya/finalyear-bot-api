const express = require("express");
const router = express.Router();
const Trip = require("../models/trip")
const bestRoute = require("../functions/bestRoute")

router.get("/nextDestination",(req,res)=>{
    Trip.findOneAndRemove()
    .then((result)=>res.send(result))
    .catch((err)=>console.log(err))
})

router.post("/findRoute",(req,res)=>{
    source = req.body.source
    destination = req.body.destination

    route = bestRoute(source,destination)

    res.send({"routes":route})
})

router.get("/n",(req,res)=> {
    res.send("ssssuppppp babeeeeee")
})

router.get("/g",(req,res)=> {
    res.send("sssupppp di patti")
})

// router.get("/",(req,res)=>{
//     const trip = new Trip({
//         destination:"warehouse 1",
//         routes:[
//             {
//                 S:3,
//                 L:false,
//                 R:false
//             },
//             {
//                 S:3,
//                 L:false,
//                 R:true
//             },
//             {
//                 S:3,
//                 L:true,
//                 R:false
//             },
//         ]
//     })

//     trip.save()
//         .then((result)=>res.send(result))
//         .catch((err)=>console.log(err))
// })

module.exports = router;