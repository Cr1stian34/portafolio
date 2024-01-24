
const Footer = () => {
    return (
        <footer className="p-4 grid gap-5 mt-[5rem] pb-[8rem] max-w-[1200px]">
            <div className="flex gap-3 justify-center">
                <a href="https://www.instagram.com/cristian.muyu.alvarez34/" target="blank">
                    <i className='bx bxl-instagram text-[40px]'></i>
                </a>

                <a target="blank" href="https://www.linkedin.com/in/cristian-stalin-muyudumbay-alvarez/">
                    <i className='bx bxl-linkedin text-[40px]'></i>
                </a>
                <a href="https://github.com/Cr1stian34" target="blank">
                    <i className='bx bxl-github text-[40px]'></i>
                </a>
            </div>
            <div className="text-center">
                <h2 className="text-[25px]">MaCode</h2>
                <p>Copyright @2023: Created by Cristian Muyudumbay</p>
            </div>
            {/* <div className="flex flex-col text-center">
                <span>Puedes contactarme con este correo </span>
                <span>cristian.muyudumbay@gmail.com</span>
            </div> */}

        </footer>
    )
}

export default Footer