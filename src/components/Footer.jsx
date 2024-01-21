
const Footer = () => {
    return (
        <footer className="p-4 grid gap-5 mt-[5rem] pb-[8rem] max-w-[1200px] mx-auto">
            <h2 className="text-[25px]">Contactar</h2>
            <div>
                <p>I'm currently looking to join a cross-functional team that values improving
                    people's lives through accessible design. or have a project in mind?</p>
            </div>
            <div className="flex flex-col">
                <span>Let's connect </span>
                <span>cristian.muyudumbay@gmail.com</span>
            </div>
            <div className="flex gap-3">
                <a href="https://www.instagram.com/cristian.muyu.alvarez34/" target="blank">
                    <i className='bx bxl-instagram'></i>
                </a>

                <a target="blank" href="https://www.linkedin.com/in/cristian-stalin-muyudumbay-alvarez-851344150/">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/Cr1stian34" target="blank">
                    <i className='bx bxl-github'></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer