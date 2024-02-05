import fs from 'fs';
import Link from 'next/link';
import path from 'path'

export default function String({ params }: any) {
    const dirRelativeToPublicFolder = 'files'

    const secondFolder = params.string;

    const dir = path.resolve('./public', dirRelativeToPublicFolder + "/" + secondFolder);

    const files = fs.readdirSync(dir);

    return (
        <main>
            <div className="h-screen w-screen">
                {files.map((file, index) => (
                    <Link key={index} href={"/privat/file/" + secondFolder + "?file=" + file}>
                        <p>{file}</p>     
                    </Link>
                ))}
            </div>
        </main>
    );
}