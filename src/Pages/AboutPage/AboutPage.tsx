
const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen gap-2 dark:text-white">
            <div className="w-2/5 m-auto">
                <h1 className="mt-5 mb-10 font-mono text-5xl text-center">About The Project</h1>
                <p className="m-5">
                    Welcome to our React-based platform, designed to provide a comprehensive tool for both business owners and individuals looking for services or products. This project was built as part of a React module, showcasing a variety of essential features for a dynamic business directory.

                    Our platform allows users to effortlessly search for businesses based on keywords and provides a space for business owners to create and showcase their business cards. With a simple and intuitive interface, users can find relevant services quickly, while businesses can easily promote their offerings.
                </p>
                <p>
                    <h2 className="mt-5 mb-10">Key Features:</h2>
                    <ul className="list-disc">
                        <li>Business Card Creation: Business users can create customized business cards that highlight their services and products, making it easier for potential clients to find them.</li>
                        <li>Search Functionality: Users can search for businesses using keywords, enabling them to find specific services or products tailored to their needs.</li>
                        <li> Like Feature: Users can like business cards, adding a social element that helps popular businesses stand out.
                            Registration and Login: Our platform includes a registration and login system with validation, ensuring a secure and personalized experience for every user.</li>
                    </ul>
                </p>

                <p>
                    <h2 className="mt-5 mb-10">API Integration:</h2>
                    Our platform features an API interface that facilitates seamless data retrieval and storage. This integration enhances the efficiency and responsiveness of the application, providing users with quick access to relevant business information.

                    Whether you’re looking to promote your business or find the services you need, our platform offers a user-friendly solution that connects people with businesses in a meaningful way.
                </p>
            </div>
        </div>
    )
};

export default AboutPage;