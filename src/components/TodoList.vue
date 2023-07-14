<template>
  <div>
    <form action="">
      <input type="text" v-model="Item" />
      <button v-on:click="Add()" type="button">
        {{ data ? "Update" : "Add Item" }}
      </button>
    </form>

    <table border="3">
      <tr>
        <td><input type="checkbox" name="" id="" /></td>
        <td>Id</td>
        <td>Name</td>
        <td>Action</td>
      </tr>
      <tr v-for="Item in allItem" :key="Item.id">
        <td><input type="checkbox" name="" id="" /></td>
        <td>{{ Item.id }}</td>
        <td>{{ Item.Name }}</td>
        <td>
          <button v-on:click="ItemUp(Item)">Update</button
          ><button v-on:click="ItemDl(Item.id)" >Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Item",
  computed: mapGetters(["allItem"]),
  data() {
    return {
      Item: "",
      id: null,
      data: false,
    };
  },
  methods: {
    ...mapActions(["AddItems", "Update","Delete"]),
    Add() {
      console.log(this.Item);

      if (this.data) {
        let data = { id: this.id, Name: this.Item };
        console.log(data);
        this.Update(data);
        this.Item = "";
        this.data = false;
      }else if (this.Item) {
        let nid = this.allItem.length + 1;
        let data = { id: nid, Name: this.Item };
        console.log(data);
        this.AddItems(data);
        this.Item = "";
      } else {
        alert("invelid information");
      }
    },
    ItemUp(data) {
      this.Item = data.Name;
      this.id = data.id;
      this.data = true;
    },
    ItemDl(id){
      console.log(id);
      this.Delete(id)

    }
  },
};
</script>
<style scoped>
form {
  margin: 2rem;
}
form input {
  margin-right: 2rem;
}
table {
  width: 100%;
}
</style>
