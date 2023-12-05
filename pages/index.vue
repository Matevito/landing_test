<script>
export default {
    data() {
        return {
            sucessfullProjects: [
                {
                    widht: 66,
                    height: 74,
                    src: '/img/icons/project-icons/laika.svg',
                    altName: 'laika-icon'
                },
                {
                    widht: 138,
                    height: 39,
                    src: '/img/icons/project-icons/gopass.svg',
                    altName: 'gopass-icon'
                },
                {
                    widht: 107,
                    height: 105,
                    src: '/img/icons/project-icons/gane.svg',
                    altName: 'gane-icon'
                },
                {
                    widht: 138,
                    height: 78,
                    src: '/img/icons/project-icons/maxxi.svg',
                    altName: 'maxxi-icon'
                },
                {
                    widht: 138,
                    height: 32,
                    src: '/img/icons/project-icons/banclic.svg',
                    altName: 'banclic-icon'
                },
            ]
        }
    }
}

</script>
<template>
    <div class="homePage">
        <Welcome :projectsList="sucessfullProjects"/>
        <WeAre />
        <Why />
        <Success />
        <News />
        <AreYouReady />
    </div>
</template>
