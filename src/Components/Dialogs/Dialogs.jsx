import React from "react";
import styleCss from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialog_with_user}>
        <div className={styleCss.item_dialog+' '+styleCss.active}>Sashko</div>
        <div className={styleCss.item_dialog}>Marichka</div>
        <div className={styleCss.item_dialog}>Ustym</div>
        <div className={styleCss.item_dialog}>tato KiKi</div>
        <div className={styleCss.item_dialog}>mama Katya</div>
        <div className={styleCss.item_dialog}>babusya Nadya</div>
        <div className={styleCss.item_dialog}>did Ivan</div>
        <div className={styleCss.item_dialog}>babusya Natasha</div>
      </div>
      <div className={styleCss.messages}>
        <div className={styleCss.messages}>Hi</div>
        <div className={styleCss.messages}>Hello</div>
        <div className={styleCss.messages}>How is your studying?</div>
        <div className={styleCss.messages}>It is normal</div>
      </div>
    </div>
  );
};

export default Dialogs;
