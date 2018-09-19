import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar history={this.props.history} />
                        {this.props.children}
                    <Footer />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;