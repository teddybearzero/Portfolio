import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {

        const {title, image, description} = this.props.project;

        return (
            <div style={{display: 'inline-block', width: 500, margin: 40}}>
                <h3>{title}</h3>
                <img src ={image} alt='profile' style={{width: 500, height: 320}}/>
                <p>{description}</p>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Work Projects</h2>
                <div> {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key ={PROJECT.id}
                                project={PROJECT}/>
                        );
                    })
                } </div>
            </div>

        )
    }
}

export default Projects;
