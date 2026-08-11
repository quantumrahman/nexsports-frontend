'use client';

export default function RegisterForm() {
    return (
        <form>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="w-full flex flex-col">
                    <label
                        htmlFor="name"
                        className="w-full block text-sm font-medium text-neutral-950"
                    >
                        Full name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full bg-transparent border border-neutral-200 rounded-lg py-2 px-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-600 caret-green-600 font-medium placeholder:font-normal transition-all duration-200 ease-linear mt-2"
                    />
                    <span className="h-4 w-full block text-red-600 text-xs font-medium text-right mt-1">
                        {/* Error! */}
                    </span>
                </div>
                <div className="w-full flex flex-col">
                    <label
                        htmlFor="photo"
                        className="w-full block text-sm font-medium text-neutral-950"
                    >
                        Photo
                    </label>
                    <input
                        type="text"
                        id="photo"
                        placeholder="Enter photo url"
                        className="w-full bg-transparent border border-neutral-200 rounded-lg py-2 px-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-600 caret-green-600 font-medium placeholder:font-normal transition-all duration-200 ease-linear mt-2"
                    />
                    <span className="h-4 w-full block text-red-600 text-xs font-medium text-right mt-1">
                        {/* Error! */}
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <label
                    htmlFor="email"
                    className="w-full block text-sm font-medium text-neutral-950"
                >
                    Email address
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full bg-transparent border border-neutral-200 rounded-lg py-2 px-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-600 caret-green-600 font-medium placeholder:font-normal transition-all duration-200 ease-linear mt-2"
                />
                <span className="h-4 w-full block text-red-600 text-xs font-medium text-right mt-1">
                    {/* Error! */}
                </span>
            </div>
            <div className="w-full flex flex-col">
                <label
                    htmlFor="password"
                    className="w-full block text-sm font-medium text-neutral-950"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    aria-label="input"
                    role="input"
                    placeholder="Create a password"
                    className="w-full bg-transparent border border-neutral-200 rounded-lg py-2 px-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-600 caret-green-600 font-medium placeholder:font-normal transition-all duration-200 ease-linear mt-2"
                />
                <span className="h-4 w-full block text-red-600 text-xs font-medium text-right mt-1">
                    {/* Error! */}
                </span>
            </div>
            <button
                type="submit"
                aria-label="button"
                role="button"
                className="w-full bg-green-600 text-sm font-medium text-white h-[38px] cursor-pointer hover:bg-green-500 transition-all duration-200 ease-linear rounded-lg mt-1"
            >
                Continue
            </button>
        </form>
    );
}
