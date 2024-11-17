<script>
export default {
  data() {
    return {
      character: null  
    };
  },
  async asyncData({ $content, params }) {
    const character = await $content('characters', params.slug).fetch();
    return { character };  
  }
};
</script>

<template>

  <div class="container" v-if="character">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + character.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ character.name }}</h1>
        <p>Rol: {{ character.role }}</p>
        <p>Estado: {{ character.status }}</p>
        <p>Casa: <NuxtLink :to="'/houses/' + character.house.slug">{{ character.house.name }}</NuxtLink></p>
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