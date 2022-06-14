let main = []
let leng = 100000
let obstacles = []

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
        }) && obstacles.every((val)=>{
            return val[0] !== i[0] || val[1] !== i[1]
        })) {
            vist_copy = [...vist]
            vist_copy.push(i)
            minDist(i,d,vist_copy)
        }
    }) 
}

function bestRoute(source,destination) {
    minDist(source,destination,[source])

    let returnable = []
    const mappings = {
        "rd":"r",
        "ru":"l",
        "rr":"s",
        "ld":"l",
        "ll":"s",
        "lu":"r",
        "ur":"r",
        "ul":"l",
        "uu":"s"
    }

    let curr_ori = "u"
    let curr_pos = source
    let required_ori = "u"

    for (i=1;i<main.length;i++) {
        if (curr_pos[0] === main[i][0]) {
            if (curr_pos[1]<main[i][1]) {
                required_ori = "r"
            } else {
                required_ori = "l"
            }
        } else {
            if (curr_pos[0] < main[i][0]) {
                required_ori = "u"
            } else {
                required_ori = "d"
            }
        }

        returnable.push(mappings[curr_ori+required_ori])
        curr_ori = required_ori
        curr_pos = main[i]
    }
    
    return returnable
}

module.exports = {bestRoute,obstacles}