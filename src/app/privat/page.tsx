import fs from 'fs';
import Link from 'next/link';
import path from 'path'

export default function PrivatPage() {
    const dirRelativeToPublicFolder = 'files'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const folders = fs.readdirSync(dir);



    return (
        <main>
            <div className="h-screen w-screen">
                {folders.map((file, index) => (
                    <Link key={index} href={"/privat/" + file}>
                        <p>{file}</p>     
                    </Link>
                ))}
            </div>
        </main>
    );
}