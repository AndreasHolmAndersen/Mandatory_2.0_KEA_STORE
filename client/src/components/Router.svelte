<script>
    import { notify } from "..utils/Notification";
    import { Router, Link, Route } from "svelte-navigator";
    import Login from "../pages/Login.svelte";
    import Contact from "../pages/Contact.svelte";
    import Home from "../pages/Home.svelte";
    import { isLoggedIn } from "../store/store";
    import {toasts, ToastContainer, FlatToast }  from "svelte-toasts";



    export function logout(){
        console.log($isLoggedIn);
        isLoggedIn.set(false);
        console.log($isLoggedIn);
    }

    
</script>

<Router primary={false}>
    <nav class="nav-bar">
        <div class="logo-container">
            <Link to="/"
                ><img src="/images/logo.jpeg" alt="Logo" class="logo" /></Link
            >
        </div>
        <ul class="nav-links">
            <li class="nav-item">
                <Link to="/" class="nav-anchors">KEA Store</Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" class="nav-anchors">Contact us</Link>
            </li>
            {#if !$isLoggedIn}
                <li class="nav-item">
                    <Link to="/login" class="nav-anchors">Log in</Link>
                </li>
            {:else}
                <li class="nav-item">
                    <Link to="/" class="nav-anchors" on:click={ () => {
                        logout();
                        // notify("youre now logged out");
                        toasts.warning("youre now logged out");
                        }}>Log out</Link>
                </li>
            {/if}
        </ul>
    </nav>
    <div>
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
    </div>

    

</Router>

<style>
    :global(a) {
        color: white !important;
        text-decoration: none !important;
        height: 100%;
        
    }
    .logo {
        height: 100px;
    }
    .nav-bar {
        display: flex;
        width: 100vw;
        height: 100px;
        background-color: #233249;
    }
    .nav-links {
        display: flex;
        justify-content: center;
        width: 100vw;
        align-items: center;
    }

    .nav-item {
        display: flex;
        list-style: none;
        padding: 20px;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.2em;
        text-transform: uppercase;
    }
    .nav-item:hover {
        background: #2b3e5a;
    }
    .logo-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100px;
    }
</style>
