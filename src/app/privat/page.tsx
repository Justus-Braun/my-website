import fs from 'fs';
import Link from 'next/link';
import path from 'path'

export default function PrivatPage() {
    const dirRelativeToPublicFolder = 'files'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const folders = fs.readdirSync(dir);
    
    return (
        <main>
            <div className="h-full w-full min-h-screen">
                <div className='flex flex-col p-10'>
                    {folders.map((file, index) => (
                        <Link key={index} href={"/privat/" + file}>
                            <p className='hover:text-green-500'>{file}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
