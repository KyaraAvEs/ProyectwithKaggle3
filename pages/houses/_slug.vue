<script>
export default {
  data() {
    return {
      house: null  
    };
  },
  async asyncData({ $content, params }) {
    const house = await $content('houses', params.slug).fetch();
    return { house };  
  }
};
</script>

<template>

  <div class="container" v-if="house">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + house.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ house.name }}</h1>
        <p>Lema: {{ house.mnotto }}</p>
        <p>Región: {{ house.region }}</p>
        <p>Aliados: </p>
        <div v-for="allie in house.allies" :key="allie.slug">
            <p>{{ allie.name }}</p>
        </div>
        <p>Enemigos: </p>
        <div v-for="enemy in house.enemies" :key="enemy.slug">
            <p>{{ enemy.name }}</p>
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