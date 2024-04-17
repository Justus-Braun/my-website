import path from 'path';
import fs from 'fs';
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string[] } }) {
    const dirRelativeToPublicFolderOrFile = params.slug.join('/');

    if (dirRelativeToPublicFolderOrFile.endsWith('.pdf')) {
        return (
            <main>
                <div className='h-screen w-screen'>
                    <embed src={'/files/' + dirRelativeToPublicFolderOrFile} 
                        type='application/pdf'
                        width='100%'
                        height='100%'
                     />
                </div>
            </main>
        );
    }
    
    const dir = decodeURIComponent(path.resolve('./public/files/', dirRelativeToPublicFolderOrFile));

    const folders = fs.readdirSync(dir);

    return (
        <main>
            <div className='h-screen w-screen'>
                <div className='flex flex-col p-10'>
                    <Link href={'/privat/' + params.slug.slice(0, -1).join('/')}>
                        <p className='hover:text-green-500'>Back</p>
                    </Link>
                    {folders.map((file, index) => (
                        <Link key={index} href={'/privat/' + params.slug.join('/') + '/' + file}>
                            <p className='hover:text-green-500'>{file}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}