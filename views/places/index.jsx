const React = require('react')
const Default = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>{place.name}</h2>
            <p clasName="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p clasName="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
    return (
      <Default>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Default>
  )
  }
  

module.exports = index
