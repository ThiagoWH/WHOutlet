<template>
    <section class="container mt-2" >
        <div class="row" :key="produto.id">
            <div class="col-md-6">
                <div class="card card-width">
                    <img :src='require(`../img/${produto.path}`)'>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-width">
                    <div class="card-body">
                        <h5 class="card-title">{{ produto.nomeDoProduto }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <button  class="btn btn-orange" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
        <ModalSuccessComponent :produto="produto"/>
    </section>
</template>
<script>
import db from '@/firebaseDb'
import { collection, getDocs,where, query } from '@firebase/firestore';
import ModalSuccessComponent from '@/components/ModalSuccessComponent.vue';

export default {
    name: 'PaginaDoProdutoView',
    components:{
        ModalSuccessComponent
    },
    data(){
        return{
            id: this.$route.params.id,
            show: false,
            produto: {
                path: 'ajax.jpg'
            }
        }
    },
    created() {
        this.getProductById();
        console.log(this.produto);
    },
    methods:{
        async getProductById() {
            const q = query(collection(db, 'produtos'), where('id','==', parseInt(this.id)))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.produto = doc.data();
            })
        },
        showAlert(){
            this.show = true;
        }
        
    }
}
</script>