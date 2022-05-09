//this file is made to add our pools to the sql database

const Joi = require("joi");
const express = require("express");
const db = require("./database");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

function validatePool(pool) {
    const schema = Joi.object({
        poolName    : Joi.string().min(3).required(),
        volumeOfWater: Joi.number().integer().required(),
        maxAmount : Joi.number().integer().required(),
    });
    return schema.validate(pool);
}

// GET
app.get("/", (req, resp) => {
    resp.send("Hello, i`m working)))");
});

app.get("/api/pools", async(req, resp) => {
    let result = [];
    if (req.query.searchKey) {
        result = await db
            .promise()
            .query(
                `SELECT * FROM pools WHERE poolName LIKE '%${req.query.searchKey}%';`
            );
    } else {
        result = await db.promise().query(`SELECT * FROM pools`);
    }
    const pools = result[0];
    resp.status(200).send(pools);
});

app.get("/api/pools/:id", async(req, resp) => {
    // get pool by id
    const result = await db
        .promise()
        .query(`SELECT * FROM pools WHERE id='${req.params.id}'`);
    const pool = result[0][0];
    if (!pool) {
        return resp
            .status(404)
            .send("pool was not found.");
    }

    resp.send(pool);
});

// POST
app.post("/api/pools", (req, resp) => {
    // validate pool
    const { error } = validatePool(req.body);
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    // store pool in db
    try {
        db.query(
            `INSERT INTO pools(poolName, volumeOfWater , maxAmount) value ('${req.body.poolName}', '${req.body.volumeOfWater}', '${req.body.maxAmount}')`
        );
        resp.status(200).send({ msg: "pool created" });
    } catch (err) {
        console.log(err);
    }
});

// PUT
app.put("/api/pools/:id", async(req, resp) => {
    // get pool by id
    const result = await db
        .promise()
        .query(`SELECT * FROM pools WHERE id='${req.params.id}'`);
    const pool = result[0][0];
    if (!pool) {
        return resp
            .status(404)
            .send("pool was not found.");
    }

    // validate pool
    const { error } = validatePool(req.body); 
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    // update pool
    try {
        db.query(
            `UPDATE pools SET poolName='${req.body.poolName}', volumeOfWater='${req.body.volumeOfWater}', maxAmount='${req.body.maxAmount}' WHERE id='${req.params.id}'`
        );
    } catch (err) {
        console.log(err);
    }

    resp.send(pool);
});

// DELETE
app.delete("/api/pools/:id", async(req, resp) => {
   
    const result = await db
        .promise()
        .query(`SELECT * FROM pools WHERE id='${req.params.id}'`);
    const pool = result[0][0];

    // delete pool
    if (pool) {
        db.query(`delete from pools where id='${req.params.id}'`).send("pool was deleted");
    } else {
        return resp.status(404).send("The pool with the given ID was not found.");
    }

    resp.send(pool);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});