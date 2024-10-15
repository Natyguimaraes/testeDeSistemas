const express = require('express');
const app = express ();
const { getUserById } = require ('./db');

app.get('/agendamentos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
    if (user) {
        res.json(user);
    }
    }
})