import { ReactNode } from 'react'
import * as S from './Banner'

interface BannerProps {
    titulo?: string
    subtitulo?: string
    children?: ReactNode
}

const Banner = ({ titulo, subtitulo, children }: BannerProps) => {
    return (<S.BannerStyle className="banner-principal">
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        {children}
    </S.BannerStyle>)
}

export default Banner