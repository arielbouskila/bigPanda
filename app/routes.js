'use strict';
var Comment = require('./models/Comments');


module.exports = function (app) {

    var path = require('path');

    //GET ALL THE Comments
    app.get('/api/comments', function (req, res) {
        Comment.find(function (err, comments) {
            if (err) {
                console.error(err);
                res.status(500).send('Something broke!');
            } else {
                res.json(comments);
            }


        });
    });

    //POST Comment
    app.post('/api/comments', function (req, res) {
        var CommentModel = new Comment();
        CommentModel.email = req.body.email;
        CommentModel.comment = req.body.comment;

        CommentModel.save(function (error, obj) {
            if (error) {
                res.status(500).send(error);
            }
            else {
                res.json('OK');
            }
        });

    })


    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


};

