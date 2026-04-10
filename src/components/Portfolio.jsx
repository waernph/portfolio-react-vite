import Card from './Card'

import KeyboardImg from '../assets/Graphics/keyboard-case.webp'
import BankAppImg from '../assets/Graphics/Bank_app.webp'
import BrewHub from '../assets/Graphics/brewhub.webp'
import Shotgun from '../assets/Graphics/Shotsgun_img.webp'


function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className='Projects'>
                <Card
                    title={"Keybaord"}
                    descripton={"My own project in trying to make a keyboard using HTML, CSS, JavaScript and Web Audio API."}
                    imgUrl={KeyboardImg}
                    gitHubUrl={"https://github.com/waernph/Keyboard"}
                    testMeUrl={"https://keyboard.wrn.se/"} />

                <Card
                    title={"Bank App API"}
                    descripton={"An assignment to build an API for a bank. Some of the techniques used are Entity Framework, Controllers, JWT for authorization and authentication, AutoMapper Swagger"}
                    imgUrl={BankAppImg}
                    gitHubUrl={'https://github.com/waernph/BankOfWaern.git'}
                    testMeUrl={''} />

                <Card
                    title={"BrewHub API"}
                    descripton={'An assignment to build an API for a forum. Some of the techiques used are Entity Framework, Controllers, JWT for autharization and authentication, AutoMapper Swagger'}
                    imgUrl={BrewHub}
                    gitHubUrl={'https://github.com/waernph/BrewHub.git'}
                    testMeUrl={''} />

                <Card
                    title={"Shotgun"}
                    descripton={'A console game developed as an examination project during the course C#/.NET Basics'}
                    imgUrl={Shotgun}
                    gitHubUrl={'https://github.com/waernph/shotgun3.git'}
                    testMeUrl={''} />
            </div>
        </section>
    )
}
export default Portfolio;