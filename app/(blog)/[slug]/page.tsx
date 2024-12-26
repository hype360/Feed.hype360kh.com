// This would typically come from your API or CMS based on the slug
const getPostBySlug = (slug: string) => {
    // Simulating API call
    return {
        title: "Getting Started with Next.js 13",
        excerpt: "Learn how to build modern web applications with Next.js 13 and its powerful features.",
        date: "2023-04-15",
        author: {
            name: "Jane Doe",
            image: "/images/jane-doe.jpg"
        },
        category: "Web Development",
        tags: ["Next.js", "React", "JavaScript"],
        slug: "getting-started-with-nextjs-13",
        imageUrl: "/images/nextjs-banner.jpg",
        content: "This is the full content of the blog post. It would typically be much longer and formatted with Markdown or HTML."
    }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return (
        <div className="container mx-auto px-4 py-8">
<h1>h</h1>
        </div>
    )
}

