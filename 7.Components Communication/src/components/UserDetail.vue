<template>
    <div class="component">
        <strong>Child Component</strong>
        <h3>You may view the User Details here</h3>
        <p>User Details</p>
        <p>name : {{myName}}</p>
        <p>Age: {{age}}</p>
        <p>Breed: {{breed}}</p>
         <br>
        <p>Reverse Name : {{reverseName()}} </p>
       
        <button class="btn btn-primary" @click="resetName">Reset Name</button>
        <button class="btn btn-primary" @click="resetFn()">Reset Call Back</button>
    </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myName: {
      type: String,
      required: true
    },
    resetFn: Function,
    age: Number,
    breed: String
  },
  methods: {
    reverseName() {
      console.log("reverseName");
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      console.log("resetName");
      this.myName = "Child component updated parent property";

      //emit event to Parent component User.vue
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    eventBus.$on("breedWasEdited", data => {
      console.log("event bus on event data", data);
      this.breed = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
