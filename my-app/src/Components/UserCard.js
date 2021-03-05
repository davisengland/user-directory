import React from 'react'

const UserCard = (props) => {
    let {data, index} = props
    return(
        <div className='card'>
            <h1 className='count'>{data[index].id}/{data.length}</h1>
            <h1 className='name'>{data[index].name.first} {data[index].name.last}</h1>
            <section className='middle'>
                <h2 className='info'>From: <h3>{data[index].city}, {data[index].country}</h3></h2>
                <h2 className='info'>Job Title: <h3>{data[index].title}</h3></h2>
                <h2 className='info'>Employer: <h3>{data[index].employer}</h3></h2>
            </section>
            <section className='bottom'>
                <h2 className='movies'>Favorite Movies:</h2>
                <ol className='list'>
                    <li>{data[index].favoriteMovies[0]}</li>
                    <li>{data[index].favoriteMovies[1]}</li>
                    <li>{data[index].favoriteMovies[2]}</li>
                </ol>
            </section>
        </div>
    )
}

export default UserCard