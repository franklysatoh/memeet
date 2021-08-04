import Link from 'next/link'

function NewsPage() {
    return <>
        <h1>Welcome to NewsPage</h1>
        <ul>
            <li><Link href="/news/nextjs-is-a-framework">NextJS Is A Greate Framework</Link></li>
            <li>Something Else</li>
        </ul>
    </>;
}

export default NewsPage;