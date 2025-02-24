import { useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeHero from '../components/HomeHero';
import HomeServices from '../components/HomeServices';

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>  
            {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
            <div className={`min-h-screen bg-deepPurple/20 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <HomeNav />
                
                <HomeHero />

                <HomeServices />

                <Footer />
            </div>
        </>
    );
}