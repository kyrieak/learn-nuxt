<template>
    <div :class="`carousel-wrapper carousel-wrapper--${carouselID}`">
        <div class="carousel-wrapper__inner">
            <button @click="onClickPrev">Prev</button>
            <button @click="onClickNext">Next</button>
            <Hooper
                ref="hcarousel"
                :settings="settings">
                <Slide v-for="(data, index) in slideData" 
                    class="slide-content-wrapper"
                    :key="index"
                    >
                    <div class="slide-content">
                        <img class="lazy" :data-src="data.slideImgSrc">
                    </div>
                </Slide>
            </Hooper>
        </div>
    </div>        
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';
    
    export default {
        name: 'MyCarousel',
        components: { Hooper, Slide },
        props: {
            carouselID: {
                type: String,
                required: false,
            },
        },

        data() {
            return {
                arr: new Array(20).fill(null),
            }
        },

        computed: {
            slideData() {
                return this.arr.map((item, index) => {
                    return {
                        slideImgSrc: `https://via.placeholder.com/200x100.png?text=${this.carouselID + ' ' + (index + 1)}`
                    }
                })
            },

            settings() {
                {
                    return {
                        itemsToShow: 4,
                        itemsToSlide: 4,
                        wheelControl: false,
                        breakpoints: {
                            480: {
                                itemsToShow: 1,
                                itemsToSlide: 1,
                            },
                            600: {
                                itemsToShow: 2,
                                itemsToSlide: 2,
                            },
                            1024: {
                                itemsToShow: 3,
                                itemsToSlide: 3,
                            },
                            1400: {
                                itemsToShow: 4,
                                itemsToSlide: 4,
                            },
                        },
                    }
                }
            }
        },

        methods: {
            onClickPrev() {
                this.$refs.hcarousel.slidePrev()
            },

            onClickNext() {
                this.$refs.hcarousel.slideNext()
            }
        },

        mounted() {   
            var lazyLoadInstance = new LazyLoad({
                container: document.querySelector(`.carousel-wrapper--${this.carouselID}`)
            });         
        },
    };
</script>

<style>
.slide-content img {
    width: 100%;
    height: auto;
}

.slide-content-wrapper {
    padding-left: 5px;
    padding-right: 5px;
}

</style>
