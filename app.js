const express = require("express")
require("./connection")
const port = process.env.PORT || 3000
const app = express()
var login = ""
var login1 = ""
const student = require("./schema")
const proctor = require("./schema1")
const record = require("./schema2")
app.use(express.static("static"))
app.use(express.urlencoded())
app.set("view engine","hbs")
app.set("views",(__dirname,"./public"))

app.get("",(req,res) => {
    res.render("login",{})
})

app.get("/signup",(req,res) => {
    res.render("signup",{})
})

app.post("/student",async(req,res) => {
    const stud = await new student(req.body)
    stud.save().then(() => {
        res.render("login",{})
    }).catch(() => {
        res.render("404",{
            "error":"User Already Exist or You have Not fill all the details",
            "back":"/signup"
        })
    })
})

app.post("/proctor",async(req,res) => {
    const proc = await new proctor(req.body)
    proc.save().then(() => {
        res.render("login",{})
    }).catch(() => {
        res.render("404",{
            "error":"User Already Exist or You have Not fill all the details",
            "back":"/signup"
        })
    })
})

app.get("/getd",async(req,res) => {
    const stud = await student.find({"name":req.query.name,"usn":req.query.usn})
    const proc = await proctor.find({"name":req.query.name,"id":req.query.usn})
    if(JSON.stringify(stud) != "[]" && JSON.stringify(proc) == "[]")
    {
          login = req.query.name
          res.render("main",{
              "name":login,
              "usn":stud[0].usn,
              "Prof":"Academic Record",
              "but":"rec",
              "edit":"Student"
          })
    }
    else if(JSON.stringify(proc) != "[]" && JSON.stringify(stud) == "[]")
    {
        login1 = req.query.name
        res.render("main",{
            "name":login1,
            "usn":proc[0].id,
            "Prof":"Proctees",
            "but":"pro",
            "edit":"Proctor"
        })
    }
    else
    {
        res.render("404",{
            "error":"User Not Found",
            "back":"/"
        })
    }
})

app.get("/rec",async(req,res) => {
    const stud = await student.find({"name":login})
    res.render("record",{
        "name":login,
        "stu":login,
        "usn":stud[0].usn,
        "status":"Academic"
    })
})

app.get("/rec1",async(req,res) => {
    const proc = await proctor.find({"name":login1})
    res.render("record",{
        "name":login1,
        "stu":req.query.name,
        "usn":proc[0].id,
        "status":"Proctee"
    })
})

app.get("/pro",async(req,res) => {
    const proc = await proctor.find({"name":login1})
    res.render("personalrec",{
        "name":login1,
        "usn":proc[0].id
    })
})

app.get("/prolist",async(req,res) => {
    const procstu = await student.find({"pname":login1})
    res.send({
        "procstu":procstu
    })
})

app.get("/proctrec",async(req,res) => {
    const proc = await proctor.find({"name":login1})
    res.render("record",{
        "name":login1,
        "stu":req.query.name,
        "usn":proc[0].id,
        "status":"Proctee"
    })
})

app.get("/recform",async(req,res) => {
 const stud = await student.find({"name":login})
 res.render("recform",{
     "usn":stud[0].usn,
     "year":req.query.year
 })
})

app.post("/reco",async(req,res) => {
    const stud = await student.find({"name":login})
    const rec = await new record(req.body)
    rec.save().then(() => {
        res.render("subrecord",{
        "name":login,
        "stat":"Student",
        "usn":stud[0].usn,
        "year":req.body.year
        })
    }).catch(() => {
        res.render("404",{
            "error":"Please fill all the details",
            "back":"/recform"
        })
    })
})

app.get("/fetchyear",async(req,res) => {
    const stud = await student.find({"name":login})
    res.send({
        "year":stud[0].year
    })
})

app.get("/fetchyearproc",async(req,res) => {
    const stud = await student.find({"name":req.query.name})
    res.send({
        "year":stud[0].year
    })
})

app.get("/sub",async(req,res) => {
    const stud = await student.find({"name":login})
    res.render("subrecord",{
         name:login,
         name1:login,
         "stat":"Student",
         "usn":stud[0].usn,
         "year":req.query.year.toString()
    })
})

app.get("/subproc",async(req,res) => {
    const stud = await student.find({"name":req.query.name})
    const proc = await proctor.find({"name":login1})
    res.render("subrecord",{
          name:login1,
          name1:req.query.name,
         "stat":"Proctee",
         "usn":proc[0].id,
         "year":req.query.year.toString()
    })
})

app.get("/fetchrec",async(req,res) => {
    const stud = await student.find({"name":login})
    const rec = await record.find({"usn":stud[0].usn,"year":req.query.year})
    res.send({
        "recs":rec
    })
})

app.get("/fetchrecproc",async(req,res) => {
    const stud = await student.find({"name":req.query.name})
    const rec = await record.find({"usn":stud[0].usn,"year":req.query.year})
    res.send({
        "recs":rec
    })
})

app.get("/profile",async(req,res) => {
    const stud = await student.find({"name":login})
    const proc = await proctor.find({"name":login1})
    if(login!="")
    {
    res.render("profile",{
        "name":login,
        "usn":stud[0].usn,
        "status":"Student"
    })
    }
    else if(login1!="")
    {
        res.render("profile",{
            "name":login1,
            "usn":proc[0].id,
            "status":"Proctor"
        })
    }
})

app.get("/prof",async(req,res) => {
    const stud = await student.find({"name":login})
    const proc = await proctor.find({"name":login1})
    if(JSON.stringify(stud) != "[]")
    {
          res.send({
              "name":stud[0].name,
              "usn":stud[0].usn,
              "dob":stud[0].dob,
              "pname":stud[0].pname,
              "email":stud[0].email,
              "phone":stud[0].phone,
              "fname":stud[0].fname,
              "foccu":stud[0].foccu,
              "femail":stud[0].femail,
              "fphone":stud[0].fphone,
              "mname":stud[0].mname,
              "moccu":stud[0].moccu,
              "memail":stud[0].memail,
              "mphone":stud[0].mphone,
            })
    }
    else if(JSON.stringify(proc) != "[]")
    {
        res.send({
            "name":proc[0].name,
            "id":proc[0].id,
            "dob":proc[0].dob,
            "email":proc[0].email,
            "phone":proc[0].phone
        })
    }
})

app.get("/dash",async(req,res) => {
    const stud = await student.find({"name":login})
    const proc = await proctor.find({"name":login})
    if(JSON.stringify(stud) != "[]" && JSON.stringify(proc) == "[]")
    {
          res.render("main",{
              "name":login,
              "usn":stud[0].usn,
              "Prof":"Academic Record"
          })
    }
    else if(JSON.stringify(proc) != "[]" && JSON.stringify(stud) == "[]")
    {
        res.render("main",{
            "name":login1,
            "usn":proc[0].id,
            "Prof":"Proctees"
        })
    }
})

app.post("/personal",async(req,res) => {
    const stud = await student.find({"name":login})
    if(JSON.stringify(stud) != "[]")
    {
          const stud1 = await student.update({"name":login},{$set:{"name":req.body.name,"usn":req.body.usn,"dob":req.body.dob,"pname":req.body.pname,"email":req.body.email,"phone":req.body.phone}})
          res.render("main",{
            "name":login,
            "usn":stud[0].usn,
            "Prof":"Academic Record",
            "but":"rec",
            "edit":"Student"
      })
    }
})

app.post("/personalproc",async(req,res) => {
    const stud = await proctor.find({"name":login1})
    if(JSON.stringify(stud) != "[]")
    {
          const stud1 = await proctor.update({"name":login1},{$set:{"name":req.body.name,"id":req.body.id,"dob":req.body.dob,"email":req.body.email,"phone":req.body.phone}})
          res.render("main",{
            "name":login1,
            "usn":stud[0].id,
            "Prof":"Proctees",
            "but":"pro",
            "edit":"Proctor"
      })
    }
})

app.post("/father",async(req,res) => {
    const stud = await student.find({"name":login})
    if(JSON.stringify(stud) != "[]")
    {
          const stud1 = await student.update({"name":login},{$set:{"fname":req.body.fname,"foccu":req.body.foccu,"fphone":req.body.fphone,"femail":req.body.femail}})
          
         res.render("main",{
            "name":login,
            "usn":stud[0].usn,
            "Prof":"Academic Record",
            "but":"rec",
            "edit":"Student"
          })
        
    }
})

app.post("/mother",async(req,res) => {
    const stud = await student.find({"name":login})
    if(JSON.stringify(stud) != "[]")
    {
          const stud1 = await student.update({"name":login},{$set:{"mname":req.body.mname,"moccu":req.body.moccu,"mphone":req.body.mphone,"memail":req.body.memail}})
          res.render("main",{
            "name":login,
            "usn":stud[0].usn,
            "Prof":"Academic Record",
            "but":"rec",
            "edit":"Student"
        })
    }
})

app.get("/logout",(req,res) => {
    login=""
    login1=""
    res.render("login",{})
})

app.listen(port,() => {
    console.log("Server is running on Port " + port)
})

