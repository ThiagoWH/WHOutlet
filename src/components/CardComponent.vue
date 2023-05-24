<template>
  <section class="conteudo">
    <h1 class="title">{{ titulo }}</h1>
    <div class="row ">
            <div class="card card-products" style="width: 15rem;" v-for="produto in produtos" :key="produto.id">
            <img :src='require(`../img/${produto.path}`)'>
            <div class="card-body">
                <h5 class="card-title"> {{ produto.nomeDoProduto }}</h5>
                <p class="card-text">R$: {{ produto.preco }}</p>
                <RouterLink :to="{path: '/PaginaDoProduto/'+ produto.id}" class="btn btn-orange">Comprar</RouterLink>
            </div>
        </div>
    </div>
  </section>
  
        
</template>
<script>

export default ({
  name: "CardComponent",
  props: {
    produtos: Array,
    titulo: String
  },
  data(){
    return{

    }
  }
})
</script>
<style>
.conteudo{
    margin: 0 auto;
    width: 90%;
}
.card-products{
    margin: 0 auto;
    margin-bottom: 1em;
    text-align: center;
}
.title{
    margin-top: 10px;
    text-align: center;
}
.btn-orange{
  background: #fd7e14 !important;
  font-weight: 700;
}

.btn-orange:hover{
  background-color: #fca256 !important;
}
</style>
