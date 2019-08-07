const itinitialState = {
  showList: false,
  showEditAct: false,
  showAddActivity: false,
  showConfirmDelete: false,
  showConfirmDeleteAct: false
}

const displayReducer = (state = itinitialState, action) => {
  const { type } = action
  switch (type) {
    case 'SHOW_LIST':
      return { ...state, showList: true }
    case 'SHOW_EDIT_ACT':
      return { ...state, showEditAct: true }
    case 'SHOW_ADD_ACT':
      return { ...state, showAddActivity: true }
    case 'SHOW_CONFIRM_DEL':
      return { ...state, showConfirmDelete: true }
    case 'SHOW_CONFIRM_DEL_ACT':
      return { ...state, showConfirmDeleteAct: true }
    default:
      return state
  }
}
export default displayReducer
