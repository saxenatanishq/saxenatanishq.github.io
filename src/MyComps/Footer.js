import React, {useEffect} from 'react'

const Footer = () => {
    useEffect(() => {
        // Standard way to update the last updated date (So, we don't have to manually change it)
        const last = document.getElementById('last-updated');
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        last.textContent = today.toLocaleDateString('en-US', options); 
    });
    return (
        <footer class="bg-gray-800 text-white py-6 text-center mt-auto">
            <div class="max-w-7xl mx-auto px-6">
                <p class="text-sm">Last updated on <span id="last-updated">June 19, 2025</span>. &copy; 2025.</p>
                <p class="text-sm mt-2">
                    Source code available on <a href="https://github.com/saxenatanishq/saxenatanishq.github.io" target="_blank" class="text-indigo-400 hover:underline">GitHub</a>.  Contact me: <a href="mailto:tanishqsaxena.in@gmail.com" class="text-indigo-400 hover:underline">tanishqsaxena.in@gmail.com</a> 
                </p>
            </div>
        </footer>
    )
}

export default Footer
