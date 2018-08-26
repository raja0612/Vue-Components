<template>
    <div class="component">
        <strong>Parent Component</strong>
        <h1>The User Component</h1>
       
        <p>I'm an awesome User!</p>
        <p>Name : {{ name }}</p>
        <p>Age: {{age}}</p>
        <p>Breed: {{breed}}</p>
        <button @click="changeName" class="btn btn-primary">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name"
                @nameWasReset="name = $event"
                :resetFn="resetName"
                :age="age"
                :breed="breed"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age"
                @ageWasEdited="age = $event"
                :ageUpdateCallback="updateAge"
                :breed="breed"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Max",
      age: 2,
      breed: "Lab and Gloden Retriver"
    };
  },
  methods: {
    changeName() {
      this.name = "Maxum";
    },
    resetName() {
      this.name = "Name is changed through call back";
    },
    updateAge() {
      this.age = 3;
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
