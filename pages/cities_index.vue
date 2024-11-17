<script>
  export default {
    async asyncData({ $content, params }) {
      const cities = await $content('cities').fetch()
      return {
        cities
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 25px; text-align: center;">Ciudades Registradas</h3>
     <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">

       <div v-for="city of cities" :key="city.slug" >
         <NuxtLink style="text-decoration: none;" :to="{ name: 'cities-slug', params: { slug: city.slug } }">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="text-decoration: none; font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ city.name }}</p>
          </div>
         </NuxtLink>
       </div>
     </div>
   <FooterView />
 </div>
</template>