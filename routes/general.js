const express = require("express");
const router = express.Router();
const Trip = require("../models/trip")
const {bestRoute,obstacles} = require("../functions/bestRoute")

router.get("/nextDestination",(req,res)=>{
    Trip.findOneAndRemove()
    .then((result)=>res.send(result))
    .catch((err)=>console.log(err))
})

router.post("/findRoute",(req,res)=>{
    const source = req.body.source
    const destination = req.body.destination

    const route = bestRoute(source,destination)

    res.send({"route":route})
})

router.post("/reRoute",(req,res)=>{
    const obstacle = req.body.obstacle
    const source = req.body.source
    const destination = req.body.destination

    obstacles.push(obstacle)

    const route = bestRoute(source,destination)

    res.send({"route":route})
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