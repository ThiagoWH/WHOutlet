<template>
    <div class="card" style="width: 18rem;" v-for="produto in produtos">
            <img :src='require(`../img/${produto.path}`)'>
                    <div class="card-body">
                    <h5 class="card-title"> {{ produto.nomeDoProduto }}</h5>
                    <p class="card-text">{{ produto.Preco }}</p>
                <button class="btn btn-orange">Comprar</button>
            </div>
        </div>
</template>

<script>
import db from '@/firebaseDb'
import { collection, addDoc, getDoc, onSnapshot } from '@firebase/firestore';
export default{
    name: 'Selecoes',
    data() {
        return{
            produtos: [],
        }
    },
    created() {
        this.getProducts();
        console.log(this.produtos)
    },
    methods: {
        async getProducts(){
            onSnapshot(collection(db, 'produtos'),(snap) => {
                snap.forEach((doc) => {
                    this.produtos.push(doc.data());
                })
            })
        }
    }
}
</script>
<style>
.btn-orange {
    background-color: #fd7e14;
    font-weight: 700;
}
</style>