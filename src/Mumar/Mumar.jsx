import React from 'react';
import './Mumar.css';
import hhh1 from './hhh1.png'
import hhh2 from './hhh2.png'
import hhh4 from './hhh4.png'
import hhh5 from './hhh5.png'
import hhh6 from './hhh6.png'
const coursesData = [
    {
        id: 1,
        title: 'RUS TILI',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh1, // O'zingizning rasmingiz bilan almashtiring
        iconType: 'translation',
    },
    {
        id: 2,
        title: 'MENTAL ARIFMETIKA',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh2,
        iconType: 'math',
    },
    {
        id: 3,
        title: 'INGLIZ TILI',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh1,
        iconType: 'chat',
    },
    {
        id: 4,
        title: 'SHAXMAT',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh4,
        iconType: 'translation',
    },
    {
        id: 5,
        title: 'ROBOTOTEXNIKA',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh5,
        iconType: 'math',
    },
    {
        id: 6,
        title: 'SUZISH',
        description:
            "Mashg'ulotlar o'qish va yozish texnikasini bir vaqtda rivojlantirishga, grammatika asoslarini o'rganishga va nutqni rivojlantirishga qaratilgan bo'lib, bu tilni o'zlashtirish jarayonini sezilarli darajada tezlashtiradi.",
        image: hhh6,
        iconType: 'chat',
    },
];

const Courses = () => {
    return (
        <section className="courses-container">
            <div className="ggg">
                {/* Sarlavha qismi */}
                <div className="courses-header">
                    <h2 className="title-main">
                        <span className="title-line"></span> BIZNING <span>KURSLAR</span>
                    </h2>
                    <p className="subtitle">
                        <span>3 OYLIK</span> YOZGI TA'TILDA FARZANDINGIZ BO'SH VAQTINI QANDAY O'TKAZADI!
                    </p>
                </div>

                {/* Kartochkalar to'plami */}
                <div className="courses-grid">
                    {coursesData.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="card-image-wrapper">
                                <img src={course.image} alt={course.title} className="card-image" />
                            </div><div className="card-content">
                                <div className="card-header">
                                    <h3 className="card-title">{course.title}</h3>
                                    {/* Belgilar (SVG Icon) */}
                                    <div className="card-icon">
                                        {course.iconType === 'translation' && (
                                            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M5 8h14M12 5v3m-3 0s1.5 4.5 4.5 7.5M10.5 12c1.5 1.5 3 3.5 4 5M16 19l2.5-6 2.5 6m-4.2-2h3.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {course.iconType === 'math' && (
                                            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M4 7h6M7 4v6M14 7h6M14 17h6M14 20h6M5 15l4 4m0-4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {course.iconType === 'chat' && (
                                            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M8 9h8M8 13h5m-3 8l-4-3H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 3z" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                <p className="card-description">{course.description}</p>

                                <a href="#more" className="card-link">
                                    Batafsil
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>


    );
};

export default Courses;