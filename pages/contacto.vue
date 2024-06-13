<script setup lang="ts"></script>
<template>
  <h1>CONTACTA CON NOSOTROS</h1>
  <form>
    <label for="name"
      >Name
      <input type="text" id="name" name="name" />
    </label>
    <label for="email"
      >Email
      <input type="email" id="email" name="email" />
    </label>
    <label for="message"
      >Mensaje
      <input type="text" id="name" name="message" />
    </label>
    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped lang="scss">
h1 {
  font-size: 3em;
  text-align: center;
  margin: 1em 0;
  font-weight: bold;

  @include responsive() {
    font-size: 1.5em;
  }
}

form {
  @include flex(column);
  gap: 1em;
  margin: 3em auto;
  width: 50%;
  background-color: #0f0f0f;
  padding: 3em;
  border-radius: 0.5em;

  @include responsive() {
    padding: 1em;
    width: 90%;
  }
}

label {
  font-size: 1.5em;
  padding: 0.5em;
}

input {
  font-size: 1.2em;
  padding: 0.5em;
  width: 100%;
  margin: 0.5em 0;
  background-color: #1f1f1f;
  border-radius: 0.3em;
}

button {
  background-color: map.get($colors, 'c-primary');
  font-size: 1.5em;
  padding: 1em 4em;
  transition: scale 0.3s;
  border-radius: 0.3em;
  color: map.get($colors, 'c-black');
  font-weight: bold;
  cursor: pointer;
  margin: 1em 0;

  &:hover {
    scale: 1.1;
  }
}
</style>
