import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const { logout, user } = useAuth();

    return (
        <>
            {user?.email && (
                <div className="App">
                    <button onClick={logout}>Logout</button>
                    <h1>Welcome {user.displayName}</h1>
                    {/* <img src={user.img} alt={user.name} /> */}
                </div>
            )}
        </>
    );
};

export default Home;
