import Link from "next/link"

export function Header() {
  return (
    <header className="relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
            일상의 조각들
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-white hover:text-white/80">
              홈
            </Link>
            <Link href="/" className="text-sm font-medium text-white hover:text-white/80">
              카테고리
            </Link>
            <Link href="/" className="text-sm font-medium text-white hover:text-white/80">
              소개
            </Link>
            <Link href="/" className="text-sm font-medium text-white hover:text-white/80">
              연락처
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
