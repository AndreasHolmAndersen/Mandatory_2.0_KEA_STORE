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
        <div class="card-items"><img src={testEducationOne.image} class="card-item-image"></div>
        
        <div class="card-items">{testEducationOne.title}</div>
        <div class="card-items">{testEducationOne.durationInYears}</div>
        <div class="card-items">{testEducationOne.ectsPoints}</div>
        <div class="card-items">{testEducationOne.educationGroup}</div>
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items"><img src={testEducationTwo.image} class="card-item-image"></div>

        <div class="card-items">{testEducationTwo.title}</div>
        <div class="card-items">{testEducationTwo.durationInYears}</div>
        <div class="card-items">{testEducationTwo.ectsPoints}</div>
        <div class="card-items">{testEducationTwo.educationGroup}</div>
      
    </div>

    <div class="card-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="card-items"><img src={testEducationThree.image} class="card-item-image"></div>

        <div class="card-items">{testEducationThree.title}</div>
        <div class="card-items">{testEducationThree.durationInYears}</div>
        <div class="card-items">{testEducationThree.ectsPoints}</div>
        <div class="card-items">{testEducationThree.educationGroup}</div>
    </div>
</div>

<style>
    .card-container {
        background-color: cyan;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 300px;
        width: 20%;
    }
    .container{
       display: flex;
       justify-content: space-around;
       align-items: center;
    }

    .card-items{
        display: flex;
    }

    .card-item-image{
        width: 100%;
    }
</style>
