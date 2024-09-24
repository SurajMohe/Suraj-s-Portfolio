import React from 'react';
import './MyWorkPage.css';
import { Navbar } from '../../components/navbar/Navbar';
import { ProjectCard } from '../../components/projectCard/ProjectCard';
import { ConnectComponent } from '../../components/connectComponent/ConnectComponent';
import { FourthPage } from '../fourthPage/FourthPage';

export const MyWorkPage = () => {

    // const selectedImagesAnimation = [
    //     "https://framerusercontent.com/images/pcfMIKyvw4lvoRsWBXxywx5E.jpg?scale-down-to=512",
    //     "https://framerusercontent.com/images/vuE1v2PFL5DxrtxYT34f858DV0.jpg?scale-down-to=512",
    //     "https://framerusercontent.com/images/vuE1v2PFL5DxrtxYT34f858DV0.jpg?scale-down-to=512",
    //     "https://framerusercontent.com/images/yEb2QxkegAytnoF9JY32GzbOw.jpg?scale-down-to=512",

    // ];

    return (
        <div className='my-work-page-container'>
            <Navbar />
            <div className='my-work-text-container'>
                <h1 className='project-text'>Projects</h1>
                <p className='my-work-paragraph'>
                    Check out some of my design projects, meticulously crafted with love and dedication.
                </p>
            </div>
            <div className="project-container">
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/pcfMIKyvw4lvoRsWBXxywx5E.jpg?scale-down-to=512"
                    title="Ethereal Elements"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/XyIwUjlrEIvs0MZKpuLUOF2RPk.jpg?scale-down-to=512"
                    title="Spectrum Synergy"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/vuE1v2PFL5DxrtxYT34f858DV0.jpg?scale-down-to=512"
                    title="Spectrum Synergy"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/QVb89Ag76Mq9vC5FFaRyqO2go.jpg?scale-down-to=512"
                    title="Spectrum Synergy"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/DLr206pUv6FysbQV4cr3H5iZ4k.jpg?scale-down-to=512"
                    title="Spectrum Synergy"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
                <ProjectCard
                    imageUrl="https://framerusercontent.com/images/yEb2QxkegAytnoF9JY32GzbOw.jpg?scale-down-to=512"
                    title="Spectrum Synergy"
                    category="Product Design"
                    date="Nov 9, 2023"
                />
            </div>
            <div className='connect-and-selected-dribbble'>
                <ConnectComponent />
                <div className='selected-dribbble-shots-main-container'>
                    <div className="selected-text-container">
                        <h1 className='selected-heading-text'>Selected <span>Dribbble</span> Shots</h1>

                    </div>
                </div>
            </div>
            <FourthPage />
        </div>
    );
};
