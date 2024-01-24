
const Profile = () => {
    return (
        <section id="SectionHome" className="profile__container pt-[60px] px-5 relative">
            <div className="progress"></div>
            <h2 className="pt-[100px] pb-[3rem] mb-[2rem] z-10 text-2xl">Hola ! Soy <span className="text-[#7127BA]">Cristian Muyudumbay</span></h2>
            <div className="profileResponsive">
                <div className="w-[130px] h-[175px] mb-[2rem] imgContainer mx-auto">
                    <img src="/profile.png" alt="" />
                    <div className="estiloFondoImagen"></div>
                    <div className="reactGira animationRotateReact"><img src="/react.png" alt="" /></div>
                </div>
                <div className="z-10 pfResponsive">
                    <h2 className="text-[30px]">Ingeniero en Software / <span className="text-[#7127BA]">Desarrollador Web Full Stack</span></h2>
                    <hr className=" my-4"/>
                    <p className="underline text-[17px]">Un diseñador que</p>
                    <h2 className="text-[20px]">Juzga un libro por su <span className="text-[#7127BA]">portada</span>...</h2>
                    <p className="text-[11px]">Porque si la portada no te impresiona qué más puede</p>
                    <button className="btnCv transition-colors">Descargar CV</button>
                </div>
            </div>

        </section>
    )
}

export default Profile