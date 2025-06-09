import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/types/post"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="group overflow-hidden rounded-xl bg-white/10 backdrop-blur-md transition-all hover:bg-white/20">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-4">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-bold text-white">{post.title}</h3>
          <p className="mb-4 text-sm text-white/80">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/70">{post.createdAt}</span>
            <span className="text-xs font-medium text-white/70">by {post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
