import React, {useState} from 'react'

function Review({ data }) {


    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const { id, name, job, image, text} = data[currentReviewIndex];


    function handleNextReview() {
        setCurrentReviewIndex((prevIndex) => {
            return (prevIndex + 1) % data.length;
        });
    }

    function handlePrevReview() {
        setCurrentReviewIndex((prevIndex) => {
            return (prevIndex - 1 + data.length) % data.length;
        });
    }

    function handleRandomReview() {
        setCurrentReviewIndex(Math.floor(Math.random() * data.length));
    }

    return (
        <article className='review' key={id}>
            <header>
                <img src={image} alt={name} className='person-img' />
            </header>
            <main>
                <h2 className='author' id='author-id'>{name}</h2>
                <h3 className='job'>{job}</h3>
                <p className='info'>{text}</p>
            </main>
            <footer>
                <button className='random-btn' onClick={handleRandomReview}>surprise me</button>
                <button className='next-btn' onClick={handleNextReview}>Next Review</button>
                <button className='prev-btn' onClick={handlePrevReview}>Previous Review</button>
            </footer>
        </article>
    )
}

export default Review