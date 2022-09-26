import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // export interface State {
    //     isModalOn: boolean
    // }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}