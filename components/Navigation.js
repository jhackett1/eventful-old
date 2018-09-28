import react from 'react'
import Link from 'next/link'

export default () => (
    <nav>
        <ul>
            <li><Link href="/events">All events</Link></li>
            <li><Link href="/agenda">Agenda</Link></li>
            <li><Link href="/info">Info</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
        </ul>
    </nav>
)