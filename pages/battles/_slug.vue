<script>
export default {
    data() {
        return {
            battle: null
        };
    },
    async asyncData({ $content, params }) {
        const battle = await $content('battles', params.slug).fetch();
        return { battle };
    }
};
</script>

<template>

    <div class="container" v-if="battle">
        <HeaderView />
        <div class="row">
            <div class="five columns">
                <img class="u-max-full-width" :src="'/images/' + battle.image" alt="Movie Image">

            </div>
            <div class="seven columns">
                <h1>{{ battle.name }}</h1>
                <p>Lugar: {{ battle.location }}</p>
                <p>Resultado: {{ battle.result }}</p>
                <p>Participantes: </p>
                <div v-for="participant in battle.involved_characters" :key="participant.slug">
                    <p>{{ participant.name }}</p>
                </div>
                <p>Casas involucradas: </p>
                <div v-for="house in battle.houses" :key="house.slug">
                    <p>{{ house.name }}</p>
                </div>
            </div>
        </div>
        <FooterView />
    </div>
    <div class="container" v-else>
        <HeaderView />

        <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
        <FooterView />

    </div>

</template>