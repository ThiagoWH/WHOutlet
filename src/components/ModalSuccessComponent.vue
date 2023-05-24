<template>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Compra realizada com Sucesso</h5>
        <button type="button" @click="$router.push('/')" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="../img/success.png" class="mb-2" style="margin-left: 35%;">
        <h4>Resumo da compra:</h4>
            <ul class="list-group">
                <li class="list-group-item"><b>Método de págamento: Boleto</b></li>
                <li class="list-group-item"><b>{{ produto.nomeDoProduto }}</b></li>
                <li class="list-group-item"><b>R$ {{ produto.preco }}</b></li>
            </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'ModalSuccessComponent',
    props: {
        produto: Object,
    },
    data(){
        return{

        }
    }
}
</script>