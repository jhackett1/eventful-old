import react from 'react'
import config from '../config.json'
import styled from 'styled-components'

const A = styled.a`
color: ${config.colors.red}
`

export default () =>
    <div>
        <p>Need help? <A href="#">Email the team</A></p>
    </div>