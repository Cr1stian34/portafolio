import axios from "axios"
import fileDownload from "js-file-download"
import { Link } from 'react-router-dom';

const Profile = () => {

    const handleClick = (url, filename) => {
       axios.get(url, {
        responseType: "blob"
       })
       .then((res)=>{fileDownload(res.data, filename)})
       .catch((err)=> console.log(err))
    }

    return (
        <section id="SectionHome" className="profile__container pt-[60px] px-5 relative">
            <div className="progress"></div>
            <h2 className="pt-[70px] pb-[3rem] mb-[2rem] z-10 text-4xl">Hola ! Soy <span className="text-[#7127BA]">Cristian Muyudumbay</span></h2>
            <div className="profileResponsive">
                <div className="w-[130px] h-[175px] mb-[2rem] imgContainer mx-auto">
                    <img src="/profile.png" alt="" />
                    <div className="estiloFondoImagen"></div>
                    <div className="reactGira animationRotateReact"><img src="/reactHeader.png" alt="" /></div>
                </div>
                <div className="z-10 pfResponsive">
                    <h2 className="text-[25px]">Ingeniero de Software / <span className="text-[#7127BA]">Desarrollador Web Full Stack</span></h2>
                    <hr className=" my-4" />
                    <p className="underline text-[20px]">Un diseñador que</p>
                    <h2 className="text-[20px]">Juzga un libro por su <span className="text-[#7127BA]">portada</span>...</h2>
                    <p className="text-[15px]">Porque si la portada no te impresiona qué más puede</p>
                    <button className="btnCv transition-colors"> <a className="text-base" href="/CvCristian_Muyudumbay.pdf" download={"Cv Cristian Muyudumbay"} >Descargar Cv</a> </button>
                </div>
            </div>

        </section>
    )
}

export default Profile