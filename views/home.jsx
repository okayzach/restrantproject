const React = require('react')
const Default = require('./default')

function home () {
    return (
        <Default>
            <main>
              <h1>REST-Rant</h1>
            <div>
                <img src="/images/rainbow-food.jpg" alt="A rainbow food arrangement" height="400px"/>
                <div>
                    Photo by <a href="https://unsplash.com/@jimmydean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
             </main>
        </Default>
    )
}  

module.exports = home