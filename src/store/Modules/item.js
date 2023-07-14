const state = {
  Item: [
    { id: 1, Name: "abc" },
    { id: 2, Name: "abc" },
    { id: 3, Name: "abc" },
  ],
};
const getters = {
  allItem: (state) => state.Item,
};
const actions = {
  AddItems: (state, Item) => {
    console.log(Item);
    state.state.Item.push(Item);
    console.log(state.state.Item);
  },
  Update: (state, data) => {
    // console.log(data);
    state.state.Item.map((Item, index) => {
      if (data.id === Item.id) {
        state.state.Item[index] = data;
        console.log(index);
      }
    });
  },
  Delete: (state, id) => {
    state.state.Item.map((Item, index) => {
      if (Item.id === id) {
        state.state.Item.splice(index, index + 1);
      }
    });
  },
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
