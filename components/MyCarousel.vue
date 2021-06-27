<template>
    <div class="carousel-wrapper">
        <div class="carousel-wrapper__inner">
            <div class="loading-carousel" v-show="!showCarousel">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <VueSlickCarousel
                @init="onInitCarousel"
                :style="{visibility: showCarousel ? 'visible': 'hidden'}"
                v-bind="settings">
                <div v-for="(value, index) in arr" 
                    class="slide-content-wrapper"
                    :key="index"
                    >
                    <div class="slide-content">
                        <img :src="`https://via.placeholder.com/200x100.png?text=${carouselID + ' ' + index}`" width="100%" height="auto">
                    </div>
                </div>                
            </VueSlickCarousel>
        </div>
    </div>        
</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import VueSlickCarousel from "vue-slick-carousel";

    export default {
        name: 'MyCarousel',
        components: { VueSlickCarousel },
        props: {
            carouselID: {
                type: String,
                required: false,
            },
            settings: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        arrows: true,
                        infinite: false,
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        lazyLoad: 'ondemand',
                        
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    unslick: false,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    unslick: false,
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    dots: true,
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    unslick: false,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    dots: true,
                                }
                            },
                            {
                                breakpoint: 1400,
                                settings: {
                                    unslick: false,
                                    slidesToShow: 4,
                                    slidesToScroll: 4,
                                    dots: true,
                                }
                            },
                        ],
                    }
                }
            }
        },

        data() {
            return {
                showCarousel: false,
                arr: new Array(20)
            }
        },

        methods: {
            onInitCarousel(e) {
                console.log('onInitCarousel', e)
//                this.showCarousel = true
            },
        },
        mounted() {
            this.$nextTick()
                .then(() => {
                    console.log('nextick')
                    this.showCarousel = true
                })
        },
    };
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
.carousel-wrapper {
    position: relative;
    height: 200px;
}

.carousel-wrapper__inner {
    position: absolute;
    left: 30px;
    right: 30px;
}

.loading-carousel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;    
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    height: 100px;
    padding: 0 5px;
}

.loading-carousel > div {
    display: none;
    padding-top: 50%;
}

.loading-carousel > div:nth-of-type(1)  {
    display: block;
}

@media (min-width: 480px) {
    .loading-carousel {
        grid-template-columns: 1fr 1fr;
    }

    .loading-carousel > div:nth-of-type(2)  {
        display: block;
    }
}

@media (min-width: 600px) {
    .loading-carousel {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .loading-carousel > div:nth-of-type(3)  {
        display: block;
    }
}

@media (min-width: 1024px) {
    .loading-carousel {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .loading-carousel > div:nth-of-type(4)  {
        display: block;
    }
}

.loading-carousel > div {
    background-color: gray;
}

.slick-track > div .slide-content-wrapper {
    padding-left: 5px;
    padding-right: 5px;
}

.slide-content {
    height: 100%;
}

.slick-arrow {
    background-color: red;
}

</style>
