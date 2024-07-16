import React from 'react';
import hero from "../../assets/hero.png"
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Plan Your Perfect Trip with AI
                    </h1>
                    <p className="text-lg mb-6">
                        Our AI-powered trip planner helps you create personalized itineraries in seconds. Discover new destinations, manage your bookings, and enjoy a hassle-free travel experience.
                    </p>
                    <Link to={'/create-trip'}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded text-lg">
                        Plan your Trip
                    </Button>
                    </Link>
                </div>
                <div className="flex-1 mt-10 md:mt-0">
                    <img src={hero} alt="AI Trip Planner" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
