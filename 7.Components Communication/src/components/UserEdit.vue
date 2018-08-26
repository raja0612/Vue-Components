<template>
    <div class="component">
         <strong>Child Component</strong>
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age : {{age}}</p>
        <p>breed: {{breed}}</p>
        <button class="btn btn-primary" @click="editAge">Edit Age</button>

        <button class="btn btn-primary" @click="ageUpdateCallback()">Edit Age Callback</button>

        <button class="btn btn-primary" @click="eventBusEdit">Edit Breed EventBus</button>
    </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["age", "ageUpdateCallback", "breed"],

  methods: {
    editAge() {
      this.age = 3;
      this.$emit("ageWasEdited", this.age);
    },
    eventBusEdit() {
      this.breed = "Golden Doodle";
      eventBus.$emit("breedWasEdited", this.breed);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
