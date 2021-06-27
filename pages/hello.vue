<template>
    <div class="container">
        <section style="width: 100%">
            <h1 class="title">Hello</h1>
            <section>
                <h2>Carousel A</h2>
                <MyCarousel carouselID="a"></MyCarousel>
            </section>
            <section>
                <h2>Carousel B</h2>
                <MyCarousel carouselID="b"></MyCarousel>
            </section>

        </section>
    </div>
</template>

<script>
import MyCarousel from '../components/MyCarousel.vue'

export default {
    name: "hello",
    components: {
        MyCarousel
    },
    data() {
        return {
            settings: {
                arrows: true,
                dots: true,
                slidesToShow: 3,
                infinite: false,
            }
        }
    }
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

</style>
