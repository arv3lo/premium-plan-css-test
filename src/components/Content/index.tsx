import PremiumBanner from './PremiumBanner';
import Form from './Form';
import Actions from './Actions';
import Footer from './Footer';

const MainContent = () => {

    return (
        <div className='main-content flex-col'>
            <div className='content flex-col'>
                <PremiumBanner />
                <div className='personal-infos  flex-col'>
                    <Form />
                    <Actions />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;