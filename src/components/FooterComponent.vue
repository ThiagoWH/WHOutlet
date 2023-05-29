<template>


<!-- Footer -->
<footer class="text-center text-lg-start text-white footer">
  <!-- Section: Social media -->
  <section
          class="d-flex justify-content-between p-4 social-login">
    <!-- Left -->
    <div class="me-5">
      <span>Conecte-se conosco nas redes sociais:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/wh_outlet/" class="text-white me-4" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram">Instagram</i>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=5511977899540&text&type=phone_number&app_absent=0" class="text-white me-4" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram">WhatsApp</i>
        </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold">Wh Outleet</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold">Produtos</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p>
            <a href="/Masculino" class="text-white">Masculino</a>
          </p>
          <p>
            <a href="/Feminino" class="text-white">Feminino</a>
          </p>
          <p>
            <a href="/selecoes" class="text-white">Seleções</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold">Contato</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p><i class="fas fa-home mr-3"></i> São Paulo, SP, BR</p>
          <p><i class="fas fa-envelope mr-3"></i> contato@whoutlet.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 55 11 97789-9540</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div
    class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
      >
  © 2023 Copyright:
  <a class="text-white" href="/"
      >Wh Outlet</a
    >
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style>
.footer{
  background-color: #1c2331;
}

.social-login{
  background-color: #fd7e14;
}
</style>