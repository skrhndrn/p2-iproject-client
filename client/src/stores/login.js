import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      baseUrl: 'http://localhost:3000',
      isLogin: false,
      username: {},
      formLogin: {
        email: "",
        password: ""
      }
    }
  },
  actions: {
    alert() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      return Toast;
    },
    async loginUser() {
      try {
        const { data } = await axios.post(this.baseUrl + '/login', {
          email: this.formLogin.email,
          password: this.formLogin.password
        })
        const { access_token } = data
        localStorage.setItem("username", data.username),
        localStorage.setItem("email", data.email),
        localStorage.setItem("access_token", data.access_token)
        this.username = localStorage.username
        this.isLogin = true
        this.formLogin.email = ""
        this.formLogin.password = ""
        this.router.push("/");
        this.alert().fire({
          icon: "success",
          title: `Welcome back, ${this.username}!`,
        });  
      } catch (error) {
        console.log(error, '<<<<< ini errorrnya');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "invalid email or password",
        });
      }
    },
    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.username = "";
      this.router.replace("/login");
      this.alert().fire({
        icon: "success",
        title: "Logged out successfully",
      });
      this.formLogin.email = "";
      this.formLogin.password = "";
    },
  }
})
