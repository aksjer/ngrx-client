import * as fromLayout from '../actions/layout';
import { SIDENAV_CLOSE, DIALOG_OPEN } from '../actions/layout';
import { MyDialog } from '../models/my-dialog';
import { MySnackBar, MySnackBarAction } from '../models/my-snackbar';

export interface State {
  sidenavOpened: boolean;
  loadingBar: boolean;
  dialog: MyDialog;
  snackbar: MySnackBar;
}

const initialState: State = {
  sidenavOpened: false,
  loadingBar: false,
  dialog: { opened: false, component: null },
  snackbar: new MySnackBar(false, null, null, 4000)
};

export function reducer(state: State = initialState, action: fromLayout.Actions): State {
  switch (action.type) {
    case fromLayout.SIDENAV_OPEN:
      return Object.assign({}, state, { sidenavOpened: true });
    case fromLayout.SIDENAV_CLOSE:
      return Object.assign({}, state, { sidenavOpened: false });
    case fromLayout.LOADINGBAR_ON:
      return Object.assign({}, state, { loadingBar: true });
    case fromLayout.LOADINGBAR_OFF:
      return Object.assign({}, state, { loadingBar: false });
    case fromLayout.DIALOG_OPEN:
      return Object.assign({}, state, { dialog: { opened: true, component: action.payload } });
    case fromLayout.DIALOG_CLOSE:
      return Object.assign({}, state, { dialog: { opened: false, component: null } });
    case fromLayout.SNACKBAR_OPEN:
      return Object.assign({}, state, { snackbar: action.payload });
    case fromLayout.SNACKBAR_CLOSE:
      return Object.assign({}, state, { snackbar: { opened: false, text: null, action: null, duration: 4000 } });
    default:
      return state;
  }
}

export const getLayoutSidenav = (state: State): boolean => state.sidenavOpened;
export const getLayoutLoadingBar = (state: State): boolean => state.loadingBar;
export const getLayoutDialog = (state: State): MyDialog => state.dialog;
export const getLayoutSnackBar = (state: State): MySnackBar => state.snackbar;
