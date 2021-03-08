import * as THREE from 'three'
import { UseStore } from 'zustand'

import { Instance, LocalState } from 'react-three-fiber/src/core/renderer'
import { RootState, context, createStore } from 'react-three-fiber/src/core/store'

export type MockUseStoreState = UseStore<RootState>

type MockInstance = Omit<Instance, '__r3f'> & {
  __r3f: Omit<LocalState, 'root' | 'objects'> & {
    root: MockUseStoreState
    objects: MockSceneChild[]
  }
}

export type MockSceneChild = Omit<THREE.Object3D, 'children'> &
  MockInstance & {
    children: MockSceneChild[]
  }

export type MockScene = Omit<THREE.Scene, 'children'> &
  MockInstance & {
    children: MockSceneChild[]
  }

export { createStore, context }