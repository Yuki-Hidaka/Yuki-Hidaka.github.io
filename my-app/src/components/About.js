import React from "react";
import TechStackList from './TechStackList';


const About = () => {

    const frontEndTechs = [
        {
            name: 'HTML',
            description: '学習中',
        },
        {
            name: 'CSS',
            description: '学習中',
        },
        {
            name: 'JavaScript',
            description: '学習中',
        },
    ];

    const programingTechs = [
        {
            name: 'VB.net',
            description: '学習中',
        },
        {
            name: 'Python',
            description: '学習中',
        },
        {
            name: 'JavaScript',
            description: '学習中',
        },
    ];

    const frameworkTechs = [
        {
            name: 'React',
            description: '学習中',
        },
        {
            name: 'flet',
            description: '学習中',
        },
        {
            name: 'Selenium',
            description: '学習中',
        },
    ];

    return (

        <div>
            <h1>学んだ技術に関するアウトプットスペース</h1>
            <h2>技術スタック</h2>

            <TechStackList
                title="フロントエンド技術"
                techs={frontEndTechs}
                className="feTech-list"
            />

            <TechStackList
                title="プログラミング言語"
                techs={programingTechs}
                className="feTech-list"
            />

            <TechStackList
                title="フレームワーク"
                techs={frameworkTechs}
                className="fwTech-list"
            />
        </div>
    );
}

export default About;