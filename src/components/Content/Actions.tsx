import CustomButton from "./Button";

const Actions = () => {
    const handleDelete = () => {
        // ...
    }
    return (
        <>
            <div className='actions flex-col'>
                <div className='input-line'>
                    <input type="checkbox" className='custom-checkbox' />
                    <p className='email-note custom-font-text'>
                        Show my profile to serious employers on <a href="#" className='external-link'>hirethesbest.io</a> for free
                    </p>
                </div>
                <div className='delete-banner'>
                    <h3 className='custom-font-text'>Delete account</h3>
                    <p className='custom-font-text'>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
                    <CustomButton label="Yes, Delete my account" className="link-button action-button" handleClick={handleDelete} />
                </div>
            </div>
            <div className='support-note custom-font-text'>
                <a href="#" className='external-link'>Get in touch with our support team</a> if you have any question or want to leave some feedback.
                We’ll be happy to hear from you.
            </div>
        </>
    );
}

export default Actions;