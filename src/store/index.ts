import { createStore } from 'vuex'


export const store = createStore({
	state: {
		isModalOn: false,
		isSidebarOpen: false,
		isCart: false
	},

	mutations: {
		UPDATE_IS_MODAL_ON(state, isModalOn) {
			state.isModalOn = isModalOn;
			localStorage.setItem("isModalOn", JSON.stringify(state.isModalOn)); 
		},
		UPDATE_IS_SIDEBAR_OPEN(state, isSidebarOpen) {
			state.isSidebarOpen = isSidebarOpen;
			localStorage.setItem("isSidebarOpen", JSON.stringify(state.isSidebarOpen)); 
		},
		UPDATE_IS_CART(state, isCart) {
			state.isCart = isCart;
			localStorage.setItem("isCart", JSON.stringify(state.isCart)); 
		},
	},

	actions: {
		updateIsModalOn({ commit }, isModalOn) {
			commit("UPDATE_IS_MODAL_ON", isModalOn);
		},
		updateIsSidebarOpen({ commit }, isSidebarOpen) {
			commit("UPDATE_IS_SIDEBAR_OPEN", isSidebarOpen);
		},
		updateIsCart({ commit }, isCart) {
			commit("UPDATE_IS_CART", isCart);
		},
	},
});