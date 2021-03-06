import { authService } from "../services/Auth"

export function requiresAuth(to) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authService.isAuthenticated()) {
      return Promise.reject({ name: "login" })
    }

    authService.setAxiosDefaultAuthorizationHeader()
  }

  return Promise.resolve(to)
}

export function guestOnly(to) {
  if (
    to.matched.some(record => record.meta.guestOnly) &&
    authService.isAuthenticated()
  ) {
    return Promise.reject({ name: "galleries" })
  }

  return Promise.resolve(to)
}
