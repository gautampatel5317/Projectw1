<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header bg-danger text-white">
              <h3 class="card-title">User SignUp</h3>
            </div>
            <div class="card-body">
              <form novalidate>
                <div v-if="v$.$error" class="alert alert-danger" role="alert">
                  <ul>
                    <div
                      class="text-danger"
                      v-for="error of v$.$errors"
                      :key="error.$uid"
                    >
                      <li>
                        <span>{{ error.$message }} </span>
                      </li>
                    </div>
                  </ul>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email Email</label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    v-model="formData.email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="formData.password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Confirm Password</label>
                  <input
                    name="cpassword"
                    type="password"
                    class="form-control"
                    id="cpassword"
                    placeholder="Enter Confirm Password"
                    v-model="formData.cpassword"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Address</label>
                  <input
                    name="address"
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="Enter Address"
                    v-model="formData.address"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Technology</label>
                  <div class="form-check">
                    <input
                      id="java"
                      class="form-check-input"
                      type="checkbox"
                      name="technology[]"
                      value="java"
                      v-model="formData.technology"
                    />
                    <label class="form-check-label" for="java">JAVA</label>
                  </div>
                  <div class="form-check">
                    <input
                      id="php"
                      class="form-check-input"
                      type="checkbox"
                      name="technology[]"
                      value="php"
                      v-model="formData.technology"
                    />
                    <label class="form-check-label" for="php">PHP</label>
                  </div>
                  <div class="form-check">
                    <input
                      id="javascript"
                      class="form-check-input"
                      type="checkbox"
                      name="technology[]"
                      value="javascript"
                      v-model="formData.technology"
                    />
                    <label class="form-check-label" for="javascript"
                      >JAVASCRIPT</label
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="Gender">Gender</label>
                  <div class="form-check">
                    <input
                      id="male"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      v-model="formData.gender"
                    />
                    <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check">
                    <input
                      id="female"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      v-model="formData.gender"
                    />
                    <label class="form-check-label" for="female">Female</label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleSelectRounded0">Country</label>
                  <select
                    class="custom-select form-control rounded-2"
                    id="exampleSelectRounded0"
                    name="country"
                    v-model="formData.country"
                  >
                    <option value="0">Please select country!</option>
                    <option value="india">India</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="srilanka">Srilanka</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary" @click="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  helpers,
  sameAs,
} from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
        cpassword: "",
        address: "",
        technology: [],
        gender: "",
        country: "",
      },
    };
  },
  validations() {
    return {
      formData: {
        email: {
          required: helpers.withMessage(
            "This email field cannot be empty!",
            required
          ),
          email: helpers.withMessage(
            "This email field have not valid email!",
            email
          ),
          $lazy: true,
        },
        password: {
          required: helpers.withMessage(
            "The password field can not be empty!",
            required
          ),
          minLength: helpers.withMessage(
            "The Password field should be at least 4 characters long!",
            minLength(4)
          ),
        },
        cpassword: {
          required: helpers.withMessage(
            "The confirm password field can not be empty!",
            required
          ),
          sameAsPassword: sameAs("password"),
        },
        address: {
          required: helpers.withMessage(
            "The address field can not be empty!",
            required
          ),
        },
      },
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        alert("Form was invalid");
        return;
      } else {
        alert("Form was submitted successfully!");
      }
    },
  },
};
</script>