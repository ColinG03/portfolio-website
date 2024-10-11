import { useState, useEffect } from 'react';
import BlinkingCursor from './BlinkingCursor';

function WelcomeMsg() {
    const [wordIdx, setWordIdx] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const messages = [" an engineer", " a problem-solver", " a programmer", " a life-long learner", " a canoe guide"];
    const numMessages = messages.length;

    function type() {
        const currWord = messages[wordIdx];

        const shouldDelete = isDeleting? 1: -1;

        setText(current => currWord.substring(0, current.length - shouldDelete));

        if (!isDeleting && text === currWord){
            setTimeout(() => setIsDeleting(true), 700);
        }
        else if (isDeleting && text.length === 0) {
            setTimeout(() => setIsDeleting(false), 500);
            console.log("current: ", wordIdx);
            console.log("next should be: ", (wordIdx + 1) % numMessages);
            setWordIdx(current => (current + 1) % numMessages);
            
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => type(), isDeleting? 50: 75);
        return () => clearTimeout(timer);
    }, [isDeleting, text]);


    return (
        <>

        <p className='message top-message'>Hi, I'm Colin. I am:</p>
        <p className='message bottom-message'>{text}
        <BlinkingCursor></BlinkingCursor>
        </p>
        </>
    )
}

export default WelcomeMsg;
