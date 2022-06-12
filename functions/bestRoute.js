let main = []
let leng = 100000

function minDist(s,d,vist) {
    if (s[0] === d[0] && s[1] === d[1]) {
        if (vist.length < leng) {
            main = [...vist]
            leng = vist.length
        }
        return
    }

    let arr = []
    if (s[0] !== 0)
        arr.push([s[0]-1,s[1]])
    if (s[0] !== 4)
        arr.push([s[0]+1,s[1]])
    if (s[1] !== 0)
        arr.push([s[0],s[1]-1])
    if (s[1] !== 4)
        arr.push([s[0],s[1]+1])

    arr.forEach((i)=>{
        if (vist.every((val)=>{
            return val[0] !== i[0] || val[1] !== i[1]
        })) {
            vist_copy = [...vist]
            vist_copy.push(i)
            minDist(i,d,vist_copy)
        }
    }) 
}

function bestRoute(source,destination) {
    minDist(source,destination,[])
    
    return main.map((val)=>val.toString())
}

module.exports = bestRoute