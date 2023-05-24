<template>
     <Card-component :produtos="produtos" titulo="Seleções"/>    
</template>

<script>
import db from '@/firebaseDb'
import { collection,onSnapshot } from '@firebase/firestore';
import CardComponent from '@/components/CardComponent.vue';

export default{
    name: 'Selecoes',
    components: {
        CardComponent
    },
    data() {
        return{
            produtos: [],
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts(){
            onSnapshot(collection(db, 'produtos'),(snap) => {
                snap.forEach((doc) => {
                    if (doc.data().categoria == 'selecao') {
                        this.produtos.push(doc.data());
                    }    
                })
            })
        }
    }
}
</script>