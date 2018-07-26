import api from '../../api/groups'

// initial state
const state = {
  all: []
}

// getters
const getters = {

  groupsAll: state => state.all,

  groupNameById (state) {
    return groupId => {
      return (groupId) ? state.all.find(i => i.id === groupId).name : {}
    }
  }

}

// actions
const actions = {

  groupsGetAll ({commit}) {
    api.getAll()
      .then(groups => commit('setGroups', groups))
  }

}

// mutations
const mutations = {

  setGroups (state, groups) {
    state.all = groups
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
