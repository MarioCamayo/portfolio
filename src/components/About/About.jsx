import  profile_img from '../../assets/IMG_Mario.jpg'

import './about.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img className='about-profile' src={profile_img} alt="image of profile" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p> My experence frontend Lorem ipsum dolor sit amet consectetur adipisicin.</p>
                    <p> My pasión for frontend Lorem ipsum dolor sit amet consectetur adipisicin.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>HTML & CSS</p><hr style={{width:'50%'}} />
                    </div>
                    <div className='about-skill'>
                        <p>React JS</p><hr style={{width:'50%'}} />
                    </div>
                    <div className='about-skill'>
                        <p>JavaScript</p><hr style={{width:'50%'}} />
                    </div>
                    <div className='about-skill'>
                        <p>BootsTrap</p><hr style={{width:'50%'}} />
                    </div>
                </div>
            </div>
             <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROYECTS COMPLETE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>

             </div>
        </div>
            
    </div>
  )
}

export default About