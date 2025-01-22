import profilePic from "./assets/profile.jpg"

function Reviews() {
    return(
        <div className="reviews">
            <div className="reviewItem">
                <p className="rating">Rating:</p>
                <div className="content">
                    <img src={profilePic} alt="Default profile pic" />
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit faucibus tincidunt ac potenti bibendum senectus donec.</p>
                </div>
            </div>
            <div className="reviewItem">
                <p className="rating">Rating:</p>
                <div className="content">
                    <img src={profilePic} alt="Default profile pic" />
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit faucibus tincidunt ac potenti bibendum senectus donec.</p>
                </div>
            </div>
            <div className="reviewItem">
                <p className="rating">Rating:</p>
                <div className="content">
                    <img src={profilePic} alt="Default profile pic" />
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit faucibus tincidunt ac potenti bibendum senectus donec.</p>
                </div>
            </div>
            <div className="reviewItem">
                <p className="rating">Rating:</p>
                <div className="content">
                    <img src={profilePic} alt="Default profile pic" />
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit faucibus tincidunt ac potenti bibendum senectus donec.</p>
                </div>
            </div>
        </div>
    )
 }

export default Reviews;