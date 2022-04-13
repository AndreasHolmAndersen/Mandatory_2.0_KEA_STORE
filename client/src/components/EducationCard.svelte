<script>
    import { cartItems } from "../stores/stores.js";
    import { toasts } from "svelte-toasts";

    export const testEducationOne = {
        title: "COMPUTER SCIENCE",
        durationInYears: 2.5,
        ectsPoints: 150,
        educationGroup: "DIG",
        image: "/images/computerScience.jpeg",
    };

    export const testEducationTwo = {
        title: "FASHION MANAGEMENT",
        durationInYears: 2,
        ectsPoints: 120,
        educationGroup: "DES",
        image: "/images/fashionManagement.jpeg",
    };

    export const testEducationThree = {
        title: "CONSTRUCTION MANAGEMENT",
        durationInYears: 3.5,
        ectsPoints: 210,
        educationGroup: "BYG",
        image: "/images/constructionManagement.jpeg",
    };

    function addToCart(testEducation) {
       const cartItem = {
           title: testEducation.title,
            durationInYears: testEducation.durationInYears,
            ectsPoints: testEducation.ectsPoints,
            educationGroup: testEducation.educationGroup,
                        
        }
        
        $cartItems = [...$cartItems, cartItem];
       
        console.log($cartItems);
    }
        
</script>

<div class="container">
    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationOne.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationOne.title}</div>
        <div class="card-items">Duration: {testEducationOne.durationInYears}</div>
        <div class="card-items">Ects point: {testEducationOne.ectsPoints}</div>
        <div class="card-items">Education group: {testEducationOne.educationGroup}</div>
        <button class="card-btn" on:click={() => { 
            addToCart(testEducationOne); 
            toasts.info(testEducationOne.title, " Added to cart");
            }}>Add to cart</button>
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationTwo.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationTwo.title}</div>
        <div class="card-items">Duration: {testEducationTwo.durationInYears}</div>
        <div class="card-items">Ects point: {testEducationTwo.ectsPoints}</div>
        <div class="card-items">Education group: {testEducationTwo.educationGroup}</div>
        <button class="card-btn" on:click={() => { 
            addToCart(testEducationTwo); 
            toasts.info(testEducationTwo.title, " Added to cart");
            }}>Add to cart</button>
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationThree.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationThree.title}</div>
        <div class="card-items">Duration: {testEducationThree.durationInYears}</div>
        <div class="card-items">Ects point: {testEducationThree.ectsPoints}</div>
        <div class="card-items">Education group: {testEducationThree.educationGroup}</div>
        <button class="card-btn" on:click={() => { 
            addToCart(testEducationThree); 
            toasts.info(testEducationThree.title, " Added to cart");
            }}>Add to cart</button>


    </div>
</div>

<style>
    .card-container {
        background-color: #233249;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        height: 350px;
        width: 25vw;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #888888;
    }
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }

    .card-items {
        display: flex;
        color: #ffffff;
        font-family: "Helvetica Neue Condensed",sans-serif;
        justify-content: center;
        padding: 2px;
        
    }

    .card-item-image {
        max-width: 75%;
        height: auto;
        display: flex;
       
        padding: 15px;
        
    }
    .card-btn {
        
        text-transform: uppercase;
        color: white;
        background-color: #eda29c;
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
