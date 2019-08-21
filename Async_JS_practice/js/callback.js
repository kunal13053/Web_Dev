// 'Async' means something is going on But we don't want to wait until that thing is done. We want to continue while that thing is going on
// 'Sync' programming is when something is happening, we wait until that thing is done and continue after that thing is done

// 'Async is relevant to JS'.
// for eg: we made a request to server so we don't want our program to stop and wait for data,  we want it to continue doing something else

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// We are mimicing how it will fetch from server
function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
