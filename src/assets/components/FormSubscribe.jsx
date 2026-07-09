import Button from "./Button"


export function FormSubscribe(){
    return (
        <div className="grid font-space  md:grid-cols-2 justify-between gap-5 max-w-[634px] w-full rounded-[14px] bg-[#292A32] py-14.5 px-10">
               <div className="form-group dark">
                   
                    <input required type="email" id="email" name="email" placeholder="Email" />
                   
                </div>
                <Button className="bg-green border-none font-medium  h-[67px] md:py-5 md:px-8.5 items-center justify-center ">Subscribe to news</Button>
        </div>
    )
}
export default FormSubscribe;