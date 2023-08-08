<template>
    <section class="container mt-2 mb-5" >
        <div>
            <b>Titulo: </b>{{ product.title }}
        </div>
        <div>
            <b>Descrição: </b>{{ product.description }}
        </div>
        <div>
            <b>Preço: U$ </b>{{ product.price }}
        </div>
        <div>
            <b>Marca: </b>{{ product.brand }}
        </div>
        <div>
            <b>Categoria: </b>{{ product.category }}
        </div>
        <div class="container mt-2">
            <div class="row">
                <div class="col" v-for="image in product.images" :key="image" >
                    <img :src="image" class="d-block w-100"/>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
import axios from "axios";

export default {
    name: 'ProductApiView',
    data(){
        return{
            product: {}
        }
    },
    created () {
        this.getProductById(1);
    },
    methods:{
        getProductById(id){
            axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                this.product = res.data;
            })
            .catch((error) => {
                console.log(`Erro na requisição info: ${error}`);
            })
        }

        
    }
}
</script>