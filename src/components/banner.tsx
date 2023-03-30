import { NextComponentType } from "next"
import Style from "@/scss/banner.module.scss"

const Banner: NextComponentType = () => {
    return(
        <div className="banner">
            <div className="container scrollcx">
                <svg viewBox="0 0 1400 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M32 10.0004C34.419 10.0004 36.4367 8.28262 36.9 6.00038H472.1C472.563 8.28262 474.581 10.0004 477 10.0004C479.419 10.0004 481.437 8.28262 481.9 6.00038H917.1C917.563 8.28262 919.581 10.0004 922 10.0004C924.419 10.0004 926.437 8.28262 926.9 6.00038L1362.1 6.00035C1362.56 8.28259 1364.58 10.0004 1367 10.0004C1369.76 10.0004 1372 7.76177 1372 5.00035C1372 2.23893 1369.76 0.000347614 1367 0.000347614C1364.58 0.000347614 1362.56 1.71811 1362.1 4.00035L926.9 4.00038C926.437 1.71814 924.419 0.000384808 922 0.000384808C919.581 0.000384808 917.563 1.71814 917.1 4.00038H481.9C481.437 1.71814 479.419 0.000384808 477 0.000384808C474.581 0.000384808 472.563 1.71814 472.1 4.00038H36.9C36.4367 1.71814 34.419 0.000384808 32 0.000384808C29.2386 0.000384808 27 2.23896 27 5.00038C27 7.7618 29.2386 10.0004 32 10.0004Z" fill="#D9D9D9"/>
                    <mask id="mask0_0_1" maskUnits="userSpaceOnUse" x="0" y="0" width="1400" height="10">
                    <path id="Vector" d="M32 10.0004C34.419 10.0004 36.4367 8.28262 36.9 6.00038H472.1C472.563 8.28262 474.581 10.0004 477 10.0004C479.419 10.0004 481.437 8.28262 481.9 6.00038H917.1C917.563 8.28262 919.581 10.0004 922 10.0004C924.419 10.0004 926.437 8.28262 926.9 6.00038L1362.1 6.00035C1362.56 8.28259 1364.58 10.0004 1367 10.0004C1369.76 10.0004 1372 7.76177 1372 5.00035C1372 2.23893 1369.76 0.000347614 1367 0.000347614C1364.58 0.000347614 1362.56 1.71811 1362.1 4.00035L926.9 4.00038C926.437 1.71814 924.419 0.000384808 922 0.000384808C919.581 0.000384808 917.563 1.71814 917.1 4.00038H481.9C481.437 1.71814 479.419 0.000384808 477 0.000384808C474.581 0.000384808 472.563 1.71814 472.1 4.00038H36.9C36.4367 1.71814 34.419 0.000384808 32 0.000384808C29.2386 0.000384808 27 2.23896 27 5.00038C27 7.7618 29.2386 10.0004 32 10.0004Z" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_0_1)">
                    <rect className="mask" y="-49" height="99" fill="black"/>
                    </g>
                </svg>
            </div>
            <section>
                <div className="text-box">
                    <p className="title">My Beginning with Programming</p>
                    <p className="text">I started in the world of programming when I was 12 years old, mostly out of curiosity. I began with the I DO CODE course, which introduced me to this world. During the course, I was able to develop myself as a programmer, learning languages such as Lua, Python, and JavaScript. At the time, I focused my projects more on areas such as robotics and game development, so I ended up developing my knowledge in Lua and Python during that time.</p>
                </div>
                <div className="image-box">

                </div>
            </section>
            <section>
                <div className="text-box">
                    <p className="title">Entering Technical High School</p>
                    <p className="text">Upon enrolling in the technical high school program for systems development at SENAI in 2021, I was able to focus more on programming and improve at a much faster rate. Additionally, during my first year in high school, I studied web technologies such as HTML, CSS, Javascript, React, Sass, and Firebase, and participated in a robotics competition called FLL, in which we broke a record score in our school.</p>
                </div>
                <div className="image-box">

                </div>
            </section>
            <section>
                <div className="text-box">
                    <p className="title">Diving into WebDev and AI / ML</p>
                    <p className="text">team where I delved into artificial intelligence projects using Python, PyTorch, TensorFlow, Pandas, NumPy, and more. My aim was to automate the process of formulating highway noise by creating an AI for counting and classifying cars. Alongside this, I also studied backend and frontend technologies, including MongoDB, Node, TypeScript, Express, React, and Next.js. I even explored a little bit of Rust programming language and completed various extracurricular projects and courses in both areas.</p>
                </div>
                <div className="image-box">

                </div>
            </section>
            <section>
                <div className="text-box">
                    <p className="title">Last year before college</p>
                    <p className="text">As I prepare to enter college, my goal is to attend a specific college, complete my article, and improve my skills in hybrid technologies like Tauri and React-Native, as well as web development with Next.js. I also completed the IBM Professional AI Engineering track and continue to study DevOps tools such as servers like CentOS and Ubuntu server, Kubernetes and Docker. I am continually improving my web development skills to become a complete Full-stack developer.</p>
                </div>
                <div className="image-box">

                </div>
            </section>
            <div className="wave">
                
            </div>
        </div>
    )
}

export default Banner