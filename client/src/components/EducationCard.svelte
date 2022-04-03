<script>
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
</script>

<div class="container">
    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationOne.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationOne.title}</div>
        <div class="card-items">{testEducationOne.durationInYears}</div>
        <div class="card-items">{testEducationOne.ectsPoints}</div>
        <div class="card-items">{testEducationOne.educationGroup}</div>
        <button class="card-btn">Add to cart</button>
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationTwo.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationTwo.title}</div>
        <div class="card-items">{testEducationTwo.durationInYears}</div>
        <div class="card-items">{testEducationTwo.ectsPoints}</div>
        <div class="card-items">{testEducationTwo.educationGroup}</div>
        <button class="card-btn">Add to cart</button>
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items">
            <img src={testEducationThree.image} class="card-item-image" />
        </div>

        <div class="card-items">{testEducationThree.title}</div>
        <div class="card-items">{testEducationThree.durationInYears}</div>
        <div class="card-items">{testEducationThree.ectsPoints}</div>
        <div class="card-items">{testEducationThree.educationGroup}</div>
        <button class="card-btn">Add to cart</button>
    </div>
</div>

<style>
    .card-container {
        background-color: #233249;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 300px;
        width: 20vw;
        margin-top: 20px;
        border-radius: 5%;
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
    }

    .card-item-image {
        max-width: 100%;
        height: auto;
    }
</style>
