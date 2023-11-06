// components/ContactForm.tsx

import React from 'react';
import Image from 'next/image';
const ContactForm: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Contacto</h1>
            <div className="min-h-screen flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <Image src="/contact.png" width={500} height={500} alt={"Contact image"}></Image>

                    <div className="flex flex-col justify-center">
                        <input
                            type="text"
                            placeholder="Nombres completos"
                            className="p-4 mb-4 bg-[#545F65] text-white rounded-lg outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-4 mb-4 bg-[#545F65] text-white rounded-lg outline-none"
                        />
                        <textarea
                            placeholder="Mensaje"
                            rows={5}
                            className="p-4 mb-4 bg-[#545F65] text-white rounded-lg outline-none"
                        ></textarea>
                        <button
                            className="p-4 text-white rounded-lg bg-[#008734] hover:bg-[#01732D]"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;