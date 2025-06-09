import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/post";
import { ArrowLeft } from "lucide-react";

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-white hover:text-white/80"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        목록으로 돌아가기
      </Link>
      <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-md">
        <div className="relative h-80 w-full sm:h-96 md:h-[500px]">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 md:p-8">
            <div className="flex flex-wrap gap-2 pb-4">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">{post.createdAt}</span>
              <span className="text-sm font-medium text-white/80">
                by {post.author}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div
            className="prose prose-lg max-w-none text-white prose-headings:text-white prose-a:text-blue-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </article>
  );
}
