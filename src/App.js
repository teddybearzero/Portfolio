import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'

class App extends Component {

    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                {
                this.state.displayBio ? (
                    <div>
                        <p>I am a highly adaptable individual</p>
                        <p>with both academic and practical IT industry skills, capable of working both independently or within a team.
                        </p>
                        <p>
                            I am looking for a suitable position, which will prove to be both a personal and professional challenge.</p>
                        <button onClick={
                            this.toggleDisplayBio
                        }>Show Less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={
                            this.toggleDisplayBio
                        }>Read more</button>
                    </div>
                )
            }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>


            </div>
        )
    }
}

export default App;
