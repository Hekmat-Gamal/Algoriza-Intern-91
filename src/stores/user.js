import { defineStore } from 'pinia'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [{ email: 'hekmat@gmail.com', password: '171199', isAutherized: true }]
  })
})
