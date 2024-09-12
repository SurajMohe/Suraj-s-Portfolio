import React from 'react'
import './ThirdPage.css'
import { ProjectCard } from '../../components/projectCard/ProjectCard'

export const ThirdPage = () => {
    return (
        <div className='third-page-container'>
            <div className="cards-main-container">
                <div className="cards-main-container-text">
                    <h2>Works & Projects</h2>
                    <p>Check out some of my design projects, meticulously crafted with love and dedication, <br />
                        each one reflecting the passion and soul I poured into every detail.</p>
                </div>
                <div className="card-container">
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/pcfMIKyvw4lvoRsWBXxywx5E.jpg?scale-down-to=512"} title={"Ehtereal Elements"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/XyIwUjlrEIvs0MZKpuLUOF2RPk.jpg?scale-down-to=512"} title={"Spectrum Synergy"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/vuE1v2PFL5DxrtxYT34f858DV0.jpg?scale-down-to=512"} title={"Spectrum Synergy"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/QVb89Ag76Mq9vC5FFaRyqO2go.jpg?scale-down-to=512"} title={"Spectrum Synergy"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/DLr206pUv6FysbQV4cr3H5iZ4k.jpg?scale-down-to=512"} title={"Spectrum Synergy"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                   <ProjectCard imageUrl={"https://framerusercontent.com/images/yEb2QxkegAytnoF9JY32GzbOw.jpg?scale-down-to=512"} title={"Spectrum Synergy"} category={"Products desgine"} date={"Nov 9, 2023"}/>
                </div>
            </div>
        </div>
    )
}
