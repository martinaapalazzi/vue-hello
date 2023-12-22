const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Buone feste!',
                src: "grinc.jpg"
            }
        }
    }).mount('#app')