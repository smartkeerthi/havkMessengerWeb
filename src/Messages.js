import React from "react";
import "./App.css";

function Messages({username,mes}) {
    const user = username === mes.username;
    return(
        <div className="mt-5 mb-5">
            <div className={ user ? "card userCard bg-primary " : "card otherCard bg-secondary"}>
                <div className="card-body p-1">
                    <p className="card-title text-dark text-capitalize font-weight-bold"> {mes.username} </p>
                    <h5 className="card-text text-light"> {mes.text} </h5>
                </div>
            </div>
        </div>
    );
}

export default Messages;