import React, {Component} from 'react';
import HoverCounter from "../HoverCounter";
import ThemeContext from './Component/ContextApi/themeContext'

class Section extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                <HoverCounter></HoverCounter>
            </ThemeContext.Consumer>

        );
    }
};

export default Section;