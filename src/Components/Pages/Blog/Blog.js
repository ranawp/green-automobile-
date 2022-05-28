import React from 'react';
import code from '../../../assets/images/code.PNG'

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <article>
                <h4 className='text-center font-bold text-4xl text-primary mt-10'>Blogs</h4>
                <h2 className='mt-10 text-secondary font-bold text-2xl'>How will you improve the performance of a React Application?</h2>
                <p>Performence optimizing in areat application
                    Optimizing application performance is important for developers who are aware of their hiring and recruiting in the app to keep the user experience positive.

                    According to research by Akamai, a second delay in load times can reduce conversions by up to 7 percent, making it essential for developers to build apps with optimized performance.
                    In responsive applications, we ensure a very fast UI by default However, as an application grows, developers may experience some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of responsive applications, including pre-optimization strategies.

                </p>

                <h2 className='mt-20 text-secondary font-bold text-2xl'>How will you improve the performance of a React Application?</h2>
                <p>Managing statuses in your React app is not as easy as using UsStat or UserReduser.

                    There are often dozens of ways to manage each type, not just many types of states. Which should you choose?

                    In this guide, we will uncover various situations in your feedback app that you were not aware of, as well as how to manage them most effectively.</p>
                <p>Four types of response conditions for management
                    When we talk about the state in our applications, it is important to be clear about what kind of state is really important.

                    There are four main types of states in your feedback apps that you need to manage properly:</p>
                <p> 1.Local state</p>
                <p> 2.Global state</p>
                <p>  3.Server state</p>
                <p> 4.URL state</p>

                <h2 className='mt-20 text-secondary font-bold text-2xl'>       How does prototypical inheritance work? </h2>

                <p>Each object has an internal and hidden property with methods and properties known as Prototype . Prototype inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, we use Prototype of an object to get and set</p>

                <p>JavaScript is a prototype-based, object-oriented programming language. Since the ES6 update, JavaScript has allowed for "prototype legacy", which means that objects and methods can be shared, extended, and copied.

                    Sharing between objects creates simple inheritance of structures (data fields), behaviors (functions/methods), and conditions (data values).
                    JavaScript is the most common prototype language and its features are relatively unique. Used correctly, Prototype Legacy in JavaScript is a powerful tool that can save you hours of coding.
                </p>


                <h2 className='mt-20 text-secondary font-bold text-2xl'>   You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name? </h2>
                <p>We can use find method. array.find() </p>
                <p className='font-bold'>code example</p>
                <img src={code} alt="" />
                <h2 className='mt-20 text-secondary font-bold text-2xl'>  What is a unit test? Why should write unit tests? </h2>

                <p>Test rooms are a way to test a room - the smallest number of numbers that can be separated in a system. In most programming languages, it is a function, a subroutine, a method or a tool. Separation of key points. In his book Working Well with the Law, author Michael Feathers says that these experiments are not experimental tests when based on the outside world:</p>
                <h2> Why should write unit tests?</h2>
                <p>This is the main advantage of unit testing. When you add more features to a software, you may have to change the old design and code, and this can be costly and risky. Using the unit testing method can save a lot of time and make the whole process much faster and easier.</p>
            </article>
        </div>
    );
};

export default Blog;