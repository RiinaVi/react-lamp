import * as React from "react";

import { useDataStore } from '../store/context';

import '../style/controlButtons.css';

const RedButton: React.FC = () => {
  const { toggleMode } = useDataStore();

  return (
    <div className="control__button--red">
      <button id="redButton" onClick={toggleMode}/>
    </div>
  )
}

export default RedButton;
