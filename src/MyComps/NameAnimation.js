import React,{ useEffect }  from 'react';

const NameAnimation = () => {
    const phrases = ["Hello, I am Tanishq Saxena!","Student at IIT Kharagpur."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; // milliseconds per character
    let deletingSpeed = 75; // milliseconds per character
    let pauseBeforeDelete = 1500; // milliseconds to pause before deleting
    let pauseBeforeType = 500; // milliseconds to pause before typing next phrase

    useEffect(() => {
        const typingTextElement = document.getElementById('typing-text');

        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentPhrase.length) {
                currentTypingSpeed = pauseBeforeDelete;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                currentTypingSpeed = pauseBeforeType;
            }

            setTimeout(typeWriter, currentTypingSpeed);
        }

        typeWriter();
    }, []);
    return (
        <section className="flex justify-center items-center h-48 mb-8">
            <div className="text-center">
                <h1 id="typing-text" className="text-5xl md:text-6xl font-semibold text-indigo-600 font-mono typing-animation"></h1>
            </div>
        </section>
    )
}

export default NameAnimation
