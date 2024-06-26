import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const handleSubmit = event => {
        event.preventDefault();
        emailjs
            .sendForm('service_5lzj8xn', 'template_wmdx4xb', form.current, {
                publicKey: 'X_juKNlWI7l0TZxb5',
            })
            .then(
                () => {
                    alert('Thank you! Looking forward to our catch up.');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    }

    return (
        <section className="bg-white  py-4 px-4  sm:max-lg:">

            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
                <h2 className="text-center text-3xl font-bold py-2">Contact me</h2>
                <div className="relative  rounded-sm bg-white bg-clip-border text-gray-700 shadow-lg">
                    <form ref={form} onSubmit={handleSubmit} className="component mx-1 md:mx-10 ">
                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name:</label>
                                <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="name" name="user_name" />
                            </div>
                            <div className="sm:col-span-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email:</label>
                                <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="email" name="user_email" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message:</label>
                            <textarea className="block w-52 text-sm font-medium leading-6 text-gray-900 p-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="message" name="message" />
                        </div>
                        <button type="submit" value="Send" className="rounded-md bg-white px-2.5 py-1.5 ml-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Send</button>

                    </form>
                </div>
            </div>
        </section>

    );

}

export default Contact;
