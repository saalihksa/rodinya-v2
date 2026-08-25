import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { notFound } from "next/navigation";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: posts.find((p) => p.slug === slug)?.title ?? "Post" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-[13px] tracking-[0.16em] text-muted">{post.date}</p>
        <h1 className="mt-3 text-center font-[family-name:var(--font-display)] text-[26px] uppercase leading-tight tracking-[0.08em] md:text-[40px] md:tracking-[0.16em]">
          {post.title}
        </h1>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden">
          <CoverImage src={post.image} alt={post.title} fill />
        </div>
        <p className="mt-10 text-[16px] leading-8 text-muted">{post.excerpt}</p>
        <p className="mt-6 text-[16px] leading-8 text-muted">
          Rodinya Galata, Şahkulu’nda kahve, brunch ve tatlı sunan bir kafe. Kahvaltı her gün 07:00 –
          14:00, kafe 02:00’ye kadar açık.
        </p>
        <p className="mt-6 text-[16px] leading-8 text-muted">
          Büyük Hendek Caddesi No:4-B. Menü, telefon veya Instagram: 0532 686 32 00 / @rodinyagalata.
        </p>
      </div>
    </article>
  );
}
