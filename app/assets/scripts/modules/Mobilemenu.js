import $ from 'jquery';
class Mobilemenu{
    constructor(){
        this.siteHeader=$(".site-header");
        this.menuicon=$(".site-header__menu-icon");
        this.menuiconn=$(".site-header__menu-icon::before");
        this.menucontent=$(".site-header__menu-content");
        this.events();
    }
    events(){
        this.menuicon.click(this.toggleTheMenu.bind(this));
        console.log(this);
    }
    toggleTheMenu(){
        this.menuicon.toggleClass("site-header__menu-icon--close-x")
        this.menucontent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
    }
}

export default Mobilemenu;