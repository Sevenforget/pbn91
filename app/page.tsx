import { PostList } from "@/components/post-list"
import { posts } from "@/data/posts"

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">일상의 조각들</h1>
        <p className="mx-auto max-w-2xl text-lg text-white/80">
          평범한 일상 속에서 발견한 특별한 순간들을 기록하고 공유합니다. 소소한 경험과 감정들이 모여 우리의 삶을 더욱
          풍요롭게 만들어 줍니다.
        </p>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-white">최근 게시글</h2>
        <PostList posts={posts} />
      </section>
    </div>
  )
}
