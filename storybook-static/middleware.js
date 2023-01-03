const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const expressMiddleWare = router => {
    router.get('/nav.plain.html', async (req, res) => {
        const nav = await fetch('https://main--rosalind-boilerplate--dylandepass.hlx.page/nav.plain.html');
        res.send(await nav.text());
        res.end();
    });
    router.get('/footer.plain.html', async (req, res) => {
        const nav = await fetch('https://main--rosalind-boilerplate--dylandepass.hlx.page/footer.plain.html');
        res.send(await nav.text());
        res.end();
    });
};

module.exports = expressMiddleWare;