import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.spam`
    width: 17px;
    height: 17px;
    left: 1263px;
    top: 43px

    background-color: var(--delete-color)
    color: white;
`

export function CartControl () {
    const {value} = useLocalStorage('cart-items')
   
   /* >>&&<< indica que só vai fazer quando for true*/
    return (
        <div>
            <CartIcon/>
            
            {value.length && <CartCount>
                {value.length}
            </CartCount> }
        </div>
    )
}