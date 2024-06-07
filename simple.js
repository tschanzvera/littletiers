var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// YOUR CODE
db.defaults({posts:[]}).write();
console.log(db.get("posts").value());

// db.json
// db.get("posts")
// .push({ id: 2, title: 'great', published: true})
// .write()
// // add post
// db.get("posts")
// .push({ id: 3, title: 'new own', published: false})
// .write()
// // ----------------------------
// // YOUR CODE
// db.get("posts")
// .push({ id: 4, title: 'random', published: false})
// .write()

// count posts
// ----------------------------
// YOUR CODE

// Count posts
const postCount = db.get('posts').size().value();
console.log('Number of posts:', postCount);

// find all posts ids
// ----------------------------
// YOUR CODE
const postIds = db.get('posts').map('id').value();
console.log('Post IDs:', postIds);

// all matches of published false
// ----------------------------
// YOUR CODE
const unpublishedPosts = db.get('posts').filter({ published: false }).value();
console.log('Unpublished posts:', unpublishedPosts);

// find post with published false
// ----------------------------
// YOUR CODE
