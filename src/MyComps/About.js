import React from 'react'

const About = () => {
    const para1 = "Hey! I’m Tanishq Saxena, a 1st year undergrad at IIT Kharagpur (CSE). I’m a tech enthusiast still exploring all the cool opportunities out there—AI/ML, development, finance, stock market, you name it. I love solving problems, learning new things, and vibe-coding xD.";
    const para2 = "When I’m not coding, you’ll probably find me playing football, cricket, or hitting the gym. Always up for a good challenge, a new tech trend, or just some fun!"
    return (
        <section id="about" className="mb-16 py-12 border-b border-gray-800 section-hidden">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">About Me</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="profile-image flex-shrink-0 flex items-center justify-center">
                    <img src="/tanishq.jpg" alt="Tanishq Saxena Profile Photo" className="about-photo"
                        onerror="this.onerror=null; this.src='https://placehold.co/400x800/EEEEEE/31363F?text=Photo+Error';" />
                </div>
                <div className="text-content">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {para1}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {para2} 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
