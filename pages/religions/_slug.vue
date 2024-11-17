<script>
export default {
  data() {
    return {
      religion: null  
    };
  },
  async asyncData({ $content, params }) {
    const religion = await $content('religions', params.slug).fetch();
    return { religion };  
  }
};
</script>

<template>

  <div class="container" v-if="religion">
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + religion.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ religion.name }}</h1>
        <p>Deidad: {{ religion.deity }}</p>
        <p>Seguidores: </p>
        <ul v-for="follower in religion.followers" :key="follower.slug">
          <li>{{ follower.name }}</li>
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