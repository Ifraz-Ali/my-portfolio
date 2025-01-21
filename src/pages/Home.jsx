import React from 'react';
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import profile from "../assets/profile.jpeg";
import code from "../assets/coding.webp";
import consulting from "../assets/consulting-2.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import cv from "../assets/Ifraz-Ali-CV.pdf";
import AutoWriteText from "../components/AutoWrite";


export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const handleURL = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-8 mb-2 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl">developed by ifraz</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <button
                                    className="bg-gradient-to-r from-cyan-400 to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8"
                                    onClick={() => handleURL(cv)}
                                >
                                    Resume
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-1">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            Ifraz Ali
                        </h2>
                        <h3 className="text-2xl text-amber-600 py-2 dark:text-amber-500 md:text-3xl">
                            <AutoWriteText />
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            Freelancer providing services for front-end programming <br /> Hop on board, and let’s make your vision a reality!"
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <AiFillGithub
                                onClick={() => handleURL("https://github.com/Ifraz-Ali")}
                                className="cursor-pointer hover:text-black" />
                            <AiFillLinkedin
                                onClick={() => handleURL("https://www.linkedin.com/in/ifraz-ali-1430a82a9/")}
                                className="cursor-pointer hover:text-blue-600"
                            />
                            <AiFillInstagram
                                onClick={() => handleURL("https://www.instagram.com/dev.ifraz/")}
                                className="cursor-pointer hover:text-rose-500" />

                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                            <img src={profile} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance
                            developer, I've done remote work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products
                            for both business and consumer use.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 dark:shadow-2xl flex-1">
                            <div className="flex justify-center items-center">
                                <img src={code} width={320} height={320} />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                                Code your dream project
                            </h3>
                            <p className="py-2 dark:text-white">
                                Do you have an idea for your next great website? Let's make it a
                                reality.
                            </p>
                            <h4 className="py-4 text-teal-600 font-medium">Design Tools I Use</h4>
                            <ul>
                                <li className="flex py-2 ">
                                    <img src={html} alt="html icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300 ">
                                        Html</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={css} alt="css icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300 ">
                                        CSS</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={js} alt="js icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300 ">
                                        JavaScript</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={react} alt="react icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300 ">
                                        React</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 dark:shadow-2xl flex-1">
                            <div className="flex justify-center items-center">
                                <img src={consulting} width={260} height={300} />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Consulting</h3>
                            <p className="py-2 dark:text-white">
                                Are you interested in feedback for your current project? I can
                                give you tips and tricks to level it up.
                            </p>
                            <h4 className="py-4 text-teal-600 font-medium">Design Tools I Use</h4>
                            <ul>
                                <li className="flex py-2 ">
                                    <img src={html} alt="html icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300">
                                        Html</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={css} alt="css icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800  dark:text-gray-300">
                                        CSS</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={js} alt="js icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300 ">
                                        JavaScript</p>
                                </li>
                                <li className="flex py-2">
                                    <img src={react} alt="react icon" width={30} height={30} />
                                    <p className="w-10/12 pl-3 text-gray-800 dark:text-gray-300">
                                        React</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            From the start of my journey as a front-end developer, I have collaborated with
                            <span className="text-teal-500"> agencies</span>,
                            <span className="text-teal-500"> startups</span>
                            , and talented individuals to craft engaging, user-friendly digital experiences. My work spans creating responsive websites, optimizing performance, and bringing designs to life with clean and efficient code.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer a wide range of services, including web development, UI/UX implementation, and interactive design, tailored to meet the needs of businesses and individuals alike.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web4}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web5}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web6}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}
