import React from 'react';
import styled from 'styled-components';

const DiscussionContainer = styled.li`
    display: flex;
    background-color: ${(props) => props.theme.discussion_bg};
    border-radius: 15px;
    padding: 10px;
    height: 80px;
    margin-bottom: 10px;

&:hover {
    background-color: ${(props) => props.theme.hover_discussion_bg};
}

.discussion__avatar--wrapper {
    flex: 1;
    text-align: center;
    margin: auto;
}

img {
    width: 60x;
    height: 60px;
    border-radius: 70%;
}

.discussion__content {
    padding-left: 12px;
    flex: 8;
    display: flex;
    flex-direction: column;
}

.discussion__title {
    padding-top: 5px;
    font-size: 16px;
    flex: 3;
}

.link {
    text-decoration-line: none;
    color: ${(props) => props.theme.discussion_a};
    font-weight: 600;
    display: block;
    height: 100%;
}

.discussion__information {
    text-align: right;
    font-size: 14px;
    flex: 1;
    color: ${(props) => props.theme.discussion_text};
}

.discussion__answered {
    flex: 0.5;
    text-align: center;
    font-size: 25px;
    margin: 16px 10px 0px 0px;
    color: ${(props) => props.theme.discussion_text};
}

.delete_Wrapper {
    flex: 1;
}

.deleteButton {
    padding: 0px 10px 0px 10px;
    margin-top: 15px;
    margin-left: 10px;
    background-color: red;
    height: 30px;
    border-radius: 5px;
    border: none;
    color: ${(props) => props.theme.container_submit_text};
    font-size: 12px;
    margin-bottom: 15px;
}

.deleteButton:hover {
    background-color: pink;
}
`;

function Discussion({ list, deleteButton }) {

    return (
        <DiscussionContainer>
            <div className="discussion__answered">{list.answer !== null ? <i className="far fa-square-check"></i> : <i className="fa-regular fa-square"></i>}</div>
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image" src={list.avatarUrl} />
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a className='link' href={list.url}>{list.title}</a></h2>
                <div className="discussion__information">{list.author + `/` + new Date(list.createdAt).toLocaleString()}</div>
            </div>
            <div className="delete_Wrapper">
                <button className='deleteButton' onClick={() => deleteButton(list.id)}><i className="fa-regular fa-trash-can"></i></button>
            </div>
        </DiscussionContainer>
    );
}

export default Discussion;