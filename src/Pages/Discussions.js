import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Discussion from '../Component/Discussion';

const InputContainer = styled.div`
    background-color: var(--container_bg);
    border-radius: 15px;

.input {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0px 20px;
}

.name,
.title,
.question,
.input__author,
.input__title,
.input__question {
    margin-bottom: 5px;
}

.name,
.title,
.question {
    color: var(--container_input_text);
}

.input__author:hover, .input__title:hover, .input__question:hover {
    background-color: var(--hover_container_input);
    border: 3px solid var(--hover_container_input_border);
    outline: none;
}

.input__author,
.input__title,
.input__question {
    height: 30px;
    border-radius: 7px;
    border: none;
    background-color: var(--container_input);
}

.submit_Wrapper {
    padding: 0px 20px 0px 20px;
}

.input__question {
    resize: vertical;
}

.submitButton {
    text-align: center;
    margin-top: 10px;
    background-color: var(--container_submit_bg);
    width: 100%;
    height: 35px;
    border-radius: 8px;
    border: none;
    color: var(--container_submit_text);
    font-size: 15px;
    margin-bottom: 15px;
}

.submitButton:hover {
    background-color: var(--hover_container_submit_bg);
    transition: 0.2s;
}
`;

const DiscussionWrapper = styled.ul`
    margin-top: 10px;
    overflow: overlay;
    height: 90.6vh;

/* 스크롤바 전체 설정 */
&::-webkit-scrollbar {
    width: 7px;
}
/* 스크롤바 막대(핸들) 설정 */
&::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.29);
    border-radius: 100px;
}
`;

function Discussions() {

    const [question, setQuestion] = useState([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getQuestion();
    }, []);

    const getQuestion = () => {
        fetch('http://localhost:4000/discussions')
            .then((response) => response.json())
            .then((data) => setQuestion(data));
    }

    const handleButtonClick = () => {
        fetch('http://localhost:4000/discussions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: question.length + 10,
                createdAt: new Date(),
                author: author,
                title: title,
                url: "#",
                answer: null,
                avatarUrl: 'https://source.boringavatars.com/beam',
            }),
        })
            .then((response) => response.json())
            .then((data) => getQuestion(data));
    }

    const handleDeleteClick = (id) => {
        fetch(`http://localhost:4000/discussions/${id}`, {
            method: 'DELETE'
        })
            .then((response) => { getQuestion(response) })
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value)
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    return (
        <React.Fragment>
            <InputContainer>
                <div className="input__Wrapper">
                    <div className="input">
                        <label className="name">Name</label>
                        <input className="input__author" type="text" value={author} onChange={handleChangeAuthor}></input>
                        <label className="title">Title</label>
                        <input className="input__title" type="text" value={title} onChange={handleChangeTitle}></input>
                        <label className="question">Question</label>
                        <textarea className="input__question"></textarea>
                    </div>
                </div>
                <div className="submit_Wrapper">
                    <button className='submitButton' onClick={handleButtonClick}>등록</button>
                </div>
            </InputContainer>
            <DiscussionWrapper>
                {question.map((value) =>
                    <Discussion list={value} key={value.id} deleteButton={handleDeleteClick}/>
                )}
            </DiscussionWrapper>
        </React.Fragment>
    );
}

export default Discussions;



// import React, { useEffect, useState } from 'react';
// import './Discussions.css';
// import Discussion from '../Component/Discussion';

// function Discussions() {
//     const [question, setQuestion] = useState([]);
//     const [newQuestion, setNewQuestion] = useState([]);
//     const [delQuestion, setDelQuesrion] = useState([]);
//     const [author, setAuthor] = useState('');
//     const [title, setTitle] = useState('');



//     useEffect(() => {
//         fetch('http://localhost:4000/discussions')
//             .then((response) => response.json())
//             .then((data) => setQuestion(data));
//     }, [newQuestion])

//     const handleButtonClick = () => {
//         const newQuestion = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 id: question.length + 10,
//                 createdAt: new Date(),
//                 author: author,
//                 title: title,
//                 url: "#",
//                 answer: null,
//                 avatarUrl: 'https://source.boringavatars.com/beam',
//             }),
//         };
//         fetch('http://localhost:4000/discussions', newQuestion)
//             .then((response) => response.json())
//             .then((data) => setNewQuestion(data));
//     }
  
//     const handleDeleteClick = (id) => {
//         fetch(`http://localhost:4000/discussions/${id}`, {
//             method: 'DELETE'
//         })
//     }

//     const handleChangeAuthor = (event) => {
//         setAuthor(event.target.value)
//     };

//     const handleChangeTitle = (event) => {
//         setTitle(event.target.value)
//     };

//     return (
//         <React.Fragment>
//             <div className="input__container">
//                 <div className="input__Wrapper">
//                     <div className="input">
//                         <label className="name">Name</label>
//                         <input className="input__author" type="text" value={author} onChange={handleChangeAuthor}></input>
//                         <label className="title">Title</label>
//                         <input className="input__title" type="text" value={title} onChange={handleChangeTitle}></input>
//                         <label className="question">Question</label>
//                         <textarea className="input__question"></textarea>
//                     </div>
//                 </div>
//                 <div className="submit_Wrapper">
//                     <button className='submitButton' onClick={handleButtonClick}>SUBMIT</button>
//                 </div>
//             </div>
//             <ul className='discussion__wrapper'>
//                 {question.map((value) =>
//                     <Discussion list={value} key={value.id} deleteButton={handleDeleteClick}/>
//                 )}
//             </ul>
//         </React.Fragment>
//     );
// }

// export default Discussions;