import AuthForm from "../AuthForm/AuthForm";

export default function Login ({handleLogin}) {
  return (
    <AuthForm
      isLogin={true}
      onSubmit={handleLogin}
    />
  )
}
