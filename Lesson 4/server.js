const { request } = require("express");
const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 4000;


app.use(express.json());

const contacts = [
    {
      id: "1",
      name: "Jill Johnson",
      email: "jill@gmail.com",
      phone: "111-111-1111",
      type: "personal",
    },
    {
      id: "2",
      name: "Sara Watson",
      email: "sara@gmail.com",
      phone: "222-222-2222",
      type: "personal",
    },
    {
      id: "3",
      name: "Harry White",
      email: "harry@gmail.com",
      phone: "333-333-3333",
      type: "professional",
    },
  ];


  app.get("/contacts", (req, res) => {
    res.json({
        data: contacts,
        statusCode: 200,
    })
  });

  app.get("/contacts/:id",(req, res) => {
    const {id} = req.params;
    const contact = contacts.find((contact) => contact.id === id);

    if(!contact) {
        return res.json ({
            msg: "Contact is not exist",
            data: {},
        })
    }

    res.json ( {
        data: contact,
        msg: "Successful"
    });
  });

  app.post("/contacts", (req,res) => {
    const {name, phone, type, email} = req.body;

    if(!name || !phone || !type || !email) {
        return res.json({
            msg: "Missing required keys",
            statusCode: 400,
        })
    }

    const isExist = contacts.findIndex((contact) => contact.phone ===phone);
    if(isExist!== - 1) {
        return res.json ({
            msg: "Can not upload contact with this number",
            statusCode: 400,
        })
    }

    const newContact = {
        ...req.body,
        id: uuidv4(),
    };
    contacts.push(newContact);

    res.json({
        msg: "Add new contact successfully",
        data: contacts,
    });
});

app.put("/contacts/:id", (req, res) => {
    const { id }= req.params;

    const isExist = contacts. findIndex((item) => item.id === id);
    if(isExist < 0) {
        res. status(404). json ({
            message : "Not Found",
        })
    } else {
        const newContact = {...contacts[isExist], ...req.body};
        contacts.splice(isExist, 1, newContact);

        res.json ( {
            data: contacts,
            msg: "Successful"
        });
    }
    
});

app.delete("/contacts/:id", (req, res) => {
    const { id }= req.params;

    const isExist = contacts. findIndex((item) => item.id === id);
    if(isExist < 0) {
        res. status(404). json ({
            message : "Not Found",
        })
    } else {
        contacts.splice(isExist, 1);
        res.json ( {
            data: contacts,
            msg: "Successful"
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});
