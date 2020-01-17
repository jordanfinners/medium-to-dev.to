const mediumToMarkdown = require('medium-to-markdown');
const fs = require('fs');
const username = ''

// You can get a list of your posts by going to medium.com/@username and open dev tools and run this command (inserting your username below)
// copy(Array.from(new Set(Array.from(document.querySelector('div.es.y').querySelectorAll('a')).filter(p => p.pathname.indexOf('username/') > -1).map(p => p.href.replace(/\?source=-+\d+-+/ig, ''))))))


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
