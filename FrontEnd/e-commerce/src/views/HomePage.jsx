import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import CategoryCard from '../components/Card/CategoryCard';
import categoryApi from '../Api/Category/Category';
import WelcomSection from './Section/WelcomeSection';
import Test from '../components/Test';
import About from './Section/About';
import Footer from './Section/Footer';
import Contact from './Section/Contact';


export default function HomePage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryApi.getAll()
            .then((categoryData) => {
                // console.log(categoryData);
                setCategories(categoryData);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    // console.log("data ", categories);



    return (
        <div >
            <Navbar />

            <WelcomSection />

            <section id='categorySection'>
                <CategoryCard categories={categories} />
            </section>

            <Test categories={categories} />

            <section id='aboutSection'>
                <About />
            </section>

            <section id="contactSection">
                <Contact />
            </section>

            <section >
                <Footer />
            </section>

        </div>
    );
}
