
const Profile = () => {
    return (
        <section id="SectionHome" className="profile__container pt-[60px] px-5 ">
            <h2 className="pt-[100px] pb-[3rem] mb-[2rem] z-10">Hello! I Am <span className="text-[#7127BA]">Cristian Muyudumbay</span></h2>
          <div className="profileResponsive">
          <div className="w-[130px] h-[175px] mb-[2rem] imgContainer mx-auto">
                <img src="/profile.png" alt="" />
                <div className="estiloFondoImagen"></div>
            </div>
            <div className="pt-10 z-10 pfResponsive">
                <p className="underline text-[17px]">A Designer who</p>
                <h2 className="text-[36px]">Judges a book by its <span className="text-[#7127BA]">cover</span>...</h2>
                <p className="text-[11px]">Because if the cover does not impress you what else can</p>
            </div>
          </div>
           
        </section>
    )
}

export default Profile