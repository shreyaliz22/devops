import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.stockcake.com/public/3/0/2/3024a869-32df-4e8b-8cdf-60502a61c08a_large/reading-together-happily-stockcake.jpg" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    A digital library is an online collection of books, research papers, articles, and multimedia resources that can be accessed anytime, anywhere. Unlike traditional libraries, digital libraries offer instant access, searchability, and remote availability, making learning more convenient. They support e-books, audiobooks, and interactive content, helping students, researchers, and readers explore vast knowledge efficiently..<br/>
                        <br/>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        Latin words, consectetur, from a Lorem Ipsum passage.<br/>
                        <br/>
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected 
                        humour<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
