const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Buone feste!',
                image: "grinch.jpeg",
            }
        }
    }).mount('#app')