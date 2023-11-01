
const FeaturedProject = () => {
    return (
        <section className="max-w-[1200px] mx-auto">
            <article className="px-3">
                <div className="relative">
                    <div className="featured">
                        <span className="text-[#9857D3]">Featured Project</span>
                        <h1 className="text-[#CCD6F6] text-[30px]">Example Project</h1>
                    </div>
                    <div className="imgDecoration">
                        <img className="rounded-2xl" src="/project1.png" alt="" />
                    </div>
                    <div className="cardFeatured">
                        <p>A web app for visualizing personalized Spotify data.
                            View your top artists, top tracks, recently played tracks,
                            and detailed audio information about each track. Create
                            and save new playlists of ecommended tracks based on your
                            existing playlists and more.
                        </p>
                    </div>
                </div>
                <div className="w-[50px] flex gap-4 mt-6 ml-5">
                    <a href="https://github.com/Cr1stian34/rickyAndMorty" target="blank">
                        <i className='bx bx-code-alt transition-colors'></i>
                    </a>
                    <a href="https://rickyandmortyvite-react.netlify.app/" target="blank">
                        <i className='bx bxl-netlify transition-colors' ></i>
                    </a>
                </div>
            </article>

            <article className="articleDos">
                <div className="relative">
                    <div className="feactured2">
                        <span className="text-[#9857D3]">Featured Project</span>
                        <h1 className="text-[#CCD6F6] text-[30px]">Example Project</h1>
                    </div>
                    <div className="imgDecoration2">
                        <img className="rounded-2xl" src="/project2.png" alt="" />
                    </div>
                    <div className="direccion">
                        <div className="cardFeatured2">
                            <p>A web app for visualizing personalized Spotify data.
                                View your top artists, top tracks, recently played tracks,
                                and detailed audio information about each track. Create
                                and save new playlists of ecommended tracks based on your
                                existing playlists and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="containerBtn">
                    <div className="secondBotons">
                        <a href="https://github.com/Cr1stian34/pokedex" target="blank">
                            <i className='bx bx-code-alt transition-colors'></i>
                        </a>
                        <a href="https://pokedex-app-vite-react.netlify.app/" target="blank">
                            <i className='bx bxl-netlify transition-colors' ></i>
                        </a>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default FeaturedProject