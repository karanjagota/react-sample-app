import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer style={footer_style}> This is the Footer of our React App. Put Anythin you want !! </footer> 
        );
    }
}

const footer_style = {
    color:'green',
    fontSize:'35px',
    position:'fixed',
    bottom:'0',
    width:'100%',
    backgroundColor: '#D3D3D3',
};

export default Footer;
