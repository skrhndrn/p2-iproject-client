import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCatStore = defineStore("cats", {
  state: () => {
    return {
      localUrl: "http://localhost:3000",
      isLogin: false,
      cats: [],
      favorites: [],
      oneCat: {
        Favorites: [],
        User: {}
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
    async fetchCats() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.localUrl + '/cats',
        })
        this.cats = data
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Cannot Find Cats!",
          text: error.response.data.message,
        });
      }
    }
  }
})