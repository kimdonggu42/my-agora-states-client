import React from 'react';
import './Discussion.css';

function Discussion({ list, deleteButton }) {

    return (
        <li className="discussion__container">
            <div className="discussion__answered">{list.answer !== null ? <i className="far fa-square-check"></i> : <i className="fa-regular fa-square"></i>}</div>
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image" src={list.avatarUrl} />
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a href={list.url}>{list.title}</a></h2>
                <div className="discussion__information">{list.author + `/` + new Date(list.createdAt).toLocaleString()}</div>
            </div>
            <div className="delete_Wrapper">
                <button className='deleteButton' onClick={() => deleteButton(list.id)}>삭제</button>
            </div>
        </li>
    );
}

export default Discussion;