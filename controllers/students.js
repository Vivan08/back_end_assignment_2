import fs from 'fs'
    

const getUsers = (req,res) => {
    let data = fs.readFileSync("./data/students.json","utf-8")

    data = JSON.parse(data)

    res.status(200).json({
        message : "data fetched successfully ...",
        success : "True",
        data : data
    })
}

const createUser = (req,res) => {

    let {name, age, id} = req.body

    if(!name || !age || !id){
        return res.status(404).json({
            message : "data has not found",
            success : "False"
        })
    }
    let data = fs.readFileSync("./data/students.json","utf-8")

    data = JSON.parse(data)

    data.push({name, age, id})

    fs.writeFileSync("./data/students.json", JSON.stringify(data, null, 3))

    res.status(200).json({
        message : "data created successfully ...",
        success : "True",
        data : data
    })
}

const updateUser = (req,res) => {

    console.log('update user called')

    const id = Number(req.params.id)
    
    let {name, age} = req.body 

    let data = fs.readFileSync("./data/students.json","utf-8")

    data = JSON.parse(data)

    let user = data.find((user) => user.id === id)

    if(name){
        user.name = name
    }
    if(age){
        user.age = age
    }

    fs.writeFileSync("./data/students.json", JSON.stringify(data, null, 3))

    res.status(200).json({
        message : "data updated successfully ...",
        success : "True",
        data : data
    })
}


const getuser = (req,res) => {

    console.log('get user called')
    const id = Number(req.params.id)
    let data = fs.readFileSync("./data/students.json","utf-8")
    data = JSON.parse(data)
    let user = data.find((user) => user.id === id)
    if (!user){
        return res.status(404).json({
            message : "data has not found",
            success : "False"
        })
    }
    res.status(200).json({
        message : "data fetched successfully ...",
        success : "True",
        data : user
    })
}


const deleteUser = (req,res) => {
    const id = Number(req.params.id)
    let data = fs.readFileSync("./data/students.json","utf-8")
    data = JSON.parse(data)

    let userIndex = data.findIndex((user) => user.id === id)
    if (userIndex === -1) {
        return res.status(404).json({
            message : "data has not found",
            success : "False"
        })
    }
    data.splice(userIndex, 1)
    fs.writeFileSync("./data/students.json", JSON.stringify(data, null, 3))

    if (!userIndex) {
        return res.status(404).json({
            message : "data has not found",
            success : "False"
        })
    }

    res.status(200).json({
        message : "data deleted successfully ...",
        success : "True",
        data : data
    })
}

export {getUsers, createUser, updateUser, getuser, deleteUser}