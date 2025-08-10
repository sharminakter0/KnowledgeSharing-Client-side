import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="w-9/12 mx-auto mt-15 p-6 bg-base-100 shadow-lg border rounded-lg items-center  flex flex-col text-center ">
            <div className='
            '>
                <img src={user.photoURL}
                 alt="User" className="w-25 h-25 rounded-full border items-center ml-8"
                />
                <h2 className="text-2xl font-bold mt-5">{user.displayName}

                </h2>
                <p>{user.email}</p>


            </div>
            
        </div>
    );
};

export default MyProfile;