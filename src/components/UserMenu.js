import React from 'react';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
  };

  const UserMenu = ({avatar, name, onLogout}) => (
      <div style={styles.container}>
       <img src={avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {name}</span> 
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
  );

  export default UserMenu;