import react from 'react'
import Link from 'next/link'

export default () => (
    <nav>
        <ul>
            <li><Link href="/events"><a>All events</a></Link></li>
            <li><Link href="/agenda"><a>Agenda</a></Link></li>
            <li><Link href="/info"><a>Info</a></Link></li>
            <li><Link href="/speakers"><a>Speakers</a></Link></li>
        </ul>
    </nav>
)