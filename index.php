<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js" defer></script>
    <title>timeAgo</title>
</head>
<body>
    <div class="container">
        <div class="cards">
            <div class="card">
                <div class="card-image">
                    <img src="https://picsum.photos/id/1005/500/400" alt="">
                </div>
               <div class="card-content">
                <div class="card-title">
                    <p>lorem</p>
                </div>
                <div class="meta">
                    <span class="date" data-ago="<?= time() -60 ?>" >Joined in 2017</span>
                </div>
                <div class="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </div>
               </div>
            </div>
        
            <div class="card">
                <div class="card-image">
                    <img src="https://picsum.photos/id/1027/500/400" alt="">
                </div>
                <div class="card-content">
                    <div class="card-title">
                        <p>lorem</p>
                    </div>
                    <div class="meta">
                        <span class="date" data-ago="<?= time() ?>" >Joined in 2017</span>
                    </div>
                    <div class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src="https://picsum.photos/id/1066/500/400" alt="">
                </div>
                <div class="card-content">
                    <div class="card-title">
                        <p>lorem</p>
                    </div>
                    <div class="meta">
                        <span class="date" data-ago="<?= time() +3600 ?>" >Joined in 2017</span>
                    </div>
                    <div class="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>