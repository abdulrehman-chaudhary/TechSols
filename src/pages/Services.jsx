import React from 'react';
import ServicesSection from '../components/ui/Cards';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import DetailedServicesSection from '../components/ui/DetailServices';

const Services = () => {
    return (
        <>
            <Header />
            <ServicesSection />
            <DetailedServicesSection/>
            <Footer />
        </>
    );
};

export default Services;
