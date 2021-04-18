import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import img from '../../Images/blog.jpg';
import './Blog.css'

const Blog = () => {
    return (
        <main>
            <Navbar />
            <div className="container">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="container">
                <p className="text-white text-justify my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet quo quaerat. Officiis cum adipisci omnis qui necessitatibus sit non voluptatum natus deleniti animi? Dicta deleniti nam obcaecati laborum voluptate explicabo culpa accusamus ullam veniam? Officia, dolore. Vel libero quo aliquam mollitia iste hic consequatur! Delectus similique consectetur nulla provident in earum odit debitis! Sunt quasi quisquam hic vero. Libero quisquam repellendus porro necessitatibus enim ratione aperiam, optio odit tempore debitis, aliquid quibusdam molestias nobis minima adipisci laborum facilis facere quam quaerat nam cum in sit eos! Corrupti, sed excepturi? Provident odit amet corporis commodi totam eius, ex laudantium nisi?
                </p>
            </div>
            <Footer />
        </main>
    );
};

export default Blog;