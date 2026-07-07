const caseStudiesData = [
  {
    id: 1,
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "#"
  },
  {
    id: 2,
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "#"
  },
  {
    id: 3,
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "#"
  }
];


export function CaseStudies() {
  return (
    caseStudiesData.map((item) => ( 
      
      <div key={item.id} className="  flex flex-wrap space-y-5 pr-[64px] ">
      <div className="text-background text-lg"> {item.text}</div>
      <a className=" inline-flex flex-nowrap gap-4 items-center group mb-5" href={item.link}>
        <p className=" text-green group-hover:text-background">Learn more </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path className={`transition-colors duration-300 fill-green group-hover:fill-background`} d="M.8 13.7a1.5 1.5 0 1 0 1.5 2.6zm19.5-8.3q.2-1.3-1-1.9L6.1.1a1.5 1.5 0 1 0-.8 2.8L17 6.1l-3.1 11.5a1.5 1.5 0 1 0 2.9.8zm-18 10.9 17.3-10L18 3.7.8 13.7z" /></svg>
      </a>
    </div>
   
     ))
  );
}
    

export default CaseStudies;

