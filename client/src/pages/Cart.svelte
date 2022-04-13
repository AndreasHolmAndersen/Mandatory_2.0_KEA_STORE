<script>
    import { cartItems } from "../stores/stores.js";
    import { useNavigate } from "svelte-navigator";
    import { toasts } from "svelte-toasts";

    const navigate = useNavigate();

    function ectsPointsInTotal(){
        if($cartItems.length != 0){
            let ectsPoints = 0;
            for(let i = 0; i < $cartItems.length; i++ ){
                ectsPoints += parseInt($cartItems[i].ectsPoints);
            }
    
            
            return ectsPoints;
        }
    }

    function clearCart(){
        
        
        
        navigate("/");
        toasts.info("Your cart has been cleared");
        cartItems.set({
            // title: "",
            // durationInYears: 0,
            // ectsPoints: 0,
            // educationGroup: "",
            

        });
        console.log( $cartItems );


    }
</script>
<div class="container">
<ul class="cart">
    {#if $cartItems.length != 0 | null}
        {#each $cartItems as cartItem}
        <div class="cart-item">
            <li class="cart-li">{cartItem.title}</li>
            <li class="cart-li">Duration in years: {cartItem.durationInYears}</li>
            <li class="cart-li">Ects points: {cartItem.ectsPoints}</li>
            <li class="cart-li">Education group: {cartItem.educationGroup}</li>
            
            
        </div>
        {/each}
        <p>You have chosen educations with {ectsPointsInTotal()} ects Points in total </p>
        <button on:click={() => {clearCart()}}>Clear Cart</button>
    {:else}
        <p>Please choose an education or more in KEA store !</p>    
    {/if}
    
</ul>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .cart{
        margin: 50px;
        background-color: #eda29c;
        padding: 15px;
        border-radius: 5px;
    }
    .cart-item{
        padding: 5px;
        padding-bottom: 10px;
        border-bottom: 2px dashed black;
        margin-bottom: 5px;

    }
    .cart-li{
        list-style: none;
    }
</style>



