import React, { useEffect, useState } from 'react';
import './Discussions.css';
import Discussion from '../Component/Discussion';
import styled from 'styled-components';

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
            <div className="input__container">
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
            </div>
            <ul className='discussion__wrapper'>
                {question.map((value) =>
                    <Discussion list={value} key={value.id} deleteButton={handleDeleteClick}/>
                )}
            </ul>
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