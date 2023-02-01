<script setup>
import { almacen } from '../stores/auth.js'
const datos = almacen()
</script>

<template>
  <div class="modal fade modalRegistro" id="registro">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Regístrate</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="datos.register">
            <!-- CORREO -->
            <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <input
                v-model="datos.email"
                type="email"
                required="true"
                class="form-control"
              />
            </div>
            <!-- PASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input
                v-model="datos.password"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <!-- REPASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">Repite Password</span>
              <input
                v-model="datos.repassword"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <div class="d-grid gap-2">
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modalRegistro{
  margin: 30vh auto;
}
</style>