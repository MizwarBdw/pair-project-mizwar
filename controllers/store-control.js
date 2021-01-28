const {Store} = require('../models/index')

class Controller {
    static getStoreList(req,res){
        Store.findAll()
        .then(data => {
            res.render('show-store-list', {
                title : 'STORE LIST',
                dataStores: data
            })
        })

        .catch(err => {
            res.send(err)
        })

    }

    //===========================================================

    static getAddStore(req, res){
        res.render('form-store-add', {
            title:' ADD STORE'
        })
    }

    static postAddStore(req, res){
        Store.create(req.body)
        .then(data => {
            res.redirect('/stores')
        })
        .catch(err => {
            res.send(err)
        })
    }

    //===========================================================

    static getEditStore(req, res){
        Store.findAll({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.render('form-edit-store', {
                title: 'Edit Store',
                data
            })
        })
        
        .catch(err => {
            res.send(err)
        })
    }

    static postEditStore(req, res){
        Store.update(req.body, {
            where: {
                id: +req.params.id
            }
        })

        .then(data => {
            res.redirect('/stores')
        })

        .catch(err => {
            res.send(err)
        })
    }

    //===========================================================

    static getDestroyStore(req, res){
        Store.destroy({
            where: {
                id: +req.params.id
            }
        })

        .then(() => {
            res.redirect('/stores')
        })

        .catch(err => {
            res.send(err)
        })
    }

    //===========================================================

    static getPostEvent(req, res){
        res.render('form-post-event')
    }

    static postEventStore(req, res){
        res.redirect('/stores/postEvent/succes')
    }

    static getPostEventSucces(req, res){
        res.render('show-post-event')
    }
}

module.exports = Controller