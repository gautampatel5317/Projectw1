<template>
  <div class="row g-3 col-md-8 ms-5 display-flex">
    <div class="col">
      <input
        type="text"
        name="first_name"
        v-model="firstName"
        class="form-control"
        placeholder="First name"
        aria-label="First name"
      />
    </div>
    <div class="col">
      <input
        type="text"
        name="last_name"
        v-model="lastName"
        class="form-control"
        placeholder="Last name"
        aria-label="Last name"
      />
    </div>
    <div class="col">
      <button class="btn btn-info" @click="getInputData()">Save!</button>
    </div>
  </div>
  <br />
  <div class="form-group col-md-5 ms-5 display-flex">
    <input
      type="text"
      name="message"
      class="form-control"
      v-model="message"
    /><br />
    <span>{{ message }}</span>
  </div>
  <br />
  <div class="form-group ms-5 display-flex">
    <button class="btn btn-info" @click="incrementCounts()">Count</button>
    <span class="ms-5">{{ counts }}</span>
  </div>
  <br />
  <label class="ms-5 fw-bold text-danger">Select Technology</label>
  <div class="form-check ms-5 display-flex">
    <input
      class="form-check-input"
      type="checkbox"
      value="java"
      id="java"
      v-model="technology"
    />
    <label class="form-check-label" for="java"> JAVA </label>
  </div>
  <div class="form-check ms-5 display-flex">
    <input
      class="form-check-input"
      type="checkbox"
      value="php"
      id="php"
      v-model="technology"
    />
    <label class="form-check-label" for="php"> PHP </label>
  </div>
  <div class="form-check ms-5 display-flex">
    <input
      class="form-check-input"
      type="checkbox"
      value="node"
      id="node"
      v-model="technology"
    />
    <label class="form-check-label" for="node"> NODE </label>
  </div>
  <h4 class="ms-5 fw-bold">Selected Technology: {{ technology }}</h4>
  <label class="ms-5 fw-bold text-danger">Select User Type</label>
  <div class="form-check ms-5">
    <input
      class="form-check-input"
      type="radio"
      name="usertype"
      id="admin"
      v-model="userType"
      value="Admin"
    />
    <label class="form-check-label" for="admin"> Admin </label>
  </div>
  <div class="form-check ms-5">
    <input
      class="form-check-input"
      type="radio"
      name="usertype"
      id="enduser"
      v-model="userType"
      value="EndUser"
    />
    <label class="form-check-label" for="enduser"> EndUser </label>
  </div>
  <h4 class="ms-5 fw-bold">Selected User Type: {{ userType }}</h4>
  <br />
  <div class="ms-5">
    <h2>Toggle</h2>
    <button class="btn btn-info" @click="visible = !visible">Toggle</button
    ><br />
    <label class="text-success fw-bold" v-if="visible">Vue is Awsome!</label>
    <label class="text-danger fw-bold" v-else>React is Awsome!</label>
  </div>

  <table
    class="
      table table-bordered table-responsive table-hover table-dark table-sm
      section
    "
  >
    <thead>
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Phone</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(user, key) in users" :key="key">
        <tr>
          <th scope="row">{{ ++key }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button class="btn btn-info" @click="userView">View</button>&nbsp;
            <button class="btn btn-primary" @click="userEdit">Edit</button
            >&nbsp;
            <button class="btn btn-danger" @click="userDelete">Delete</button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <h2>{{ products }}</h2>
  <Child cname="cName" :users="users" :parentFun="parentFun"></Child>
  <Products :getProduct="getProductName"></Products>
</template>

<script>
import Child from "../Child.vue";
import Products from "../Product.vue";
export default {
  title: "Home Components",
  components: {
    Child,
    Products,
  },
  childName: "From Parent to Child Data",
  data() {
    return {
      counts: 0,
      message: "",
      firstName: "",
      lastName: "",
      technology: [],
      userType: null,
      visible: true,
      cName: this.childName,
      products: "",
      users: [
        {
          name: "Gautam Patel",
          email: "gautama.patel@radixweb.com",
          address: "Ahmedabad",
          phone: "+91 9898 918 760",
        },
        {
          name: "Rinku Patel",
          email: "rinku.patel@radixweb.com",
          address: "Ahmedabad",
          phone: "+91 9898 918 760",
        },
      ],
    };
  },
  methods: {
    parentFun() {
      console.log("Parent Function Calleds!");
    },
    userView() {
      console.log("called view button");
    },
    userEdit() {
      console.log("Called user edit button");
    },
    userDelete() {
      console.log("Called delete button");
    },
    incrementCounts() {
      console.log("called counts!");
      console.log(this.counts);
      this.counts = this.counts + 1;
    },
    getInputData() {
      console.log(this.firstName);
      console.log(this.lastName);
    },
    getProductName(productName) {
      this.products = productName;
    },
  },
};
</script>

<style scoped>
.section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 100rem;
}
</style>
