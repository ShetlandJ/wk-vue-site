<template>
    <section id="banner">
        <div class="content">
            <header>
                <h1>WrestleKind</h1>
                <!-- eslint-disable-next-line -->
                <p class="subheadline">
                    Providing smiles through professional wrestling
                </p>
            </header>

            <p>
                <!-- eslint-disable-next-line -->
                <b>WrestleKind</b> is a UK-based non-profit that provides
                entertainment for people in need by age, ill-health, disability,
                or other disadvantage, and the carers who support them. We work
                with organisations and families to create unforgettable
                experiences.
            </p>

            <router-link href="#" to="about" class="button big wide" style="margin-bottom: 10px">
                Our team
            </router-link>

            <router-link href="#" to="our-work" class="button big wide">
                Our work
            </router-link>
        </div>

        <span class="image object">
            <img src="@/assets/v.jpg" alt />
        </span>
    </section>
</template>

<script>
export default {};
</script>
