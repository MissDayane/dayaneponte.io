import React from 'react'
import LogoImg from '../../assets/Logo1.png'
import { Container, Logo, Menu } from './Styles'

const Header = () => {
  return (
    <Container>
        
        <Logo>
            <img src={LogoImg} alt="Logo" />
        </Logo>
        <Menu>
            <ul>
                <li>Home</li>
                <li>Sobre Mim</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </Menu>
    </Container>
  )
}

export default Header
