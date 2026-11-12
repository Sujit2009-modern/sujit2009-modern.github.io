/* =========================================
   SUJIT'S PROFESSIONAL STUDENT PORTFOLIO
   Cleaned and consolidated stylesheet
   ========================================= */

/* 1. GLOBAL STYLES */
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Segoe UI", Arial, sans-serif;
    background-color: #0B1120;
    color: #E2E8F0;
    width: calc(100% - 250px);
    max-width: none;
    margin: 0 0 0 250px;
    padding: 20px;
    line-height: 1.6;
    overflow-x: hidden;
}

/* 2. PROFILE PHOTO */
.profile {
    text-align: center;
    margin: 15px auto;
}

.profile img {
    width: 200px;
    height: 200px;
    max-width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #3B82F6;
    box-shadow: 0 0 12px #3B82F6,
                0 0 25px rgba(139, 92, 246, 0.5);
    transition: box-shadow 0.3s ease;
}

.profile img:hover {
    box-shadow: 0 0 18px #3B82F6,
                0 0 35px #8B5CF6;
}

/* 3. GENERAL NAVIGATION
   These rules apply to a regular nav element.
   The .sidebar rules below take priority for the sidebar. */
nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 22px;
    width: 100%;
    margin: 25px auto;
    padding: 20px;
    background-color: #172033;
    border: 1px solid #263858;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    overflow-x: auto;
    white-space: nowrap;
}

nav a {
    display: inline-block;
    flex-shrink: 0;
    color: #60A5FA;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    padding: 8px 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

nav a:hover {
    color: #A78BFA;
    background-color: #263858;
    transform: translateY(-3px);
}

/* 4. PORTFOLIO CARDS */
.card {
    width: 100%;
    max-width: 1000px;
    margin: 25px auto;
    padding: 25px;
    background-color: #172033;
    color: #E2E8F0;
    border: 1px solid #263858;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    transition: border-color 0.3s ease,
                box-shadow 0.3s ease,
                transform 0.3s ease;
}

.card:hover {
    border-color: #3B82F6;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15),
                0 0 15px rgba(139, 92, 246, 0.12);
}

/* 5. HEADINGS */
.card h1,
.card h2 {
    color: #60A5FA;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
}

.card h1 {
    font-size: 36px;
    margin-bottom: 30px;
}

.card h2 {
    font-size: 28px;
    border-bottom: 2px solid #263858;
    padding-bottom: 12px;
}

/* 6. PARAGRAPHS AND LISTS */
.card p {
    max-width: 850px;
    margin: 20px auto;
    line-height: 1.8;
}

.card li {
    margin-bottom: 10px;
    line-height: 1.7;
}

/* 7. GENERAL LINKS */
.card a {
    color: #60A5FA;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.card a:hover {
    color: #A78BFA;
    text-decoration: underline;
}

/* 8. BUTTONS */
.contact-button {
    display: inline-block;
    background: linear-gradient(135deg, #2563EB, #6366F1);
    color: white;
    padding: 14px 32px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
    transition: all 0.3s ease;
}

.contact-button:hover {
    background: linear-gradient(135deg, #8B5CF6, #6366F1);
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(139, 92, 246, 0.3);
}

.card a.contact-button,
.card a.contact-button:hover {
    color: #FFFFFF;
    text-decoration: none;
}

#welcomeButton,
#nameButton,
#clearButton,
#themeButton {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

#welcomeButton,
#nameButton {
    background-color: #2563EB;
}

#welcomeButton:hover,
#nameButton:hover {
    background-color: #7C3AED;
    transform: translateY(-3px);
}

#welcomeButton:active {
    transform: scale(0.95);
}

#themeButton {
    background-color: #8B5CF6;
}

#themeButton:hover {
    background-color: #2563EB;
    transform: translateY(-3px);
}

#clearButton {
    background-color: #475569;
}

#clearButton:hover {
    background-color: #64748B;
    transform: translateY(-3px);
}

#nameButton:disabled {
    background-color: #475569;
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

/* 9. FOOTER */
footer {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
}

/* 10. WELCOME SECTION */
.welcome-section {
    background-color: #172033;
    color: #E2E8F0;
    padding: 25px;
    margin: 25px auto;
    border: 1px solid #263858;
    border-radius: 15px;
    text-align: center;
    transition: background-color 0.3s ease,
                color 0.3s ease;
}

/* 11. DATE, TIME AND GREETING */
#digitalClock {
    color: #60A5FA;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 1px;
    transition: color 0.3s ease;
}

#digitalClock:hover {
    color: #A78BFA;
}

#currentDate {
    color: #60A5FA;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
}

#currentDate:hover {
    color: #A78BFA;
}

#timeGreeting {
    color: #A78BFA;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
}

#visitorName {
    background-color: #172033;
    color: #E2E8F0;
    border: 1px solid #3B82F6;
    padding: 10px 14px;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    transition: all 0.3s ease;
}

#visitorName:focus {
    border-color: #8B5CF6;
    box-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
}

#personalGreeting {
    color: #F59E0B;
    font-weight: bold;
    margin-top: 12px;
}

/* 12. EDUCATION */
.education-content {
    background-color: #1E293B;
    padding: 30px;
    border: 1px solid #3B82F6;
    border-radius: 15px;
    margin: 20px auto;
    max-width: 850px;
    text-align: left;
}

.education-content h3 {
    color: #60A5FA;
    margin-bottom: 12px;
}

.education-content li {
    margin-bottom: 15px;
    line-height: 1.6;
}

#about h1,
#education h1 {
    display: block;
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 3px solid #263B60;
}

/* 13. SKILLS */
.skill-category {
    background-color: #1E293B;
    padding: 25px;
    margin: 20px 0;
    border: 1px solid #334155;
    border-radius: 14px;
    transition: transform 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
}

.skill-category h3 {
    color: #60A5FA;
    margin-bottom: 15px;
}

.skill-category li {
    margin-bottom: 10px;
    line-height: 1.6;
}

.skill-category:hover {
    transform: translateY(-4px);
    border-color: #3B82F6;
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.12);
}

/* 14. GOALS */
.goals-content {
    background-color: #1E293B;
    padding: 28px;
    border: 1px solid #334155;
    border-radius: 14px;
    margin-top: 20px;
    line-height: 1.8;
    transition: transform 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
}

.goals-content p {
    margin-bottom: 20px;
}

.goals-content p:last-child {
    margin-bottom: 0;
}

.goals-content:hover {
    transform: translateY(-4px);
    border-color: #3B82F6;
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.12);
}

.project-status {
    color: #F59E0B;
    font-weight: bold;
}

/* 15. CERTIFICATES */
.certificate-gallery {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 22px;
    margin-top: 30px;
}

.certificate-card {
    background: #111C33;
    border: 1px solid #263B60;
    border-radius: 12px;
    padding: 22px;
    transition: transform 0.25s ease,
                border-color 0.25s ease;
}

.certificate-card:hover {
    transform: translateY(-4px);
    border-color: #7C3AED;
}

.certificate-card h3 {
    color: #60A5FA;
    margin-bottom: 12px;
}

.certificate-card p {
    color: #DBEAFE;
    line-height: 1.6;
}

.certificate-button {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 16px;
    background: #2563EB;
    color: #FFFFFF;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.25s ease;
}

.certificate-button:hover {
    background: #7C3AED;
}

.certificate-gallery .certificate-card a.certificate-button,
.certificate-gallery .certificate-card a.certificate-button:hover {
    color: #FFFFFF;
    text-decoration: none;
}

/* 16. WORKSHOPS AND TRAINING */
.workshop-card {
    background: #111C33;
    border: 1px solid #263B60;
    border-radius: 12px;
    padding: 25px;
    margin: 25px auto;
    max-width: 850px;
    transition: transform 0.25s ease,
                border-color 0.25s ease;
}

.workshop-card:hover {
    transform: translateY(-4px);
    border-color: #7C3AED;
}

.workshop-card h3 {
    color: #60A5FA;
    margin-bottom: 20px;
}

.workshop-card p,
.workshop-card li {
    color: #DBEAFE;
    line-height: 1.8;
}

.workshop-card ul {
    padding-left: 25px;
}

/* 17. PROJECTS */
.project-card {
    background: #111C32;
    padding: 25px;
    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid #315B9E;
    transition: transform 0.3s ease,
                border-color 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: #6C9FFF;
}

.project-card h3 {
    color: #60A5FA;
    margin-bottom: 15px;
}

.project-card p {
    line-height: 1.7;
}

/* 18. VOLUNTEERING */
.volunteering-card {
    background: #111C33;
    border: 1px solid #263B60;
    border-radius: 12px;
    padding: 25px;
    margin: 20px auto;
    max-width: 850px;
    transition: transform 0.25s ease,
                border-color 0.25s ease;
}

.volunteering-card:hover {
    transform: translateY(-4px);
    border-color: #7C3AED;
}

.volunteering-card h3 {
    color: #60A5FA;
    margin-bottom: 15px;
}

.volunteering-card p,
.volunteering-card li {
    color: #DBEAFE;
    line-height: 1.8;
}

/* 19. SIDEBAR NAVIGATION */

/* SIDEBAR NAVIGATION FIX */

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 250px;
    height: 100vh;

    padding: 25px 12px 20px;

    background: #111C33;
    border-right: 1px solid #263B60;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;
}

.sidebar::-webkit-scrollbar {
    display: none;
}

.sidebar a {
    display: block;
    flex-shrink: 0;
    width: 100%;

    padding: 14px 18px;

    color: #DBEAFE;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;

    border-radius: 8px;
    transition: 0.3s ease;
}

.sidebar a:hover {
    background: #263B60;
    color: #60A5FA;
}

/* 20. HOME SECTION */
.home-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 75vh;
    padding: 40px 20px;
}

.home-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    gap: clamp(20px, 4vw, 45px);
    margin: auto;
}

.home-image img {
    width: clamp(180px, 25vw, 260px);
    height: clamp(180px, 25vw, 260px);
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #3B82F6;
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
}

.home-content {
    flex: 1;
    max-width: 650px;
    min-width: 0;
}

.home-content h1 {
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1.2;
    color: #FFFFFF;
}

.home-content h1 span {
    color: #60A5FA;
}

.home-content h2 {
    color: #A78BFA;
    font-size: 21px;
}

.home-content p {
    color: #D1D5DB;
    font-size: 17px;
    line-height: 1.8;
}

.home-button {
    display: inline-block;
    margin-top: 15px;
    padding: 13px 25px;
    background: #2563EB;
    color: #FFFFFF;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s ease,
                transform 0.3s ease;
}

.home-button:hover {
    background: #7C3AED;
    color: #FFFFFF;
    transform: translateY(-3px);
}

/* 21. HOME HIGHLIGHTS */
.home-highlights {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 35px;
}

.highlight-card {
    flex: 1;
    min-width: 180px;
    background: #111C33;
    border: 1px solid #315B9B;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease,
                border-color 0.3s ease;
}

.highlight-card h3 {
    color: #60A5FA;
}

.highlight-card p {
    color: #E2E8F0;
}

.highlight-card:hover {
    transform: translateY(-5px);
    border-color: #60A5FA;
}

/* 22. CONTACT SOCIAL BUTTONS */
.social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 28px;
}

.social-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 25px;
    background: #1E293B;
    color: #60A5FA;
    border: 1px solid #334155;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.social-button i {
    font-size: 18px;
    transition: transform 0.3s ease;
}

.social-button:hover {
    background: #2563EB;
    color: #FFFFFF;
    border-color: #2563EB;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
    text-decoration: none;
}

.social-button:hover i {
    transform: scale(1.15);
}

/* Make the email button match the social buttons
   when it is placed inside .social-links. */
.social-links .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 13px 25px;
    background: #1E293B;
    color: #60A5FA;
    border: 1px solid #334155;
    border-radius: 10px;
    box-shadow: none;
    letter-spacing: normal;
}

.social-links .contact-button:hover {
    background: #2563EB;
    color: #FFFFFF;
    border-color: #2563EB;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

/* 23. ACHIEVEMENT CERTIFICATE PREVIEW */
.certificate-preview {
    width: 100%;
    max-width: 100%;
    margin: 25px auto;
    text-align: center;
    overflow: hidden;
}

.certificate-preview a {
    display: block;
    width: 100%;
}

.achievement-certificate {
    display: block;
    width: 100%;
    max-width: 650px;
    height: auto;
    margin: 0 auto;
    object-fit: contain;
    border: 1px solid #334155;
    border-radius: 12px;
    transition: box-shadow 0.3s ease;
}

.achievement-certificate:hover {
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.18);
}

.certificate-preview p {
    color: #60A5FA;
    font-size: 14px;
    margin-top: 12px;
}

/* 24. LIGHT MODE */
body.light-mode {
    background-color: #F1F5F9;
    color: #172033;
}

body.light-mode .card,
body.light-mode .welcome-section {
    background-color: #FFFFFF;
    color: #172033;
    border-color: #CBD5E1;
}

body.light-mode .card p,
body.light-mode .card li {
    color: #334155;
}

body.light-mode .education-content,
body.light-mode .skill-category,
body.light-mode .goals-content,
body.light-mode .certificate-card,
body.light-mode .workshop-card,
body.light-mode .project-card,
body.light-mode .volunteering-card,
body.light-mode .highlight-card {
    background-color: #FFFFFF;
    color: #172033;
    border-color: #CBD5E1;
}

body.light-mode .certificate-card p,
body.light-mode .workshop-card p,
body.light-mode .workshop-card li,
body.light-mode .volunteering-card p,
body.light-mode .volunteering-card li,
body.light-mode .highlight-card p {
    color: #334155;
}

body.light-mode .sidebar {
    background-color: #FFFFFF;
    border-color: #CBD5E1;
}

body.light-mode .sidebar a {
    color: #1E3A8A;
}

body.light-mode .sidebar a:hover {
    background-color: #DBEAFE;
    color: #1D4ED8;
}

body.light-mode nav:not(.sidebar) {
    background-color: #FFFFFF;
    border-color: #CBD5E1;
}

body.light-mode nav:not(.sidebar) a {
    color: #1D4ED8;
}

body.light-mode nav:not(.sidebar) a:hover {
    background-color: #DBEAFE;
    color: #6D28D9;
}

body.light-mode .social-button,
body.light-mode .social-links .contact-button {
    background-color: #EFF6FF;
    color: #1D4ED8;
    border-color: #BFDBFE;
}

body.light-mode .social-button:hover,
body.light-mode .social-links .contact-button:hover {
    background-color: #2563EB;
    color: #FFFFFF;
    border-color: #2563EB;
}

body.light-mode #visitorName {
    background-color: #FFFFFF;
    color: #172033;
    border-color: #2563EB;
}

body.light-mode #visitorName:focus {
    border-color: #7C3AED;
    box-shadow: 0 0 8px rgba(124, 58, 237, 0.3);
}

body.light-mode .home-content h1 {
    color: #172033;
}

body.light-mode .home-content h2 {
    color: #6D28D9;
}

body.light-mode .home-content p {
    color: #334155;
}

/* 25. TABLET RESPONSIVENESS */
@media (max-width: 768px) {
    .card {
        padding: 22px;
    }

    .home-container {
        flex-direction: column;
        text-align: center;
    }

    .home-image img {
        width: 200px;
        height: 200px;
    }

    .home-content h1 {
        font-size: 30px;
    }
}

/* 26. MOBILE RESPONSIVENESS */
@media (max-width: 700px) {
    body {
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 12px;
        overflow-x: hidden;
    }

    .sidebar {
        position: relative;
        width: 100%;
        height: auto;
        max-height: none;
        display: flex;
        flex-direction: column;
        padding: 25px 12px;
        gap: 4px;
        overflow: visible;
    }

    .sidebar a {
        width: 100%;
        text-align: center;
        padding: 12px;
    }

    .profile img {
        width: 160px;
        height: 160px;
    }

    nav:not(.sidebar) {
        flex-wrap: wrap;
        padding: 12px;
        gap: 12px;
    }

    nav:not(.sidebar) a {
        font-size: 15px;
        padding: 6px;
    }

    .card {
        padding: 18px;
        margin: 18px auto;
    }

    .card h1 {
        font-size: 27px;
    }

    .card h2 {
        font-size: 23px;
    }

    .card p,
    .card li {
        font-size: 15px;
    }

    /* Home */
    .home-section {
        width: 100%;
        min-height: auto;
        padding: 40px 15px;
    }

    .home-container {
        width: 100%;
        flex-direction: column;
        text-align: center;
    }

    .home-content {
        width: 100%;
        min-width: 0;
    }

    .home-content h1 {
        font-size: 30px;
    }

    .home-content h2 {
        font-size: 19px;
    }

    .home-content p {
        font-size: 15px;
    }

    .home-image img {
        width: 180px;
        height: 180px;
    }

    /* About and Education */
    #about,
    #education {
        padding: 20px 16px;
        margin: 18px auto;
        border-radius: 12px;
    }

    #about h1,
    #education h1 {
        font-size: 25px;
        margin-bottom: 22px;
        padding-bottom: 14px;
    }

    #about p {
        font-size: 15px;
        line-height: 1.8;
        text-align: left;
    }

    .education-content {
        padding: 18px;
        margin: 15px auto;
        border-radius: 12px;
    }

    .education-content h3 {
        font-size: 18px;
    }

    .education-content p,
    .education-content li {
        font-size: 14px;
        line-height: 1.8;
    }

    .education-content ul {
        padding-left: 20px;
    }

    /* Goals */
    #goals {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #goals h2 {
        font-size: 25px;
        margin-bottom: 22px;
        text-align: center;
    }

    .goals-content {
        padding: 18px;
        margin-top: 15px;
        border-radius: 12px;
    }

    .goals-content p {
        font-size: 15px;
        line-height: 1.8;
        text-align: left;
        margin-bottom: 18px;
    }

    /* Skills */
    #skills {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #skills h2 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 22px;
    }

    .skill-category {
        padding: 18px;
        margin: 16px 0;
        border-radius: 12px;
    }

    .skill-category h3 {
        font-size: 18px;
        margin-bottom: 12px;
    }

    .skill-category li {
        font-size: 15px;
        line-height: 1.8;
    }

    /* Certificates */
    #certificates {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #certificates h2 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    .certificate-gallery {
        grid-template-columns: 1fr;
        gap: 18px;
        margin-top: 20px;
    }

    .certificate-card {
        width: 100%;
        padding: 18px;
        border-radius: 12px;
    }

    .certificate-card h3 {
        font-size: 17px;
        line-height: 1.5;
    }

    .certificate-card p {
        font-size: 14px;
        line-height: 1.7;
    }

    .certificate-button {
        padding: 10px 16px;
        font-size: 14px;
    }

    /* Training and Workshops */
    #training {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #training h1 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    .workshop-card {
        width: 100%;
        padding: 18px;
        margin: 16px auto;
        border-radius: 12px;
    }

    .workshop-card h3 {
        font-size: 18px;
        line-height: 1.5;
    }

    .workshop-card p,
    .workshop-card li {
        font-size: 15px;
        line-height: 1.8;
    }

    .workshop-card ul {
        padding-left: 22px;
    }

    /* Projects */
    #projects {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #projects h2 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    .project-card {
        width: 100%;
        padding: 18px;
        margin-top: 16px;
        border-radius: 12px;
    }

    .project-card h3 {
        font-size: 18px;
        line-height: 1.5;
    }

    .project-card p {
        font-size: 15px;
        line-height: 1.8;
    }

    /* Volunteering */
    #volunteering {
        padding: 22px 16px;
        margin: 18px auto;
    }

    #volunteering h2 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
    }

    .volunteering-card {
        width: 100%;
        padding: 18px;
        margin: 16px auto;
        border-radius: 12px;
    }

    .volunteering-card h3 {
        font-size: 18px;
        line-height: 1.5;
    }

    .volunteering-card p,
    .volunteering-card li {
        font-size: 15px;
        line-height: 1.8;
    }

    /* Contact */
    .social-links {
        gap: 12px;
    }

    .social-button,
    .social-links .contact-button {
        padding: 12px 18px;
        font-size: 14px;
    }

    /* Achievement certificate */
    .achievement-certificate {
        width: 100%;
        max-width: 100%;
    }
}

/* 27. REDUCED MOTION ACCESSIBILITY */
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
    }
}

#contact {
    scroll-margin-top: 25px;
}

