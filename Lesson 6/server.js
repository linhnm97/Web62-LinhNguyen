const express = require("express");

const contactRouter = require("./routes/contacts");

const userRouter = require("./routes/users");

const checkAdminMiddleware = require("./middleware/checkAdmin");

const logMiddleware =require("./middleware/log");

const app = express();

const PORT = 4001;

//Middleware

app.use(express.json());

app.use(logMiddleware);

app.use("/contacts", contactRouter);

app.use("/users", userRouter);

app.get("/admin", checkAdminMiddleware, (req, res) => {
    res.send("Welcome to admin page");
});

const middleWareVongSoLoai = (req,res, next) => {
    if(true) {
        console.log("Qua được vòng sơ loại");
        next();
    }
};

const middleWareVongBang = (req, res, next) => {
    if(true) {
        console.log("Qua được vòng bảng rồi");
        next();
    }
};

const middleWareVong1_16 = (req, res, next) => {
    if(true) {
        console.log("qua được vòng 1/16");
        next();
    }
};

app.get(
    "/lay-cup",
    middleWareVongSoLoai,
    middleWareVongBang,
    middleWareVong1_16,
    (req, res) => {
        res.json({
            msg: "Win rồi",
        })
    }
);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} `);
})