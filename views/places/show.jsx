const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={`${data.place.name}'s Lobby`} width="75%"/>
            <div id="rating">
                <h2>Rating</h2>
                <p>Not Rated</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state}</p>
                <p>Serving {data.place.cuisines}</p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
          </main>
        </Def>
    )
}

module.exports = show
