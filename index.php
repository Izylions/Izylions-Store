<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Izylions Fashion | Define Your Style</title>
    
    <!-- Calling your CSS branch[cite: 2] -->
    <link rel="stylesheet" href="css/main.css">
    
    <!-- GSAP for the Apple-style animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body>

    <nav class="navbar">
        <div class="logo">IZYLIONS</div>
        <ul class="nav-links">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#" id="cart-btn">Cart (0)</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>

    <section class="hero-zoom">
        <div class="zoom-container">
            <!-- Replace with your actual product image path -->
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" id="main-img" alt="Izylions Fashion">
        </div>
        <div class="hero-content">
            <h1>Signature Collection</h1>
            <button class="buy-btn">Add to Cart</button>
        </div>
    </section>

    <!-- Calling your JavaScript branch[cite: 2] -->
    <script src="js/animation.js"></script>
</body>
</html>
