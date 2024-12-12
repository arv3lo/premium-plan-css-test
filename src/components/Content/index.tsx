import PremiumBanner from './PremiumBanner';
import Form from './Form';
import Actions from './Actions';
import Footer from './Footer';

const MainContent = () => {

    return (
        <div className='main-content'>
            <div className='content'>
                <PremiumBanner />
                <div className='personal-infos'>
                    <Form />
                    <Actions />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;