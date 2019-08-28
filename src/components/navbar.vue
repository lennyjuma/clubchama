<template>
    <div class="columns is-mobile">
    
    <nav class="navbar is-fixed-top is-transparent no-shadow is-pulled-right-touch" role="navigation" aria-label="main navigation">
    <div  class="container">
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                        <img  src="public/img/13.png" alt="">
                        <span class="brand-name">Club Eight</span>
                    </a>
            <a class="navbar-item is-hidden-touch is-hidden-desktop">
                <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                    <svg width="1000px" height="1000px">
                        <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                        <path class="path2" d="M 300 500 L 700 500"></path>
                        <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                    </svg>
                    <button id="menu-icon-trigger" class="menu-icon-trigger" ></button>
                </div>
            </a>

            <a role="button" class="navbar-burger " aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="mobToggle">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-end" @click="mobToggle">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a> -->
        </div>

        <div id="navbar-menu" class="navbar-menu is-static">

            <div class="navbar-start">
                <a class="navbar-item is-hidden-touch">
                    <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                        <svg width="1000px" height="1000px">
                            <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                            <path class="path2" d="M 300 500 L 700 500"></path>
                            <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                        </svg>
                        <button id="menu-icon-trigger" class="menu-icon-trigger" @click="openanime"></button>
                    </div>
                </a>
            </div>

            <div class="navbar-end" is-touch>
                <router-link class="navbar-item is-secondary" router-link-exact-active to="/">Home</router-link>
                <router-link class="navbar-item is-secondary" router-link-exact-active to="/about">About us</router-link>
                <router-link class="navbar-item is-secondary" router-link-exact-active to="/members">Members</router-link>
                <router-link class="navbar-item is-secondary" router-link-exact-active to="/contact">Contact us</router-link>
                <router-link class="navbar-item is-secondary" router-link-exact-active to="/pages">PlayGround</router-link>
                </div>
        </div>
    </div>
</nav>
    </div>
</template>
<script>
import spin from './spinner.vue'


    export default {
        name: "navbar",
        data() {
            return {
                showNav: false
                
            }
        },
        methods: {
            openanime(){
                $('.menu-icon-trigger').click(function (e) {
                e.preventDefault();
                $('.menu-icon-wrapper').toggleClass('open');
                $('.sd').toggleClass('is-active');
                });
            },
            closeanime(){
                $('.sidebar-close').click(function () {
                $('.sd').removeClass('is-active');
                $('.menu-icon-wrapper').removeClass('open');
                });
            },
            mobToggle(){
                if ($('.navbar-burger').length) {
                $('.navbar-burger').on("click", function () {

                var menu_id = $(this).attr('data-target');
                $(this).toggleClass('is-active');
                $("#" + menu_id).toggleClass('is-active');
                $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

            }

        },
    }
</script>