import styled, {css} from 'styled-components';
export type ButtonVariant = 'primary'| 'secondary'| 'danger'| 'success';
interface ButtonContainerProps{
    variant: ButtonVariant;
}
const buttonVariants= {
    primary: 'purple',
    secondary: 'pink',
    danger:'red',
    success:'green',

}
export const ButtonContainer = styled.button<ButtonContainerProps> `
width:100px;
height:40px;
margin:8px;
border-radius:4px;
border:1px solid ${props=>props.theme['green-500']} ; 
color:#ffff;
background-color:${props=>props.theme['green-500']};
`
// ${props=>{
//     return css`
//     background-color:${buttonVariants[props.variant]}
//     `
// }}
