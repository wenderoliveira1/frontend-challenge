import styled from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    left: 1263px;
    top: 43px

    background-color: var(--delete-color)
    color: white;

    position: absolute;
    right: -10px;
    top: 50%;

`

const Container = styled.div`
    position: relative;
    
`

export function CartControl () {
    const { value } = useLocalStorage('cart-items')
   
   /* >>&&<< indica que só vai fazer quando for true*/
    return (
        <Container>
            <CartIcon />
            
            {value.length && <CartCount>{value.length}</CartCount> }
           
        </Container>
    )
}