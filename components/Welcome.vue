<template>
    <section class="welcome">
        <h1>
            Da el primer paso para crear tu app, 
            <br/>
            <b>Ellos ya lo hicieron:</b>
        </h1>
        <div class="project-icons">
            <!-- Corrected the prop name in the v-for -->
            <img v-for="icon in projectsList" :key="icon.altName"
                :width="icon.width"
                :height="icon.height"
                loading="lazy"
                :src="icon.src"
                :alt="icon.altName"
            >
        </div>
        <div class="business-form">
        </div>
    </section>
</template>

<script>
export default {
  props: {
    projectsList: {
      type: Array,
      required: true,
    },
  },
};
</script>
