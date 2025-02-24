import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import Footer from '../components/Footer';
import LandingNav from '../components/LandingNav';
import LandingHero from '../components/LandingHero';
import LandingServices from '../components/LandingServices';

export default function Landing() {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isSignedIn) {
            navigate('/HomePage');
        }
    }, [isSignedIn, navigate]);

    return (
        <>  
            {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
            <div className={`min-h-screen bg-deepPurple/10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <LandingNav />

                <LandingHero />

                <LandingServices />

                <Footer />
            </div>
        </>
    );
}
