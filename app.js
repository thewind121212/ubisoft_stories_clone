window.addEventListener("DOMContentLoaded", (event) => {
    const menuBtn = document.querySelector(".nav__menulist");
    const overlay = document.querySelector(".overlay");
    const overlayWall1 = document.querySelector(".overlay__wall1");
    const overlayWall2 = document.querySelector(".overlay__wall2");
    const overlayMain = document.querySelector(".overlay__main")
    var hideoverlay = 0;

    menuBtn.addEventListener("click", (event) => {
        if (overlayMain.classList[1] === "hide__mainoverlay") {
            overlayMain.classList.remove("hide__mainoverlay")
            setTimeout(() => {
                overlay.style.visibility = "hidden"
            }, 1180)
        } else {
            overlayMain.classList.add("hide__mainoverlay")
            overlay.style.visibility = "visible"
        }

        overlayWall1.classList.remove('show', 'show1')
        overlayWall2.classList.remove('show3', 'show4')
        overlayWall1.classList.add('show')
        overlayWall2.classList.add('show3')
        overlayWall1.addEventListener('animationend', event => {
            overlayWall1.classList.add('show1')
        })

        overlayWall1.addEventListener('animationend', event => {
            overlayWall2.classList.add('show4')
        })
    });

    //logo
    const logoBtn = document.querySelector(".nav__logo");
    const logoMenu = document.querySelector("div.logo__menu");
    const logoPlusIcon = document.querySelector(".nav__logo .nav__logo--icon");
    const logoSubmenuBtn = document.querySelectorAll(
        ".logo__menulist__submenu--head"
    );

    const logoSubMenuList = document.querySelectorAll(
        ".logo__menulist__submenu--list"
    );

    const logoSubMenuIcon = document.querySelectorAll(
        ".logo__menulist__submenu--icon"
    );

    function clearSubMenu() {
        for (i = 0; i < logoSubMenuList.length; i++) {
            logoSubMenuList[i].classList.remove(
                "logo__menulist__submenu--listshow"
            );
            logoSubMenuIcon[i].style.transform = "rotate(0)";
        }
    }

    logoBtn.addEventListener("click", (event) => {
        if (logoMenu.classList[1] === "logo__menu--show") {
            logoMenu.classList.remove("logo__menu--show");
            logoPlusIcon.style.transform = "rotate(0deg)";
            clearSubMenu();
        } else {
            logoMenu.classList.add("logo__menu--show");
            logoPlusIcon.style.transform = "rotate(45deg)";
        }
    });

    //logosubmenu

    for (i = 0; i < logoSubmenuBtn.length; i++) {
        logoSubmenuBtn[i].addEventListener("click", (event) => {
            const indexOfButton = this.event.target.getAttribute("data-load");
            if (
                logoSubMenuList[indexOfButton].classList[1] ===
                "logo__menulist__submenu--listshow"
            ) {
                logoSubMenuList[indexOfButton].classList.remove(
                    "logo__menulist__submenu--listshow"
                );
                logoSubMenuIcon[indexOfButton].style.transform = "rotate(0deg)";
            } else {
                for (i = 0; i < logoSubMenuList.length; i++) {
                    logoSubMenuList[i].classList.remove(
                        "logo__menulist__submenu--listshow"
                    );
                    logoSubMenuIcon[i].style.transform = "rotate(0)";
                }
                logoSubMenuIcon[indexOfButton].style.transform =
                    "rotate(45deg)";
                logoSubMenuList[indexOfButton].classList.add(
                    "logo__menulist__submenu--listshow"
                );
            }
        });
    }

    //menuchange list
    const listMenu = document.querySelectorAll('.top__menulist__item__link')
    const imageMenuContainer = document.querySelectorAll('.top__imagebox__inner')

    for (i = 0; i < listMenu.length; i++) {
        listMenu[i].addEventListener('mouseover', event => {
            if (this.event.target.classList[1] === "top__menulist__item__link--on") {
                return;
            } else {
                for (k = 0; k < listMenu.length; k++) {
                    listMenu[k].classList.remove('top__menulist__item__link--on')
                }
                this.event.target.classList.add('top__menulist__item__link--on')
                const thisDataId = this.event.target.getAttribute("data-number")
                imageMenuContainer[0].style.transform = `translateY(${-25 * thisDataId}% )`
                imageMenuContainer[1].style.transform = `translateY(${-25 * thisDataId}% )`
                imageMenuContainer[2].style.transform = `translateY(${-25 * thisDataId}% )`
                imageMenuContainer[3].style.transform = `translateY(${-25 * thisDataId}% )`
            }
        })
    }
            const storiesIcon = document.querySelector('.nav__story_icon')

            const ubisoftLogo = document.querySelector('.coverblock__header')
        window.addEventListener('scroll', event => {

            if (window.pageYOffset <= 200) {
                storiesIcon.style.transform = 'translateY(50px)'
            }
            if (window.pageYOffset > 200) {

                storiesIcon.style.transform = 'translateY(0px)'
            }

            if (window.pageYOffset > 100 && window.pageYOffset <800) {
                const opacityLog = (100/(window.pageYOffset))  
                ubisoftLogo.style.opacity = opacityLog;
            }
            else {

                ubisoftLogo.style.opacity = 1;
            }

        })


        const block3Inside = document.querySelector('.block3__content')
        const block3Bg = document.querySelector('.block3--background')

        block3Inside.addEventListener('mouseover', event => {
            block3Bg.style.transform = 'scale(1.05)'
        })
        
        block3Inside.addEventListener('mouseout', event => {
            block3Bg.style.transform = 'scale(1)'
        })



});