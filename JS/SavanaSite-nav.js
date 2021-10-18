const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
        <div class="nav">
            <img src="./images/SavanaLogo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" 
                    placeholder="Search brands, produits ">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="./images/user.png" alt=""></a>
                <a href="#"><img src="./images/C2.png" alt=""></a>
                <a href="#"><img src="./images/cart2.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Clothing</a></li>
            <li class="link-item"><a href="#" class="link">Cell phone</a></li>
            <li class="link-item"><a href="#" class="link">Support</a></li>
            <li class="link-item"><a href="#" class="link">home appliance</a></li>
            <li class="link-item"><a href="#" class="link">Computer</a></li>
        </ul>
    </nav>
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

$(window).load(function () {
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
            location.href = '/login';
        })
    }
})