import {Action, ActionList} from "@planb/definitions/listView";

interface BuildButtonsProps<TData> {
  canEdit: boolean;
  canDelete: boolean;
  canShow: boolean;
  edit: Action<TData>;
  show: Action<TData>;
  delete: Action<TData>;
  actions?: ActionList<TData>
}

export const buildButtons = <TData extends any>(props: BuildButtonsProps<TData>): Action<TData>[] => {

  const {canEdit, canDelete, canShow, edit, show, delete: remove, actions = {}} = props

  const temp: string[] = []
  temp.push('show', 'edit', 'delete', ...Object.keys(actions).reverse())

  const keys = temp
    .reverse()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })

  const defaults = {
    edit: 'edit' in actions ? actions.edit : true,
    delete: 'delete' in actions ? actions.delete : true,
    show: 'show' in actions ? actions.show : true,
  }

  return keys
    .map((name) => {
      switch (name) {
        case 'edit':
          return canEdit && defaults.edit ? edit : null
        case 'show':
          return canShow && defaults.show ? show : null
        case 'delete':
          return canDelete && defaults.delete ? remove : null
        default:
          // @ts-ignore
          return actions[name]
      }
    }).filter(action => action !== null)

};
