<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Izylions Fashion</title>
    <!-- CSS Branch Links -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/navbar.css">
    <!-- Animation Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body>

    <!-- PHP Branch Include -->
    <?php include 'php/navbar.php'; ?>

    <main>
        <!-- Section for Apple-Style Zoom -->
        <section class="hero-scroll">
            <div class="zoom-container">
                <img src="assets/product-hero.jpg" id="zoom-img" alt="Izylions Fashion">
            </div>
            <div class="hero-text">
                <h1>Define Your Style</h1>
                <button id="add-to-cart-main">Add to Cart</button>
            </div>
        </section>
    </main>

    <!-- JS Branch Links -->
    <script src="js/animations.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/auth.js"></script>
</body>
</html>
