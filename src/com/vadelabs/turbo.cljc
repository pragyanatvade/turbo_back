(ns com.vadelabs.turbo)

(defn app
  "Create a new turbo application.


  * `:init-store` a *map* containing a normalized turbo app database. Normally `turbo` will populate app state with your component tree's initial state. Use `mount!` to toggle the initial state pull from root. 
  ")
