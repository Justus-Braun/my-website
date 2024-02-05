export default function DisplayFile({ 
        params, 
        searchParams 
    }: {     
        params: { string: string }; 
        searchParams?: {[key: string]: string | string[] | undefined }; 
    }) {
    return (
        <main>
            <div className="h-screen w-screen">
                <embed
                    src={"/files/" + params.string + "/" + searchParams?.file}
                    type="application/pdf"
                    width="100%"
                    height="100%" 
                />
            </div>
        </main>
    );
}
