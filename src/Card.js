import React from 'react';

const Card = ({name, email, id }) => {
    //destruction here is the same or just put it in above param
    //const { name, email, id } = props;
    return(
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-s'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;