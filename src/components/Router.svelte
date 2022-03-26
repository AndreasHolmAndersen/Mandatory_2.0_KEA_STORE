<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Login from "../pages/Login.svelte";
    import About from "../pages/About.svelte";
    import Home from "../pages/Home.svelte";
</script>

<Router>
    <nav class="nav-bar">
        <div class="logo-container">
            <Link to="/"><img src="/images/logo.jpeg" alt="Logo" class="logo" /></Link>
        </div>
        <ul class="nav-links">
            <li class="nav-item"><Link to="/" class="nav-anchors">KEA Store</Link></li>
            <li class="nav-item"><Link to="/about" class="nav-anchors">About</Link></li>
            <li class="nav-item"><Link to="/login" class="nav-anchors">Log in</Link></li>
        </ul>
    </nav>
    <div>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
    </div>
</Router>

<style>
    .logo {
        height: 40px;
        padding: 20px;
    }
    .nav-bar {
        display: flex;
        width: 100vw;
        height: 8vh;
        
    }
    .nav-links {
        display: flex;
        justify-content: center;
        width: 100vw;
        align-items: center;
    }
    .nav-anchors{
        text-decoration: none;
        color: black;
    }
    .nav-item {
        display: flex;
        list-style: none;
        padding: 20px;
    }
    .logo-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>
