import React from 'react';

const ProfileDropdown = () => {
    const container = {
        width: 25,
        height: 25,
        borderRadius: 20,
        overflow: 'hidden'
    }
    const image = {
        width: '100%',
        height: 'auto',
        
    }
    return (
        <div style={container}>
            <img 
                style={image}
                src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY256_CR42,0,172,256_AL_.jpg" 
                alt="Your Profile" />
        </div>
    )
}
 
export default ProfileDropdown;