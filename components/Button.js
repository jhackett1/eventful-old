import react from 'react'
import Link from 'next/link'
import './button.sass'

export default ({label, href, filled}) =>
    <Link href={href}>
        <a className={(filled)? "button button--solid" : "button button--outline"}>{label}</a>
    </Link>