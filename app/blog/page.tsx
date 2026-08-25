import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { posts } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" image={images.blogHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-16">
          {posts.map((post) => (
            <article key={post.slug} className="grid items-center gap-8 md:grid-cols-2">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <CoverImage src={post.image} alt={post.title} fill />
              </Link>
              <div>
                <p className="text-[13px] tracking-[0.16em] text-muted">{post.date}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[22px] uppercase tracking-[0.1em] md:text-[28px] md:tracking-[0.14em]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="gold-btn mt-6">
                  Devamını oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
