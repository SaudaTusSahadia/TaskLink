import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='max-h-screen flex justify-center items-center mt-20'>
                <span className="loading loading-spinner text-warning text-2xl"></span>
            </div>
        </div>
    );
};

export default Loading;