import React from 'react'


const Newsitem=(props)=> {

    let {title, description, imageUrl, newsUrl, author, date}=props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/1rXdaoVimlWnceazwwwxJQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/a5bb988ab74ee8615b7e34252dd0b679":imageUrl} className="card-img-top" alt="newspic"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl} target="_blank" className="btn btn-info" rel="noreferrer">Read More</a>
  </div>
</div>
      </div>
    )
}

export default Newsitem
