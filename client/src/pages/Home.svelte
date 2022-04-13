<script>
    import EducationCard from "../components/EducationCard.svelte";
    import { useNavigate } from "svelte-navigator";
    import { cartItems } from "../stores/stores.js";

    const navigate = useNavigate();
</script>

<EducationCard />

<div class="container">
    {#if $cartItems.length != 0}

        <p class="items-in-checkout">You have: {$cartItems.length} Item(s) in your cart</p>
        <button
            class="checkout-btn"
            on:click={() => {
                navigate("/cart");
            }}>Proceed to checkout</button
        >
    {:else}
    <button></button>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .checkout-btn {
        text-transform: uppercase;
        color: white;
        background-color: #233249;
        border-width: 0;
        height: 54px;
        text-align: center !important;
        padding: 0 1.25em;
        width: auto;
        box-shadow: 1px 1px 1px #888888;
        transition-duration: 0.2s;
        cursor: pointer;
    }
</style>
