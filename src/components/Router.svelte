<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Login from "../pages/Login.svelte";
    import About from "../pages/About.svelte";
</script>

<Router>
    <nav class="nav-bar">
        <div class="logo-container">
            <Link to="/"><img src="/images/logo.jpeg" alt="Logo" class="logo" /></Link>
        </div>
        <ul class="nav-links">
            <li class="nav-item"><Link to="/login" class="nav-anchors">Log in</Link></li>
            <li class="nav-item"><Link to="/about" class="nav-anchors">About</Link></li>
        </ul>
    </nav>
    <div>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
    </div>
</Router>

<style>
    .logo {
        height: 40px;
    }
    .nav-bar {
        display: flex;
        
    }
    .nav-links {
        display: flex;
        justify-content: space-around;
    }
    .nav-anchors {
        text-decoration: none;
        color: black;
    }
    .nav-item {
        display: flex;
        list-style: none;
    }
    .logo-container {
        display: flex;
        justify-content: flex-start;
    }
</style>
