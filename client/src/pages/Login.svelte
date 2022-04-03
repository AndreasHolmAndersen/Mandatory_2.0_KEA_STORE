<script>
    import { isLoggedIn } from "../store/store.js";
    import { notify } from "../components/Notification";

    async function fetchLogin(e) {
        e.preventDefault();
        const username = document.getElementById("input-username").value;
        const password = document.getElementById("input-password").value;
        const resp = await fetch(
            `http://localhost:8080/api/users`
        );
        const respData = await resp.json();
        console.log(respData.data[0]);
        isLoggedIn.set(respData.data[0].isLoggedIn);
        console.log($isLoggedIn);
        
        notify("Welcome " + respData.data[0].username);

    }
</script>

<h1>Login page</h1>

<form id="login-form">
    <input type="text" placeholder="Username" id="input-username" />
    <input type="text" placeholder="Password" id="input-password" />
    <button type="submit" id="submit-btn" on:click={fetchLogin}>Login</button>
</form>
