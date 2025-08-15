type Props = {
    params: { slug?: string[] };
};

export default async function DocsPage({ params }: Props) {
    return (
        <div>
        <h1>Docs page : {params.slug?.join(" / ") || "home"}</h1>
        </div>
    );
}