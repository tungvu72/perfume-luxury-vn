import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Đường dẫn đến thư mục content/buying-guides
const BUYING_GUIDES_DIR = join(process.cwd(), "content", "buying-guides");

/**
 * Force dynamic rendering to avoid static generation issues
 */
export const dynamic = "force-dynamic";

/**
 * Lấy danh sách tất cả slug có sẵn
 */
export async function generateStaticParams() {
    try {
        const files = await fs.readdir(BUYING_GUIDES_DIR);
        const mdFiles = files.filter((file) => file.endsWith(".md"));

        const params = mdFiles.map((file) => {
            const slug = file.replace(".md", "");
            return { slug };
        }).filter((p) => p.slug && p.slug.length > 0);

        return params;
    } catch (error) {
        console.error("Error reading buying guides directory:", error);
        return [];
    }
}

/**
 * Đọc và parse nội dung file markdown
 */
async function getPostBySlug(slug: string) {
    if (!slug || slug.length === 0) {
        return null;
    }

    try {
        const filePath = join(BUYING_GUIDES_DIR, `${slug}.md`);
        const content = await fs.readFile(filePath, "utf-8");

        // Tách frontmatter và content
        const parts = content.split("\n---\n");
        let frontmatter: Record<string, string> = {};
        let markdownContent = content;

        if (parts.length >= 2 && content.startsWith("---")) {
            const frontmatterStr = parts[1];
            markdownContent = parts.slice(2).join("\n---\n");

            const lines = frontmatterStr.split("\n");
            for (const line of lines) {
                const match = line.match(/^(\w+):\s*(.*)$/);
                if (match) {
                    frontmatter[match[1]] = match[2].replace(/^["']|["']$/g, "");
                }
            }
        }

        let title = frontmatter.title || slug;
        const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
        if (titleMatch) {
            title = titleMatch[1].trim();
        }

        let metaDescription = frontmatter.description || "";
        const metaMatch = markdownContent.match(/\*\*Meta Description:\*\*\s*(.+)$/m);
        if (metaMatch) {
            metaDescription = metaMatch[1].trim();
        }

        return {
            slug,
            title,
            metaDescription,
            content: markdownContent,
        };
    } catch (error) {
        console.error(`Error reading file ${slug}.md:`, error);
        return null;
    }
}

/**
 * Generate metadata cho từng bài viết
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Không tìm thấy bài viết",
        };
    }

    return {
        title: `${post.title} | Maison de SON`,
        description: post.metaDescription || `Đọc bài viết ${post.title} về nước hoa`,
    };
}

/**
 * Component hiển thị bài viết
 */
export default async function BuyingGuidePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    
    if (!slug) {
        return notFound();
    }
    
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[800px] mx-auto px-5">
                    <p className="text-sm text-gray-500 mb-2">Kiến thức nước hoa</p>
                    <h1 className="text-3xl md:text-5xl font-serif mb-4">{post.title}</h1>
                    {post.metaDescription && (
                        <p className="text-gray-600 text-sm md:text-base">{post.metaDescription}</p>
                    )}
                </div>
            </section>

            <article className="max-w-[800px] mx-auto px-5 py-10 prose prose-lg prose-slate">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => (
                            <h1 className="text-3xl font-serif mt-8 mb-4 text-gray-900" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                            <li className="text-gray-700" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                            <a
                                className="text-primary hover:underline font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                            />
                        ),
                        strong: ({ node, ...props }) => (
                            <strong className="font-semibold text-gray-900" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote
                                className="border-l-4 border-primary pl-4 italic text-gray-600 my-6"
                                {...props}
                            />
                        ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>

            <Newsletter />
        </main>
    );
}
