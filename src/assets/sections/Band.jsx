import amazonLogo from '../img/logos/amazon.svg';
import dribbbleLogo from '../img/logos/dribbble.svg';
import hubspotLogo from '../img/logos/hubspot.svg';
import notionLogo from '../img/logos/notion.svg';
import netflixLogo from '../img/logos/netflix.svg';
import zoomLogo from '../img/logos/zoom.svg';

const Logos = [
  { id: 'amazon', src: amazonLogo, alt: 'Amazon website', href: 'https://amazon.com' },
  { id: 'dribbble', src: dribbbleLogo, alt: 'Dribbble portfolio', href: 'https://dribbble.com'},
  { id: 'hubspot', src: hubspotLogo, alt: 'HubSpot website', href: 'https://hubspot.com' },
  { id: 'notion', src: notionLogo, alt: 'Notion workspace', href: 'https://notion.so'},
  { id: 'netflix', src: netflixLogo, alt: 'Netflix streaming', href: 'https://netflix.com' },
  { id: 'zoom', src: zoomLogo, alt: 'Zoom platform', href: 'https://zoom.us' },
];

export function MenuLogos() {
    return <div className="my-container overflow-hidden bg-white pt-15">
    
    <nav className="flex items-center gap-24  animate-marquee pt-2.5">
        {Logos.map((logo)=> (<a 
        key={`${logo.id}-1`}
        target='blank'
        rel='noopener noreferrer'
        className="" href={logo.href}>
          <div className="relative mx-auto overflow-hidden">
            <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover grayscale mask-size-cover
                   mask-position-center
                   mask-repeat-no-repeat" /> 
          </div>
        </a>))}
        {Logos.map((logo)=> (<a 
        key={`${logo.id}-2`}
        target='blank'
        rel='noopener noreferrer'
        className="" href={logo.href}>
          <div className="relative mx-auto overflow-hidden">
            <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover grayscale mask-size-cover
                   mask-position-center
                   mask-repeat-no-repeat" /> 
          </div>
        </a>))}
    </nav>
</div>
}

export default MenuLogos;