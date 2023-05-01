export default function Content({title, content}) {
    const spans = content.split("-.-");
    console.log(spans)

    return (
        <div className="ml-2 w-3/4 px-4">
            <span className="text-3xl font-bold">{title}</span>
            <div className="flex flex-col mt-8">
                {spans.map((substring, index) => (
                    <span className="text-md mb-2" key={index}>{substring}</span>
                ))}
            </div>
        </div>
    )
}