
export default function MenuNavbar({ text, target }) {

    const scrollToCategories = () => {
        const categoriesSection = document.getElementById(target);
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (


        <a
            onClick={scrollToCategories}
            className="px-4 py-2 mt-2 text-sm text-black font-semibold bg-transparent rounded-lg   hover:bg-gray-300 dark-mode:focus:bg-gray-600 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline duration-300"
        >
            {text}
        </a>

    )
}
