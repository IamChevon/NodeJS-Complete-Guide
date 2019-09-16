exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'first post', content:'this is some random post!'}]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    //create a new post; send back success code
    res.status(201).json({
        message: 'Post created!',
        post: {
            id: new Date().toDateString(),
            title: title, 
            content: content
        }
    });
}