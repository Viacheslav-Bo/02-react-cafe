import css from "./VoteOptions.module.css";
export default function VoteOptions() {
  return (
    <div className={css.container}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}

// Компонент має приймати три пропси:

// onVote – функція, яка викликається при кліку на одну з кнопок голосування;
// onReset – функція, що викликається при кліку на кнопку Reset і відповідає за скидання голосів;
// canReset – булеве значення, яке визначає, чи потрібно показувати кнопку Reset. (На цьому етапі можеш передавати просто зі значенням true.)

// У файлі компонента оголосіть інтерфейс VoteOptionsProps, який описує типи для пропсів компонента.

// На цьому етапі кнопки мають працювати, оновлюючи стан в App:
