const router = require('express').Router();
const {Article} = require('../db');

//get all events
router.get('/', async(req, res, next)=>{
    try{
        const articles = await Article.findAll();
        res.send(articles);
    } catch(er){
        next(er)
    }
})

//get event by id
router.get('/:id', async(req, res, next)=>{
    try{
        const article = await Article.findByPk(req.params.id);
        res.send(article);
    } catch(er) {
        next(er)
    }
})

module.exports = router;