import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {

        const {title, image, description} = this.props.project;

        return (
            <div style={{display: 'inline-block', width: 400, margin: 20}}>
                <h3>{title}</h3>
                <img src ={image} alt='profile' style={{width: 400, height: 320}}/>
                <p>{description}</p>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
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
