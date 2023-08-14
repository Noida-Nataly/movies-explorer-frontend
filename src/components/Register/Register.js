import AuthForm from "../AuthForm/AuthForm";

export default function Register ({handleRegister}) {
  return (
    <AuthForm
      isLogin={false}
      onSubmit={handleRegister}
    />
  )
}
