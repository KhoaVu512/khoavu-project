import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/twitter'}>
        <div className="text-[40px]">Twitter</div>
      </Link>
    </div>
  )
}
