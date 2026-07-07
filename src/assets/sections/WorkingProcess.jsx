import WorkingProcessCard from "../components/WorkingProcessCard.jsx"
const WorkingProcessData = [
    {
    id: '01',
     title: "Consultation",
     text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
    id: "02",
    title: "Research and Strategy Development",
    text: "We will dive deep into industry research, analyze your competitors, and draft a comprehensive strategy tailored strictly to your business scale."
  },
  {
    id: "03",
    title: "Implementation",
    text: "Our team of experts begins executing the strategy, constantly monitoring performance and adjusting campaigns in real-time."
  },
   {
    id: "04",
    title: "Monitoring and Optimization",
    text: "Our team of experts begins executing the strategy, constantly monitoring performance and adjusting campaigns in real-time."
  },
  
       {
    id: "05",
    title: "Reporting and Communication",
    text: "We will dive deep into industry research, analyze your competitors, and draft a comprehensive strategy tailored strictly to your business scale."
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "Our team of experts begins executing the strategy, constantly monitoring performance and adjusting campaigns in real-time."
  }
];

export function WorkingProcess(){
    return (
        <section className="flex items-center pt-[120px] flex-col ">
                   <div className="my-container py-5 flex flex-wrap lg:flex-nowrap  gap-10  ">
                        <h2 className="text-[40px] mark font-medium">Our Working Process </h2>
                        <p className="text-lg max-w-[292px] ">Step-by-Step Guide to Achieving Your Business Goals</p>
                    </div>
            < div className="my-container mt-15 flex flex-col gap-[30px]" >
                        {WorkingProcessData.map((item) => (
                             <WorkingProcessCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            text={item.text} />
                        ))}

                        
                    </div>
                    
                </section>
    )
}
export default WorkingProcess;