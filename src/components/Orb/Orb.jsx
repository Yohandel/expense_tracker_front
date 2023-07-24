import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize'

export const Orb = () => {
    const {width, height }= useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width/1.2}px,${height/1.5}px);
        }
        100%{
            transform: translate(0,0);
        }
    `
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        margin-left:-37vh;
        margin-top: -37vh;
        border-radius: 50%;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(350px);
        animation:${moveOrb} 15s alternate linear infinite;
    `

    return (
        <OrbStyled>
        </OrbStyled>
    )
}
