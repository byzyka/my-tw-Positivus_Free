import CaseStudies from '../components/CaseStudies'

export function Cases() {
    return (
 <section className="flex items-center pt-[120px] flex-col ">
           <div className="my-container py-5 flex flex-nowrap gap-10  ">
                <h2 className="text-[40px] mark font-medium">Case Studies</h2>
                <p className="text-lg max-w-[580px] ">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            < div className = "my-container mt-15 grid lg:grid-cols-3 gap-[64px] bg-dark rounded-[45px] px-15 py-17.5 lg:divide-x lg:divide-y-0 divide-x-0 divide-y divide-white  " >
            <CaseStudies/>
            </div>
            
        </section>
    )
}

export default Cases;