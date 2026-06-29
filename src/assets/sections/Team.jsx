import TeamItem from "../components/TeamItem.jsx";

import johnImg from '../img/teams/john.jpg';
import JaneImg from '../img/teams/jane.jpg';
import MichaelImg from '../img/teams/Michael.jpg';
import EmilyImg from '../img/teams/Emily.jpg';
import BrianImg from '../img/teams/Brian.jpg';
import SarahImg from '../img/teams/Sarah.jpg';


const teammate = [
    {
        name: 'John Smith',
        post: 'CEO and Founder',
        experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        img: johnImg  
    },
        {
        name: 'Jane Doe',
        post: 'Director of Operations',
        experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        img: JaneImg  
    },
      {
        name: 'Michael Brown',
        post: 'Senior SEO Specialist',
        experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        img: MichaelImg  
    },
        {
        name: 'Emily Johnson',
        post: 'PPC Manager',
        experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        img: EmilyImg  
    },
     {
        name: 'Brian Williams',
        post: 'Social Media Specialist',
        experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        img: BrianImg  
    },
        {
        name: 'Sarah Kim',
        post: 'Content Creator',
        experience: '2+ years of experience in writing and editing </br> Skilled in creating compelling, SEO-optimized content for various industries',
        img: SarahImg  
    },
]

export function Team() {
    return (
        <section className="pt-15 pt-25">
            <div className="my-container grid lg:grid-cols-3 gap-10" > 
               {teammate.map((item) =>(
             
                <TeamItem
                    name={item.name}
                    post={item.post}
                    img={item.img}
                    experience={item.experience}
                />
                ))
               } 
            
            </div>

  
            </section>
    )
}

export default Team;