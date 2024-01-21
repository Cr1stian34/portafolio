import { BgImgWorl, Ellipse1, Ellipse2, Ellipse3, Icono1, Icono10, Icono11, Icono2, Icono3, Icono4, Icono5, Icono6, Icono7, Icono8, Icono9, PieWord, Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, WordIcon } from "./icons/Svgs"

const Programing = () => {
    return (
        <section id="SectionSkills" className="flex flex-col items-center mb-[8rem] pt-[5rem]">
            <div className="p-2 mb-6">
                <h3 className="text-center text-[35px]">Mis Habilidades</h3>
                <p className="text-center text-[15px]">Estas son las <span className="text-[#A362FF]">tecnologías</span> que estoy utilizando actualmente y las cuales conozco</p>
            </div>
            <article className="articleContainer">
                {/* iconContainer es la clases con grid */}
                <div className="iconos px-2 grid gap-3 mx-auto">
                    <div className="flex gap-2 justify-center">
                        <div className="iconPrograming">
                            <img src="/figma.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/react.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/c.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/node.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/rectangle.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/javaScript.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/css.png" alt="" />
                        </div>
                    </div>

                    <div className="flex gap-2 justify-center">
                        <div className="iconPrograming">
                            <img src="/php.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/laravel.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/postgres.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/tailwind.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/git.png" alt="" />
                        </div>

                        <div className="iconPrograming">
                            <img src="/html.png" alt="" />
                        </div>
                    </div>


                </div>

                <div className="Vectores flex justify-center relative">
                    <div>
                        <Vector1 />
                    </div>
                    <div>
                        <Vector2 />
                    </div>
                    <div>
                        <Vector3 />
                    </div>
                    <div>
                        <Vector4 />
                    </div>
                    <div>
                        <Vector5 />
                    </div>
                    <div>
                        <Vector6 />
                    </div>
                </div>

                <div className="mx-auto mt-[-70px] h-[300px] flex justify-center items-center worl relative">
                    <div className="relative">
                        <div className="animationRotate">
                            <WordIcon />
                        </div>
                        <div className="absolute top-[15%] left-[20%] animationRotate">
                            <BgImgWorl />
                        </div>
                        <div className="absolute top-[-35%] left-[-35%]">
                            <PieWord />
                        </div>
                    </div>
                    <div className=" absolute top-[1rem] ellipse">
                            <Ellipse1 />
                    </div>
                    <div className=" absolute top-[1rem] ellipse">
                            <Ellipse2 />
                    </div>
                    <div className=" absolute top-[1rem] ellipse">
                            <Ellipse3 />
                    </div>
                    <div className="absolute top-[5rem] left-[28rem] iconEllipse">
                        <Icono1/>
                    </div>
                    <div className="absolute top-[5rem] left-[32rem] iconEllipse">
                        <Icono2/>
                    </div>
                    <div className="absolute top-[6.5rem] left-[36.5rem] iconEllipse">
                        <Icono3/>
                    </div>
                    <div className="absolute top-[9rem] left-[38.4rem] iconEllipse">
                        <Icono4/>
                    </div>
                    <div className="absolute top-[11rem] left-[34.5rem] iconEllipse">
                        <Icono5/>
                    </div>
                    <div className="absolute top-[14.5rem] left-[32rem] iconEllipse">
                        <Icono6/>
                    </div>
                    <div className="absolute top-[11.5rem] right-[32rem] iconEllipse">
                        <Icono7/>
                    </div>
                    <div className="absolute top-[11rem] right-[38rem] iconEllipse">
                        <Icono8/>
                    </div>
                    <div className="absolute top-[8.5rem] right-[31rem] iconEllipse">
                        <Icono9/>
                    </div>
                    <div className="absolute top-[6rem] right-[34rem] iconEllipse">
                        <Icono10/>
                    </div>
                    <div className="absolute top-[3rem] right-[28rem] iconEllipse">
                        <Icono11/>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Programing