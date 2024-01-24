import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const FeaturedProject = () => {

  const [showModal, setShowModal] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zf2uq99', 'template_79l3dm4', form.current, '-E36zDw3KjmJu19Gl')
      .then((result) => {
          handleOpenModal()
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };

  const handleOpenModal = ()=>{
    setShowModal(true)
  }

  const handleCloseModal = ()=>{
    setShowModal(false)
    document.getElementById("miForm").reset();
  }

    return (
        <section id="Contactame" className="max-w-[1200px] flex gap-10 pt-[6rem]">
            <article className="px-3 text-center flex justify-center flex-col gap-5">
                <span className="contact text-[#9857D3] text-2xl">Contáctame</span>
                <p className="contact">Envíame un correo para contactarme y así podríamos trabajar juntos</p>
            </article>

            <article className="max-w-[800px] flex justify-center">
                <form id="miForm" className="contactoForm" ref={form} onSubmit={sendEmail}>
                    <span className="w-[100%] text-center text-2xl pt-5">Contáctame</span>
                    <div className="">
                        <span>Tu nombre: </span>
                        <input className="inputForm" type="text" name="user_name" placeholder="Tu nombre" />
                    </div>
                    <div className="">
                        <span>Tu correo: </span>
                        <input className="inputForm" type="email" name="user_email" placeholder="Tu correo" />
                    </div>
                    <div className="">
                        <span>Tu mensaje: </span>
                        <textarea className="inputForm" type="text" name="message" placeholder="Dejame tu mensaje" />
                    </div>
                    <button onClick={handleOpenModal} className="btnForm">Enviar Mensaje</button>
                </form>
            </article>

            <article className={` ${showModal? "visible opacity-100" : "invisible opacity-0"}   fixed w-[100%] min-h-screen bg-black/60 top-0 left-0 z-10 flex items-center justify-center transition-all`}>
                <div className="p-5 max-w-[300px] bg-slate-300 h-[200px] rounded-md flex flex-col justify-center items-center gap-5">
                    <span className=" text-black">Correo Enviado Correctamente</span>
                    <button onClick={handleCloseModal} className=" rounded-md bg-slate-500 px-6 py-3 hover:bg-lime-800 transition-colors">Cerrar</button>
                </div>
            </article>
        </section>
    )
}

export default FeaturedProject