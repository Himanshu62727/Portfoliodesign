// var typed = new Typed('.typing', {
//     strings: ['Web Developer', 'Front End Developer', 'Back End Developer', 'Full Stack Developer'],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// });



const professions = ["Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"];
        const typingElement = document.querySelector(".typing");
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentProfession = professions[professionIndex];
            const displayedText = isDeleting 
                ? currentProfession.substring(0, charIndex--) 
                : currentProfession.substring(0, charIndex++);

            typingElement.textContent = displayedText;

            if (!isDeleting && charIndex === currentProfession.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect();