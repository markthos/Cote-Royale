import Image from "next/image"

export const NavBar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="flex">
                    <button className="p-2">Menu</button>

                    <div className="absolute">
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