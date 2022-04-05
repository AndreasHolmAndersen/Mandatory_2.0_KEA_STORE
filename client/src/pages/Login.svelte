<script>
    import { isLoggedIn } from "../store/store.js";
    import { toasts } from "svelte-toasts";

    async function fetchLogin(e) {
        e.preventDefault();
        const username = document.getElementById("input-username").value;
        const password = document.getElementById("input-password").value;

        const url = "http://localhost:3000/api/auth";
        let respData = {};
        const data = {
            username,
            password,
        };

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((data) => {
                respData = data;
                isLoggedIn.set(data.isLoggedIn);
            });

        if (respData.isLoggedIn) {
            toasts.success("You're now logged in");
        } else {
            toasts.error("Wrong username or password");
        }
    }
</script>

<div class="login-container">
    <h1>Login page</h1>
    <form id="login-form" class="login-form">
        <input type="text" placeholder="Username" id="input-username" />
        <input type="password" placeholder="Password" id="input-password" />
        <button type="submit" id="submit-btn" on:click={fetchLogin}
            >Login</button
        >
    </form>
</div>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    #login-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    input {
        margin: 15px;
        height: 30px;
        text-indent: 10px;
        
        border: none;
        box-shadow: 1px 1px 1px #888888;
    }
    button{
        color: white;
    text-transform: uppercase;
    background-color: #233249;
    border-width: 0;
    height: 54px;
    text-align: center !important;
    padding: 0 1.25em;
    width: auto;
    box-shadow: 1px 1px 1px #888888;
    }
    button:hover{
    color: #fff;
    background-color: #233249;
    border-color: #233249;
    }
    h1{
        text-transform: uppercase;
    }
</style>
