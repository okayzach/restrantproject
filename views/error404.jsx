const React = require('react')
const Default = require('./default')

function error404 () {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="http://placekitten.com/500/500/" alt="a cute cat picture" />
              </div>
          </main>
      </Default>
    )
  }
  

module.exports = error404
