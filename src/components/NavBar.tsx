import Image from "next/image"

export const NavBar = () => {
    return (
        <header>
            <div className="navbar w-full fixed top-0 left-0 z-50 bg-black text-white">
                <div className="flex intems-center justify-between p-2 md:p-4">
                    <button className="p-2">Menu</button>

                    <div className="absolute left-1/2 -translate-x-1/2 transform">
                        <Image
                            src="/logo.svg"
                            alt="Cote Royale Paris"
                            width={180}
                            height={30}
                            className="w-32 m:w-44" />
                    </div>
                    
                    <div className="flex">Icons</div>
                </div>
            </div>

        </header>
    )
}