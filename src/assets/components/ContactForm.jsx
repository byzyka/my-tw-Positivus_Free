import Button from "./Button";
import CheckboxGroup from "./CheckboxGroup";
import { useState } from "react";



export function ContactForm() {
    const contactOptions = [
        { label: 'Say Hi', value: 'say' },
        { label: 'Get a Quote', value: 'quote' }
    ];
    const [selected, setSelected] = useState([]);

    return (
        <form action="#" 
        // onSubmit={handleSubmit} 
        className="font-space ">
            
            <div className=" mb-10">
                <CheckboxGroup 
                options={contactOptions}
                value={selected}
                onChange={setSelected}
                 />
                
            </div>

            <div className="flex flex-col gap-6 max-w-[457px]">
                 <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" />
                    {/* Здесь может быть сообщение об ошибке */}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" name="email" placeholder="Email" />
                    {/* Здесь может быть сообщение об ошибке */}
                </div>
                <div className="form-group">
                    <label htmlFor="Message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                    />
                    {/* Здесь может быть сообщение об ошибке */}
                </div>
                <Button type="submit" className="bg-dark text-background text-xl justify-center">
                    Send Message
                </Button>
            </div>
               
        </form>
    );
}

export default ContactForm;
