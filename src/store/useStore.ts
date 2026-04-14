import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User, Output, UpsellType } from '@/types'

interface AppState {
  // User state
  user: User | null
  setUser: (user: User | null) => void
  
  // Upsells
  unlockedUpsells: UpsellType[]
  unlockUpsell: (upsell: UpsellType) => void
  hasUpsell: (upsell: UpsellType) => boolean
  
  // Saved outputs
  savedOutputs: Output[]
  addOutput: (output: Output) => void
  removeOutput: (id: string) => void
  clearOutputs: () => void
  
  // UI state
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  
  // Stats
  tasksCompleted: number
  incrementTasksCompleted: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User
      user: null,
      setUser: (user) => set({ user }),
      
      // Upsells
      unlockedUpsells: [],
      unlockUpsell: (upsell) => set((state) => ({
        unlockedUpsells: state.unlockedUpsells.includes(upsell)
          ? state.unlockedUpsells
          : [...state.unlockedUpsells, upsell]
      })),
      hasUpsell: (upsell) => get().unlockedUpsells.includes(upsell),
      
      // Outputs
      savedOutputs: [],
      addOutput: (output) => set((state) => ({
        savedOutputs: [output, ...state.savedOutputs]
      })),
      removeOutput: (id) => set((state) => ({
        savedOutputs: state.savedOutputs.filter((o) => o.id !== id)
      })),
      clearOutputs: () => set({ savedOutputs: [] }),
      
      // UI
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      // Stats
      tasksCompleted: 0,
      incrementTasksCompleted: () => set((state) => ({
        tasksCompleted: state.tasksCompleted + 1
      })),
    }),
    {
      name: 'ambit-storage',
      partialize: (state) => ({
        unlockedUpsells: state.unlockedUpsells,
        savedOutputs: state.savedOutputs,
        tasksCompleted: state.tasksCompleted,
      }),
    }
  )
)
