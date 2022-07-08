import * as React from "react";
import { observer } from 'mobx-react-lite';

import { useDataStore } from '../store/context';

import '../style/controlButtons.css';

const Switcher = observer(() => {
  const { enabled, toggleSwitcher } = useDataStore();

  return (
    <label className="control__switch">
      <input id="checkbox" type="checkbox" checked={enabled} onChange={toggleSwitcher}/>
      <span className="control__switch__slider"/>
    </label>
  );
})

export default Switcher;
