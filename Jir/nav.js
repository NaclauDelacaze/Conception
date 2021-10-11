*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'roboto', sans-serif;
}

/* Start of logo nav */
.navbar{
    position: sticky;
    top: 0;  left: O;
    width: 100%;
    background: #f5f5f5;
    z-index: 9;
}

.nav{
    padding: 10px 10vw;
    display: flex;
    justify-content: space-between;
}

.brand-logo{
    height: 60px;
}
/* End of logo nav */

/* search bar */
.nav-items{
    display: flex;
    align-items: center; 
}

.search{
    width: 500PX;
    display: flex;
}


.search-box{
    width: 80%;
    height: 40px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid #d1d1d1;
    text-transform: capitalize;
    background: none;
    color: #a9a9a9;
    outline: none;
}

.search-btn{
    width: 20%;
    height: 40px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background: rgb(23, 109, 87);
    color: #fff;
    text-transform: capitalize;
    font-size: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.search-box::placeholder{
    color: #a9a9a9;
}

/* search bar */

.nav-items a{
    margin-left: 20px;
}

.nav-items a img{
    width: 30px;  
}

.links-container{
    width: 100%;
    display: flex;
    padding: 10px 10vw;
    justify-content: center;
    list-style: none;
    border-top: 1px solid #d1d1d1;
}

.link{
    text-transform: capitalize;
    padding: 0 10px;
    margin: 0 5px;
    text-decoration: none;
    color: #383838;
    opacity: 0,5;
    transition: .5s;
}

.link:hover{
    opacity: 1;
}