import React from "react";

function Header({ name, contact }) {
    return (
        <header className="header">
            <div className="name-title">
                <h1>{name}</h1>
            </div>
            <div className="contact">
                <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p>Web: <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
                <p>Mobile: {contact.phone}</p>
            </div>
        </header>
    );
}

export default Header;
