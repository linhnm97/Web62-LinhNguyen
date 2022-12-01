const { request } = require("express");
const express = require("express");

const router =express.Router();

const users = [
        {
            id: "1",
            username: "cr7",
            password: "cr7123",
            email: "cr7@mu.com",
        },
        {
            id: "2",
            username: "messi",
            password: "messi123",
            email: "messi@paris.com",
        },
        {
            id: "3",
            username: "admin",
            password: "admin123",
            email: "admin@gmail.com",
        },
];

router.get("/", (req, res) => {
    const usersExceptingPassword = users.map((user) => {
    const { password, ...restUser } = user;
      // delete user.password;
      return restUser;
    });
  
    res.json({
      data: usersExceptingPassword,
      msg: "Successfully",
    });
  });

  router.get("/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id === id);
  
    if(!user) {
      return res.json ({
        msg: "Contact is not exist",
        data: {},
    })
    }
  
    res.json ({
      data: user,
      msg: "Successful"
    });
  });
  
  
  router.post("/", (req, res) => {
    const {username, password, email} = req.body;
  
    if(!username || !password || !email) {
      return res.json ({
        msg: "Missing require keys",
        statusCode: 400,
      })
    }
  
    const isExist = users.findIndex((user) => user.email === email);
    if(isExist!== -1 ) {
      return res.json({
        msg: "Can not upload user",
        statusCode: 400,
      })
    }
  
    const newUser = {
      ...req.body,
      id: uuidv4(),
    }
    users.push(newUser);
  
    res.json({
      msg: "Add new user successfully",
      data: users,
    })
  });
  router.put("/:id", (req, res) => {
    const {id} = req.params;
  
    const isExist = users.findIndex((user) => user.id === id);
    if(isExist <0 ) {
      res.status(404).json({
        msg: "Not Found",
      })
    } else{
      const newUser = {...users[isExist], ...req.body};
      users.splice(isExist, 1, newUser);
  
      res.json({
        data: contacts, 
        msg: "Successfull"
      });
    }
  });
  router.delete("/:id", (req, res) => {
    const {id}  = req.params;
  
    const isExist = users.findIndex((user) => user.id === id);
    if(isExist <0 ) {
      res. status(404).json({
        msg: "Not Found",
      })
    } else {
      users.splice(isExist,1);
      res.json({
        data: users,
        msg: "Successful"
      });
    }
  });
  

  module.exports = router;
  