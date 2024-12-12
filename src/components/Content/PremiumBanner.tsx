import Premium from '@/assets/icons/Premium.svg'

const PremiumBanner = () => {
    return (
        <div className='banner flex-row'>
            <img src={Premium} alt="premium banner icon" width="8%" />
            <div className='banner-content flex-col'>
                <h3 className='banner-title custom-font-text'>Premium account</h3>
                <p className='banner-subtitle custom-font-text'>
                    You have a premium account, granting you access to all the remarkable features offered by ResumeDone.
                    With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes
                    and cover letters in both PDF and Word formats.
                </p>
            </div>
        </div>
    );
}

export default PremiumBanner;