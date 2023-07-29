import { defineStore } from 'pinia'
import type { AppRouteConfig } from '@/router/types'

interface AppState {
  visitedViews: AppRouteConfig[]
  cachedViews: AppRouteConfig[]
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    visitedViews: [],
    cachedViews: []
  }),
  actions: {
    addVisitedView(view: AppRouteConfig) {
      if (this.visitedViews.every(r => r.path !== view.path)) {
        this.visitedViews.push(view)
        return true
      }
      else {
        return false
      }
    },

    deleteVisitedView(view: AppRouteConfig) {
      const viewIndex = this.visitedViews.findIndex(
        ({ path }) => path === view.path
      )
      viewIndex > -1 && this.visitedViews.splice(viewIndex, 1)
    },

    addCachedView(view: AppRouteConfig) {
      if (this.cachedViews.every(r => r.path !== view.path)) {
        this.cachedViews.push(view)
      }
    },

    deleteCachedView(view: AppRouteConfig) {
      const viewIndex = this.cachedViews.findIndex(
        ({ path }) => path === view.path
      )
      viewIndex > -1 && this.cachedViews.splice(viewIndex, 1)
    }
  }
})
