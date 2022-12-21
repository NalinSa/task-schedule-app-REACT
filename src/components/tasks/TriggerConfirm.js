import style from "./TriggerConfirm.module.css";
function TriggerConfirm(props) {
  function cancelHandler() {
    props.onCancelClick();
  }
  function acceptHandler() {
    props.onAcceptClick();
  }
  return (
    <div className={style.trigger}>
      <h3>Did you finish the task?</h3>
      <p>"{props.nameToPop}"</p>
      <div className={style.actions}>
        <div className={style.accept}>
          <button onClick={acceptHandler}>Yep</button>
        </div>
        <div className={style.cancel}>
          <button onClick={cancelHandler}>Nope</button>
        </div>
      </div>
    </div>
  );
}
export default TriggerConfirm;
