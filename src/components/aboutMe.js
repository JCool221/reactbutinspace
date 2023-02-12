import React from "react";
import headshot from '../images/headshot_no_bg.png'

const AboutMe = () => {
    return (
        <section className="about-me">
            <article>
                <p>"I am a highly skilled full stack web developer with a unique background that sets me apart from others in my field. I have a degree in Music Theory which has taught me the value of discipline, creativity, and attention to detail. I have also spent 25 years in retail, giving me a strong understanding of customer service and the ability to work well under pressure.

In my personal time, I enjoy indulging my passions of gaming, cooking and astronomy. My love for exploring new recipes and experimenting with different ingredients has given me a strong attention to detail and a love for problem-solving. The combination of my education, work experience, and personal interests make me a well-rounded individual with a strong skill set.

In the past decade, I have been primarily focused on full-time parenting, where I have honed my ability to multitask and work efficiently while also prioritizing family life. I am excited to bring these skills and qualities to my work as a full stack web developer."</p>
            </article>
        <img src={headshot} alt="Hey, That's Me!" />
            

        </section>
    )
}

export default AboutMe;