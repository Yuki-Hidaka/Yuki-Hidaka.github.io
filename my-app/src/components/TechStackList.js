import React from 'react';

function TechStackList({title, techs, className}) {
    return(

        <div>
            <h3>{title}</h3>
            <div className={{className}}>
                {techs.map((tech, index) => (
                    <div key={index} className={`${className}-item`}>
                        <p>{tech.name}: {tech.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default TechStackList;