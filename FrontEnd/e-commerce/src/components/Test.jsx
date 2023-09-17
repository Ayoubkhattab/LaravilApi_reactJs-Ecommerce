import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Test({ categories }) {

    const [slides, setSlides] = useState([]); //لتخزين الشرايح 
    const [size, setSize] = useState("med") //لتخزين حجم الشاشة

    const ScreenSize = () => { //  اعادة حجم الشاشة اذا تغيرت
        const widthScreen = window.innerWidth;
        if (widthScreen < 640)
            setSize('small')
        else if (widthScreen < 868)
            setSize('med')
        else setSize('large')

    }
    // مراقبة اي تغيير في الشاشة  واعادة النفيذ اذا تغيرت 
    useEffect(() => {
        ScreenSize();
        window.addEventListener("resize", ScreenSize);

        return () => {
            window.removeEventListener("resize", ScreenSize);
        };
    }, []);


    // تحديد حجم الكارد الي رح تطلع على الشاشة بناء على حجم الشاشة 

    const chunkSize = size === "small" ? 1 : size === "med" ? 2 : 3;


    // تقسيم كاتيجوري  إلى شرائح بناءً على حجم الكارد
    useEffect(() => {
        // إعداد مصفوفة لتخزين الشرائح المقسمة
        const chunkedCategories = [];
        // إجراء حلقة للانتقال عبر كاتيجوري وتقسيمها إلى شرائح
        for (let i = 0; i < categories.length; i += chunkSize) {
            //slice استخدام دالة 
            //  لقطع قسم من مصفوفة كاتيجوري وإضافتها إلى مصفوفة الشرايح
            chunkedCategories.push(categories.slice(i, i + chunkSize));
        }
        // تعيين مصفوفة الشرائح المقسمة إلى حالة الـ state باستخدام `setSlides`
        setSlides(chunkedCategories);
    }, [categories, chunkSize]);



    return (
        <div className='justify-center items-center h-screen'>
            <div className='p-4 rounded-lg'>
                <Carousel //   مكتبه 
                    showArrows={true}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                    autoPlay={true}
                    showThumbs={false}
                    interval={2000}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div className='flex flex-row gap-1 items-center'>
                                {slide.map((category) => (
                                    <div key={category.id} className='relative  overflow-hidden rounded-lg bg-white'>
                                        <img
                                            className='block w-full h-auto object-cover sm:w-80 sm:h-80'

                                            // src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="

                                            src={`http://localhost:8000/uploads/${category.image}`}

                                            alt='...'
                                        />
                                        <div className='pb-20'>
                                            <h1 className='text-base p-3 text-gray-600'>{category.name}</h1>
                                        </div>
                                        <div className='pb-20'>
                                            <p className='text-base p-3 text-gray-600'>{category.slug}</p>
                                        </div>

                                        <Link
                                            to={`/category/${category.id}/products`}
                                            className='rounded-full bg-gray-800 w-30 p-3 m-3 hover:bg-cyan-800 font-serif font-bold text-white text-center absolute bottom-0 left-0 right-0'
                                        >
                                            <button>Show Products</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

