<script>
    import {toasts} from "svelte-toasts";
    
    async function fetchContact(e){
        e.preventDefault();
        const email = document.getElementById("input-user-email").value;
        const subject = document.getElementById("input-subject").value;
        const message = document.getElementById("input-message").value;

        const url = "http://localhost:3000/api/contact";
        let respData = {};
        const data = {
            email,
            subject,
            message
        };
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((data) => {
                respData = data;
                if (respData != null) {
                    toasts.success("Your message has been sent");
                } else {
                    toasts.error("Something went wrong");
                }
            });
    }
  
</script>
<div class="contact-container">
<h1>Contact page</h1>

<form id="contact-form">
    <input type="text" placeholder="Email you want us to reply to" id="input-user-email" />
    <input type="text" placeholder="Title" id="input-subject" />
    <input type="text" placeholder="Please descripe your feedback" id="input-message" />
    <button type="submit" id="submit-btn" on:click={fetchContact}>Send message</button>
</form>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
       
    }
    h1{
        text-transform: uppercase;
    }
    .contact-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    #contact-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    input{
        width: 300px;
        height: 30px;
        margin: 10px;
        text-indent: 10px;
        border: none;
        box-shadow: 1px 1px 1px #888888;
    }
    #input-message {
        height: 200px;
    }
    button{
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