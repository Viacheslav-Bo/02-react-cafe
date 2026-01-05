import css from "./Notification.module.css";

const Notification = () => <p className={css.message}>No feedback yet</p>;

export default Notification;

// Цей компонент не приймає пропсів.
// Реалізуйте умовний рендеринг компонентів залежно від значення totalVotes.
// Компонент VoteStats має рендеритись тільки після того, як буде отримано хоча б один голос.
// Тому, якщо значення totalVotes більше нуля, то має рендеритись компонент VoteStats.
// Якщо ж відгуків немає (тобто totalVotes дорівнює 0), то має рендеритись компонент Notification.
