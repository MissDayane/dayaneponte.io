import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 72px;
    background-color: #282c34;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    `;

export const Logo = styled.div`
    img {
        display: flex;
        height: 40px;
    }
`;

export const Menu = styled.div  `
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;

       li {
        margin: 0 16px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease-out; /* Suaviza TODAS as propriedades (não apenas letter-spacing) */
        position: relative; /* Para o pseudo-elemento do underline */

        &:hover {
            color: var(--primary-color); /* Muda a cor do texto */
            letter-spacing: 2px; /* Valor mais sutil que 3px */
            text-transform: capitalize;
            transform: scale(1.03); /* Zoom mais discreto que 1.05 */
            
            /* Underline animado (substitui o text-decoration) */
            &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary-color);
            animation: underlineSlide 0.3s ease-out;
            }
        }
        }

        @keyframes underlineSlide {
        from { width: 0; opacity: 0; }
        to { width: 100%; opacity: 1; }
        }
    }
`;