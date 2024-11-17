<script>
export default {
  data() {
    return {
      city: null  
    };
  },
  async asyncData({ $content, params }) {
    const city = await $content('cities', params.slug).fetch();
    return { city };  
  }
};
</script>

<template>

  <div class="container" v-if="city">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + city.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ city.name }}</h1>
        <p>Habitantes: {{ city.population }}</p>
        <p>Gobernador: {{ city.governor.name }}</p>
        <p>Atractivos: </p>
        <ul>
          <li v-for="feature in city.features" :key="feature">
            {{ feature }}
          </li>
          </ul> 
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