<script>
export default {
  data() {
    return {
      awards: [
        {
          width: 68,
          height: 68,
          src: '/img/icons/awards/Top.png',
          altName: 'topIcon'
        },
        {
          width: 72,
          height: 68,
          src: '/img/icons/awards/Escudo.png',
          altName: '1Award'
        },
        {
          width: 75,
          height: 68,
          src: '/img/icons/awards/Escudo 2.png',
          altName: '2Award'
        },
        {
          width: 69,
          height: 69,
          src: '/img/icons/awards/Escudo 3.png',
          altName: '3Award'
        },
        {
          width: 69,
          height: 20,
          src: '/img/icons/awards/Clucht.svg',
          altName: 'cluchtIcon'
        },
      ]
    };
  },
};
</script>

<template>
  <div class="layout"> 
    <header>
      <nav>
        <div class="icons">
          <img
              width="95"
              height="37"
              loading="lazy"
              src="/img/kubo-logo.svg"
              alt="kubo-logo"
          />
          <div class="selectedLanguage">
            <!-- todo: list of languages -->
            Español
          </div>
        </div>
        <div class="btn-contact">
          contáctanos
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <div class="principalInformation">
        <div class="tw-col-span-2">
          <img
            width="231"
            height="83"
            loading="lazy"
            src="/img/kubo-logo.svg"
            :alt="kuboIconFooter"
          />
          <h5>Empieza tu proyecto con kubo</h5>
          <div class="responsive-awards-list">
            <img v-for="award in awards" :key="award.altName"
              :width="award.width"
              :height="award.height"
              loading="lazy"
              :src="award.src"
              :alt="award.altName"
            >
          </div>
        </div>
        <div class="info-item">
          <p>Contactanos</p>
          <a class="btn-contact" href="">
            <img
              width="31"
              height="31"
              loading="lazy"
              src="/img/icons/wa-icon.svg"
              alt="whatsapp"
            />
            <!-- number -->
            +57 (601) 5800567
          </a>
        </div>

        <div class="info-item">
          <p>Visitanos</p>
          <a href="" target="_blank">
            <!-- ubication of offices -->
            Carrera 49A Nº 93-39 La Castellana
          </a>
        </div>
      </div>

      <div class="secondaryInformation">
        <div class="awardsList">
          <img v-for="award in awards" :key="award.altName"
            :width="award.width"
            :height="award.height"
            loading="lazy"
            :src="award.src"
            :alt="award.altName"
          >
        </div>
        <div class="terms-conditions">
          <p>© 2023 Kubo - Agencia digital de desarrollo de aplicaciones móviles, Colombia.</p>
          <a class="terms">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  </div>
</template>