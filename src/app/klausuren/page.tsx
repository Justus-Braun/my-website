import Link from "next/link"

export default function Page() {
    return (
        <main>
            <div className="h-screen w-4/6 flex flex-col justify-center content-center mx-auto">
                <div className="bg-red-600">
                    <p className="text-5xl">DIESE WEBSITE IST AUFGRUND EINER URHEBERRECHTSVERLETZUNG NICHT MEHR VERFÜGBAR.</p>
                </div>

                <Link href="https://www.h-brs.de/de" className="bg-blue-600 text-3xl">
                    Hochschule Bonn-Rhein-Sieg
                </Link>
            </div>
        </main>
    )
}