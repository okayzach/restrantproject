const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += 'â­ï¸'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={`${data.place.name}'s Lobby`} width="75%"/>
            <p>Located in {data.place.city}, {data.place.state}</p>
            <div id="rating">
                <h2>Rating</h2>
                {rating}
            </div>
            <div>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
            <hr />
            <div>
                <h2>Comments</h2>
                    {comments}
            </div>
            <h1>Add a comment!</h1>
            <form method="POST" action="/:id/comment">
                <div className="form-group">
                    <label htmlFor="name">Author</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Your comment</label>
                    <input className="form-control" id="content" name="content" type="textarea"/>
                </div>
                <div className="">
                    <label htmlFor="city">Star rating</label>
                    <input className="form-control" id="stars" name="stars" type="number" step="0.5" min="0" max="10"/>
                </div>
                <div>
                    <label htmlFor="state">Rant?</label>
                    <input className="form-control" id="rant" name="rant" type="checkbox" />
                </div>
            <a>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </a>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
