import React from 'react'

export const AvatarSymplia = () => {
return (
    <div className="flex flex-wrap justify-center gap-1 cursor-pointer ">
        <div className="relative">
            <img className="h-10 w-10 rounded-full border-cyan-500"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User Symplia" />
            <div className="absolute -top-1 -right-3 flex items-center justify-center h-5 w-5 bg-sky-600 rounded-full ">
                <p className="text-white text-xs">09</p>
            </div>
        </div>

    </div>
);
}

export default AvatarSymplia