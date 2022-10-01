const createNav = () => {
    let nav = document.querySelector('.SavanaSite-nav');

    nav.innerHTML = `
    <nav class="navbar">
    <div class="nav">
        <img src="./images/SavanaLogo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" 
                placeholder="Search categories, brands, produits ...">
                <button class="search-btn">Search</button>
            </div>
            <a href="./HTML/SavanaSiteLogin.html"><img src="./images/user.png" alt=""></a>
            <a href="./html/search.html"><img src="./images/C2.png" alt=""></a>
            <a href="#"><img src="./images/cart2.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="./index.html" class="link">Home</a></li>
        <li class="link-item"><a href="./HTML/SavanaClothing.html" class="link">Fashion</a></li>
        <li class="link-item"><a href="./html/phone.html" class="link">Cell phone</a></li>
        <li class="link-item"><a href="./html/Support.html" class="link">Household appliance</a></li>
        <li class="link-item"><a href="./html/homeA.html" class="link">Bedroom</a></li>
        <li class="link-item"><a href="./html/pc.html" class="link">Computer</a></li>
    </ul>
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

// createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

$(window).load(function(){
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/SavanaSiteLogin';
        })
    }
})