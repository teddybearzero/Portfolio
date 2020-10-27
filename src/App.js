import React, { Component} from 'react'; 

class App extends Component {

    constructor(){
        super();
        this.state = {displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this); 
    }

    //doesn't work
    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio}); 
    }
    
    render() { 
        return(
            <div>
                <h1>Hello!</h1>
                {  
                this.state.displayBio ? ( 
                 <div>
                    <p>I am a highly adaptable individual</p>
                    <p>with both academic and practical IT industry skills, capable of working both independently or within a team. </p>
                    <p> I am looking for a suitable position, which will prove to be both a personal and professional challenge.</p>
                    <button onClick = {this.displayBio}>Show Less</button>
                 </div>
                ) : (
                    <div>
                        <button onClick = {this.displayBio}>Read more</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default App; 