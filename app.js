const mediumToMarkdown = require('medium-to-markdown');
const fs = require('fs');
const username = ''
const posts = [
  ]

Promise.all(posts.map(post => {
    return new Promise((resolve, reject) => {
        mediumToMarkdown.convertFromUrl(post)
            .then(function (markdown) {
                fs.writeFileSync(`./posts/${post.replace(`https://medium.com/@${username}/`,'')}.md`, markdown);
                resolve();
            })
            .catch(err => reject(err));
    })
}))
